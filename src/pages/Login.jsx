import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Imga from "../assets/loginimg.png";
import Footer from "../components/Footer";

const Login = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <div>
                <div className="flex flex-row items-center space-x-[100px] pt-[50px] justify-center w-full">
                    <img
                        src={Imga}
                        alt="Login Image"
                        className="w-[700px] h-[500px] rounded-md"
                    />
                    <div>
                        <div className="mb-4">
                            <p className="text-4xl font-bold">Log In To Trollz</p>
                            <p className="text-gray-600 pt-3 pb-4">Enter your details below</p>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <input
                                type="text"
                                placeholder="Email"
                                className="border-b p-2 outline-none border-gray-500 w-[300px]"
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                className="border-b p-2 outline-none border-gray-500 "
                            />

                            <div className="flex flex-row items-center justify-between">
                                <button
                                    className="bg-red-500 text-white p-3 rounded-sm hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-300 w-[80px]"
                                >
                                    Log In
                                </button>
                                <p className="text-red-600">Forget password?</p>
                            </div>

                        </div>
                    </div>
                    
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Login;
