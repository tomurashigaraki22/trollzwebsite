import React from "react";
import { Copyright, SendHorizontal } from "lucide-react";
import { Instagram, Facebook } from "lucide-react";

const Footer = () => {
    return (
        <div className="bg-black px-[100px] mt-[100px]">
            <div className="flex flex-row items-start justify-between">
                <div className="flex flex-col items-start space-y-2 text-white pt-10">
                    <p className="text-xl">Trollz.</p>
                    <p>Subscribe</p>
                    <p>Get 10% off your first order</p>
                    <div className="flex flex-row items-center relative">
                        <input
                            type="email"
                            placeholder="Email..."
                            className="text-white bg-black border-2 border-white p-2 relative z-0"
                        />
                        <SendHorizontal
                            color="white"
                            className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer z-10 mr-2"
                        />
                    </div>
                </div>
                <div className="flex flex-col items-start space-y-2 text-white pt-10">
                    <p className="text-xl">Support</p>
                    <p>Online Ecommerce Store</p>
                    <p>trollz.mallstore@gmail.com</p>
                    <p>+234 807 127 3078</p>
                </div>
                <div className="flex flex-col items-start space-y-2 text-white pt-10">
                    <p className="text-xl">Account</p>
                    <p>My Account</p>
                    <p>Login/Register</p>
                    <p>Cart</p>
                    <p>Shop</p>
                </div>
                <div className="flex flex-col items-start space-y-2 text-white pt-10">
                    <p className="text-xl">Quick Link</p>
                    <p>Privacy Policy</p>
                    <p>Terms Of Service</p>
                    <p>FAQ</p>
                    <p>Contact</p>
                </div>
                <div className="flex flex-col items-start space-y-2 text-white pt-10">
                    <p className="text-xl">Download App</p>
                    <div className="flex flex-row items-start">
                        <Instagram color="white"/>
                        <Facebook color="white"/>
                    </div>
                </div>
            </div>
            <div className="flex flex-row items-center justify-center text-gray-600 pt-[50px] space-x-2 pb-10">
                <Copyright color="gray"/>
                <p>Trollz 2024. All Rights Reserved</p>
            </div>
        </div>
    );
}

export default Footer;
