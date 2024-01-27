import React from "react";
import { BaggageClaim, Headphones, ShieldCheck } from "lucide-react";

const Prefooter = () => {
    return (
        <div>
            <div className="flex flex-row items-center justify-center space-x-10 pt-[140px] pb-[140px]">
                <div className="flex flex-col items-center">
                    <div className="border-4 rounded-full border-gray-600 p-4 bg-black">
                        <BaggageClaim color="white" size={60} />
                    </div>
                    <p className="text-black text-xl font-bold mt-2 pb-2">FREE AND FAST DELIVERY</p>
                    <p className="text-black">Free Delivery for all orders above #250,000</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="border-4 rounded-full border-gray-600 p-4 bg-black">
                        <Headphones color="white" size={60} />
                    </div>
                    <p className="text-black text-xl font-bold mt-2 pb-2">24/7 CUSTOMER SERVICE</p>
                    <p className="text-black">Friendly 24/7 customer support</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="border-4 border-w-10 rounded-full border-gray-600 p-4 bg-black">
                        <ShieldCheck color="white" size={60} />
                    </div>
                    <p className="text-black text-xl font-bold mt-2 pb-2">MONEY BACK GUARANTEE</p>
                    <p className="text-black">We return money within 7 days (T's and C's Apply)</p>
                </div>
            </div>
        </div>
    );
}

export default Prefooter;
