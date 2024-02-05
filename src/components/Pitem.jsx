import React from "react";
import { BASE_TEST } from "../../config";
import { Check, Heart } from "lucide-react";


const Pitem = ({ item }) => {
    console.log('Item: ', item)
    return(
        <div>
            <div>
                <div>
                    <img 
                    src={`${BASE_TEST}/${item.img}`}
                    alt="Product Item"
                    className="w-auto h-auto"
                    />
                    <div className="flex flex-col items-start space-y-2">
                        <p className="text-2xl font-bold text-black">{item.caption}</p>
                        <div className="flex items-center mb-2">
                            <span className="text-yellow-500">★</span>
                            <span className="text-yellow-500">★</span>
                            <span className="text-yellow-500">★</span>
                            <span className="text-gray-400">☆</span>
                            <span className="text-gray-400">☆</span>
                        </div>
                        <div className="flex flex-row items-start">
                            <p>In Stock</p>
                            <Check color="green" size={24}/>
                        </div>
                        <p>Colours: {item.colors}</p>
                        <p>Price: NGN {item.price}</p>
                        <div className="flex flex-row items-start space-x-6">
                            <p className="border border-white bg-red-500 hover:bg-red-700 rounded-md">Add To Cart</p>
                            <Heart color="white" size={27} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pitem;