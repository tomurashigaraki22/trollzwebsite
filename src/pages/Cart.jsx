import React, { useEffect, useState } from "react";
import NavHome from "../components/NavHome";
import Header from "../components/Header";
import CartItem from "../components/CartItem";
import { BASE_TEST } from "../../config";
import jwt_decode from 'jwt-decode'
import { PaystackButton } from "react-paystack";
import 'react-activity/dist/library.css';
import { Dots } from "react-activity";
import Ret from "../components/Ret";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cartitems, setcartitems] = useState([]);
  const [emails, setemails] = useState('');
  const [unknownerr, setunknownerr] = useState(false);
  const [loading, setloading] = useState(true);
  const [cookiesAccepted, setCookiesAccepted] = useState(false); // State to track if cookies are accepted
  const [cartClear, setCartClear] = useState(false); // State to track if the cart is cleared
  const [problem, setProblem] = useState(false); // State to track if there's a problem with the order
  const [errorAfterPay, setErrorAfterPay] = useState(false); // State to track if there's an error after payment
  const totalAmount = cartitems.reduce((total, item) => total + item.price * item.quantity, 0);
  const navigate = useNavigate();

  const publicKey = 'pk_live_660789901375b5024e07ba3e95ff1a043949ee77';
  const secretKey = 'sk_live_85fa61d5f727b18ceed683d3fdbf94c17776a4b2';

  const onSuccessDo = () => {
    handleBillingAddressSubmit(); // Automatically submit the address
  };

  const handleBillingAddressSubmit = () => {
    try {
      const formdata = new FormData();
      const token = localStorage.getItem('token');
      const { address } = jwt_decode(token);
      formdata.append('cart', JSON.stringify(cartitems));
      formdata.append('address', address);
      fetch(`${BASE_TEST}/clearCart/${emails}`, {
        method: 'POST',
        body: formdata
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.status === 200) {
            setCartClear(true);
            alert('Order Completed Successfully');
          } else {
            setProblem(true);
          }
        });
    } catch (error) {
      console.error(error);
      setErrorAfterPay(true);
    }
  };

  const componentProps = {
    email: emails,
    amount: parseInt(totalAmount) * 100,
    publicKey: publicKey,
    secretKey: secretKey,
    text: "Pay Now",
    onSuccess: onSuccessDo,
    onClose: () => alert("Wait! You need this oil, don't go!!!!"),
  };

  useEffect(() => {
    const getDeets = async () => {
      const token = localStorage.getItem('token');
      const decodedtoken = jwt_decode(token);
      const email = decodedtoken.email;
      setemails(email);
    };
    getDeets();
  }, []);

  useEffect(() => {
    const getcart = async () => {
      console.log('Emails: e', emails)
      if (emails === '') {
        return;
      }
      const response = await fetch(`${BASE_TEST}/getCartItems/${emails}`);
      if (!response.ok) {
        return;
      }
      const resp2 = await response.json();
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
    };
    getcart();
  }, [emails]);

  const handleAcceptCookies = () => {
    setCookiesAccepted(true); // Set cookiesAccepted to true when the user accepts cookies
  };

  return (
    <div>
      <Header />
      <NavHome />

      <div className="container mx-auto mt-8 p-4">
        {loading ? (
          <Dots className="flex items-center justify-center" color="black" size={40} />
        ) : (
          <div>
            <p className="text-gray-600 font-bold text-xl mb-4">Home / Cart</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {cartitems.map((item) => (
                <CartItem key={item.id} item={item} mail={emails} />
              ))}
            </div>

            <div>
              <div className="flex flex-row items-start justify-between pt-5 pb-5">
                <div className="border border-white bg-gray-300 rounded-md p-3 hover:bg-gray-500 cursor-pointer">
                  <p>Return To Shop</p>
                </div>
                {/* Display PaystackButton only if cookies are accepted */}
                {cookiesAccepted && (
                  <div className="border border-white bg-red-400 rounded-md p-3 hover:bg-red-600 cursor-pointer hover:underline transition">
                    <PaystackButton {...componentProps} className="bg-red-400 text-white p-2 rounded hover:bg-red-600 transition" />
                  </div>
                )}
              </div>
            </div>
            <div className="flex justify-end items-center mt-5">
              <p className="text-lg font-bold mr-3">Total: NGN {totalAmount.toFixed(2).toLocaleString()}</p>
            </div>
          </div>
        )}

        {/* Display Cookie Consent Banner */}
        {!cookiesAccepted && (
          <div className="fixed bottom-0 left-0 right-0 bg-gray-800 p-4 text-white text-center">
            <p>We use cookies to ensure you get the best experience on our website.</p>
            <button onClick={handleAcceptCookies} className="bg-green-500 hover:bg-green-600 text-white font-bold px-4 py-2 rounded mt-2">Accept Cookies</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
