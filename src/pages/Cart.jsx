import React, { useEffect, useState } from "react";
import NavHome from "../components/NavHome";
import Header from "../components/Header";
import CartItem from "../components/CartItem";
import { BASE_TEST } from "../../config";
import jwt_decode from 'jwt-decode'
import 'react-activity/dist/library.css';
import { Dots } from "react-activity";
import Ret from "../components/Ret";

const Cart = () => {
  // Dummy data for demonstration
  const [cartitems, setcartitems] = useState([])
  const [emails, setemails] = useState('')
  const [unknownerr, setunknownerr] = useState(false)
  const [loading, setloading] = useState(true)
  
  useEffect(() => {
    async function getDeets(){
      const token = localStorage.getItem('token')
      const decodedtoken = jwt_decode(token)
      const email = decodedtoken.email
      setemails(email)
    }

    getDeets();
  }, []);

  useEffect(() => {
    async function getcart() {
      if (emails === '') {
        return; // emails is empty, don't make the fetch call
      }
      console.log('This: ', emails);
      const response = await fetch(`${BASE_TEST}/getCartItems/${emails}`);
      console.log(response)
      if (!response.ok) {
        return;
      }
  
      const resp2 = await response.json();
      console.log(resp2);
      if (resp2.status === 200) {
        setcartitems(resp2.cart_items);
        setloading(false);
      } else if (resp2.status === 404) {
        setcartitems([]);
        setloading(false);
      } else {
        setunknownerr(true);
        setloading(false);
      }
    }
  
    getcart();
  }, [emails]);
  

  // Calculate total amount
  const totalAmount = cartitems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <Header />
      <NavHome />

      <div className="container mx-auto mt-8 p-4">
        {loading ? (
          <Dots className="flex items-center justify-center" color="black" size={40}/>
        ) : (
          <div>
            <p className="text-gray-600 font-bold text-xl mb-4">Home / Cart</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Display Cart Items */}
              {cartitems.map((item) => (
                <CartItem key={item.id} item={item} mail={emails} />
              ))}
            </div>

            {/* Display total amount */}
            <Ret/>
            <div className="flex justify-end items-center mt-5">
              <p className="text-lg font-bold mr-3">Total: NGN {totalAmount.toFixed(2).toLocaleString()}</p>
              {/* Add checkout button or any other actions */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
