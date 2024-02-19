import React from "react";
import { BaggageClaim, Headphones, ShieldCheck } from "lucide-react";

const Prefooter = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row lg:flex-row items-center justify-center space-y-10 md:space-x-10 lg:space-x-10 pt-10 md:pt-20 lg:pt-40 pb-10 md:pb-20 lg:pb-40">
                <div className="flex flex-col items-center lg:pt-11">
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
