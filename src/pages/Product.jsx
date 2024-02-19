// Product.jsx
import React, { useState, useEffect } from "react";
import Pitem from "../components/Pitem";
import { BASE_TEST } from "../../config";
import jwt_decode from 'jwt-decode'
import { useParams } from "react-router-dom";
import { Dots } from "react-activity";
import 'react-activity/dist/library.css';
import NavHome from "../components/NavHome";
import Footer from "../components/Footer";

const Product = () => {
    const [items, setitems] = useState(null)
    const [email, setemail] = useState()
    const {productId} = useParams()
    const [loading, setloading] = useState(true)

    useEffect(() => {
        async function getItem(id) {
            try {
                const token = localStorage.getItem('token')
                const { email } = jwt_decode(token)
                setemail(email)
    
                const response = await fetch(`${BASE_TEST}/getItem/${id}/${email}`, {
                    method: 'POST'
                });
    
                console.log('Response status:', response.status);
    
                if (response.ok) {
                    const data = await response.json();
                    console.log('Data:', data);
    
                    if (data.message && data.message.length > 0) {
                        console.log('Message:', data.message[0])
                        setitems(data.message[0]);
                        setloading(false);
                    } else {
                        console.error('No item found in the response data.');
                        setloading(false);
                    }
                } else {
                    console.error('Failed to fetch item details:', response);
                    setloading(false);
                }
            } catch (error) {
                console.error('Error in getItem:', error);
                setloading(false);
            }
        }
    
        console.log('Calling getItem with productId:', productId);
        getItem(productId);
    }, [productId]);
    


    return (
        <div>
            <NavHome />
            <div className="flex flex-col items-center justify-center">
                {loading ? (
                    <Dots color="white" size={26}/>
                ) : (
                    <div className="flex flex-col items-center justify-center">
                        
                        {items ? (
                            <Pitem item={items} isload={items} mail={email}/>
                        ) : (
                            <p>No item found</p>
                        )}
                    </div>
                )}
            </div>
            <Footer />
        </div>
    )
}

export default Product;
