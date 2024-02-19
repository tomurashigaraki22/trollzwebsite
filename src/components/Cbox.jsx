import React, {useState, useEffect} from "react";
import { BASE_TEST } from "../../config";
import { useNavigate } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import jwt_decode from 'jwt-decode'

const Cbox = ({ items, cate }) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [adding, setAdding] = useState(false);
    const [addedItem, setAddedItem] = useState(null); // State to track the item that has been added
    const [errAdd, setErrAdd] = useState(false);
    const [unknown, setUnknown] = useState(false);

    useEffect(() => {
        async function getDeets() {
            const token = localStorage.getItem('token');
            if (token) {
                const decodedToken = jwt_decode(token);
                const email = decodedToken.email;
                setEmail(email);
            }
        }
        getDeets();
    }, []);

    const addtocart = async (id) => {
        if (!email) {
            // Handle case when user is not authenticated
            return;
        }
        setAdding(true);
        const response = await fetch(`${BASE_TEST}/addToCart/${id}/${email}`);
        if (!response.ok) {
            setAdding(false);
            return;
        }
        const resp2 = await response.json();
        if (resp2.status === 200) {
            setAdding(false);
            setAddedItem(id); // Set the id of the added item
        } else if (resp2.status === 404) {
            setAdding(false);
            setErrAdd(true);
        } else {
            setAdding(false);
            setUnknown(true);
        }
    }


    return(
        <div>
            <div>
                <div>
                    <div className="flex flex-row items-center space-x-2 pb-4">
                        <p className="border-2 bg-red-600 border-red-600 w-[20px] rounded-md">.</p>
                        <p className="text-red-600 font-bold">Category: {cate}</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-screen-lg">
                    {items.map((ite, index) => (
                        <div className="flex flex-col items-center space-y-2" key={index}>
                            <div style={{ height: "200px" /* set a fixed height */ }} onClick={() => navigate(`/product/${ite.id}`)}>
                                <img
                                    src={`${BASE_TEST}/${ite.img}`}
                                    alt={ite.caption}
                                    className="w-full h-full object-contain cursor-pointer"
                                />
                            </div>
                            {adding && addedItem === ite.id ? (
                                <div className="flex flex-row items-center justify-center w-full border border-black bg-black rounded-md hover:bg-gray-900 cursor-pointer">
                                    <Dots/>
                                </div>
                            ) : (
                                addedItem === ite.id ? (
                                    <div className="flex flex-row items-center justify-center w-full border border-green bg-green-700 rounded-md hover:bg-green-900 cursor-pointer">
                                        <p className="text-white font-bold">Added</p>
                                    </div>
                                ) : (
                                    <div onClick={() => addtocart(ite.id)} className="flex flex-row items-center justify-center w-full border border-black bg-black rounded-md hover:bg-gray-900 cursor-pointer">
                                        <ShoppingCart color="white" size={26} />
                                        <p className="text-white">Add To Cart</p>
                                    </div>
                                )
                                
                            )}
                            <div className="flex flex-col items-center space-y-2" onClick={() => navigate(`/product/${ite.id}`)}>
                                <p>{ite.caption}</p>
                                <p>NGN {ite.price.toLocaleString()}</p>
                            </div>
                        </div>
                    ))}
                </div>
                </div>
            </div>
        </div>
    );
}

export default Cbox;