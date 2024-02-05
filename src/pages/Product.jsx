import React, { useState, useEffect } from "react";
import Pitem from "../components/Pitem";
import { BASE_TEST } from "../../config";
import jwt_decode from 'jwt-decode'
import { useParams } from "react-router-dom";
import { Dots } from "react-activity";
import 'react-activity/dist/library.css';



const Product = () => {
    const [items, setitems] = useState(null)
    const [email, setemail] = useState()
    const {productId} = useParams()
    const [loading, setloading] = useState(true)

    useEffect(() => {
        async function getItem(id) {
            try {
                const token = localStorage.getItem('token')
                const {email} = jwt_decode(token)
                setemail(email)
                const response = await fetch(`${BASE_TEST}/getItem/${id}/${email}`, {
                    method: 'POST'
                });
                if (response.ok) {
                    const data = await response.json();
                    console.log('Message: ', data.message[0])
                    setitems(data.message[0]);
                    setloading(false)

                } else {
                    console.error('Failed to fetch item details');
                }
            } catch (error) {
                console.error(error);
            }
        }
        getItem(productId);
    }, [productId]);


    return(
        <div className="flex flex-col items-center justify-center">
            {loading ? (
                <Dots color="white" size={26}/>
            ) : (
                <div className="flex flex-col items-center justify-center">
                    <Pitem item={items.Message}/>
                </div>
            )}
            
        </div>
    )
}

export default Product;