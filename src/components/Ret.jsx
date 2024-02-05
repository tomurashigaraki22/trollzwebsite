import React from "react";


const Ret = () => {
    return(
        <div>
            <div className="flex flex-row items-start justify-between pt-5 pb-5">
                <div className="border border-white bg-gray-300 rounded-md p-3 hover:bg-gray-500 cursor-pointer">
                    <p>Return To Shop</p>
                </div>
                <div className="border border-white bg-red-400 rounded-md p-3 hover:bg-red-600 cursor-pointer hover:underline">
                    <p>Checkout</p>
                </div>
            </div>
        </div>
    );
}

export default Ret;