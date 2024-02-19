import React, { useEffect, useState } from "react";
import NavHome from "../components/NavHome";
import { useLocation } from "react-router-dom";
import Cbox from "../components/Cbox";
import { BASE_TEST } from "../../config";
import { Dots } from "react-activity"; // Import the loading spinner component
import jwt_decode from 'jwt-decode'

const Category = () => {
    const [items, setItems] = useState(null);
    const location = useLocation();
    const cate = location.state.cate;

    useEffect(() => {
        async function getDeets(){
            const token = localStorage.getItem('token')
            console.log('Token: ', token)
            const decodedtoken = jwt_decode(token)
            console.log(decodedtoken)
            const email = decodedtoken.email
        }
        async function getCate() {
            const response = await fetch(`${BASE_TEST}/getItemses/${cate}`);
            if (!response.ok) {
                return;
            }
            const resp2 = await response.json();
            if (resp2.status === 200) {
                setItems(resp2.posts);
            } else {
                console.log('error occurred');
            }
        }
        getDeets()
        getCate();
    }, [cate]);

    return (
        <div>
            <NavHome />
            {items !== null ? ( // Conditional rendering: Render Cbox only when items is not null
                <div className="flex flex-col items-center">
                    <Cbox items={items} cate={cate} />
                </div>
            ) : (
                <div className="flex justify-center items-center h-screen">
                    <Dots /> {/* Render loading spinner while items is loading */}
                </div>
            )}
        </div>
    );
}

export default Category;
