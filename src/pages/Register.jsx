import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Imga from '../assets/loginimg.png'
import { useNavigate } from "react-router-dom";


const Register = () => {
    const navigate = useNavigate()
    return(
        <div>
            <Header/>
            <Navbar/>
            <div>
                <div>
                <div className="flex flex-row space-y-6 items-center pt-[50px] justify-center w-full space-x-10">
                    <img
                        src={Imga}
                        alt="Login Image"
                        className="w-[400px] h-[300px] rounded-md hidden sm:hidden md:hidden lg:block xl:block"
                    />
                    <div className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] xl:w-[700px]">
                        <div className="mb-4">
                            <p className="text-4xl font-bold">Create an account</p>
                            <p className="text-gray-600 pt-3 pb-4">Enter your details below</p>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <input
                                type="numeric"
                                placeholder="Phone Number"
                                className="border-b p-2 outline-none border-gray-500"
                            />
                            <input
                                type="text"
                                placeholder="Email"
                                className="border-b p-2 outline-none border-gray-500"
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                className="border-b p-2 outline-none border-gray-500"
                            />
                            <input
                                type="text"
                                placeholder="Address"
                                className="border-b p-2 outline-none border-gray-500"
                            />

                            <div className="flex flex-col sm:flex-row items-center justify-between">
                                <button
                                    className="bg-red-500 text-white p-3 rounded-sm hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-300"
                                >
                                    Sign Up
                                </button>
                                <div className="flex flex-row items-start space-x-2 mt-4 sm:mt-0">
                                    <p className="text-gray-600">Already Have An Account?</p>
                                    <p className="underline text-gray-400 text-bold cursor-pointer pb-1" onClick={() => {navigate('/')}}>Log In</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <Footer/>
            </div>
        </div>
    );
}

export default Register;
