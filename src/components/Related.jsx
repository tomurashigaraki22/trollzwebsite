import React from "react";
import { BASE_TEST } from "../../config";
import { useNavigate } from "react-router-dom";

const Related = ({ item }) => {
    const navigate = useNavigate();

    return (
        <div>
            <div className="flex items-start space-x-2 pb-6 pt-10">
                <p className="border-2 bg-red-600 border-red-600 w-5 rounded-md">.</p>
                <p className="text-red-600 font-bold">Related Items</p>
            </div>
            <div className="overflow-x-auto">
                <div className="max-w-full">
                    <div className="flex flex-row pl-[5vw] sm:pl-[10px] md:pl-[120px] space-x-5">
                        {item.map((ite, index) => (
                            <div key={index} className="border-4 p-4 w-[80%] sm:w-[50%] md:w-[33%] lg:w-[20%] hover:border-red-600" onClick={() => navigate(`/product/${ite.id}`)}> {/* Adjusted width based on screen size */}
                                <div className="flex flex-col items-center justify-center">
                                    {/* Display your item content here */}
                                    <div className="flex flex-col items-start cursor-pointer">
                                        <img
                                            src={`${BASE_TEST}/${ite.img}`}
                                            alt="Image"
                                            className="w-full mb-2"
                                        />
                                        <p className="text-black font-bold mb-2">{ite.caption}</p>
                                        <p className="text-red-600 font-bold">{ite.currency} {ite.price.toLocaleString()}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Related;
