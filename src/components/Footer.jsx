import React from "react";
import { Copyright, SendHorizontal } from "lucide-react";
import { Instagram, Facebook } from "lucide-react";

const Footer = () => {
    return (
        <div className="bg-black px-4 md:px-8 lg:px-12 xl:px-16 py-8 md:py-12 lg:py-16 xl:py-20 mt-20">
            <div className="flex flex-col md:flex-row items-start justify-between space-y-6 md:space-y-0 md:space-x-6 lg:space-x-8">
                <div className="flex flex-col items-start space-y-4 md:w-1/4 lg:w-1/5 text-white">
                    <p className="text-xl">Trollz.</p>
                    <p>Subscribe</p>
                    <p>Get 10% off your first order</p>
                    <div className="flex items-center relative">
                        <input
                            type="email"
                            placeholder="Email..."
                            className="text-white bg-black border-2 border-white p-2 relative z-10"
                        />
                        <SendHorizontal
                            color="white"
                            className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer z-10 mr-2"
                        />
                    </div>
                </div>
                <div className="hidden sm:flex flex-col items-start space-y-4 md:w-1/4 lg:w-1/5 text-white">
                    <p className="text-xl">Support</p>
                    <p>Online Ecommerce Store</p>
                    <p>trollz.mallstore@gmail.com</p>
                    <p>+234 807 127 3078</p>
                </div>
                <div className="hidden sm:flex flex-col items-start space-y-4 md:w-1/4 lg:w-1/5 text-white">
                    <p className="text-xl">Account</p>
                    <p>My Account</p>
                    <p>Login/Register</p>
                    <p>Cart</p>
                    <p>Shop</p>
                </div>
                <div className="hidden sm:flex flex-col items-start space-y-4 md:w-1/4 lg:w-1/5 text-white">
                    <p className="text-xl">Quick Link</p>
                    <p>Privacy Policy</p>
                    <p>Terms Of Service</p>
                    <p>FAQ</p>
                    <p>Contact</p>
                </div>
                <div className="flex flex-col items-start space-y-4 md:w-1/4 lg:w-1/5 text-white">
                    <p className="text-xl">Download App</p>
                    <div className="flex items-start">
                        <Instagram color="white"/>
                        <Facebook color="white" className="ml-2"/>
                    </div>
                </div>
            </div>
            <div className="flex flex-row items-center justify-center text-gray-600 pt-6 md:pt-8 xl:pt-10 space-x-2 pb-4 md:pb-6 xl:pb-8">
                <Copyright color="gray"/>
                <p>Trollz 2024. All Rights Reserved</p>
            </div>
        </div>
    );
}

export default Footer;
