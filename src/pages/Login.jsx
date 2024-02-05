import React, { useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Imga from "../assets/loginimg.png";
import Footer from "../components/Footer";
import { Dots } from "react-activity";
import { BASE_TEST } from "../../config";
import 'react-activity/dist/library.css';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [token, settoken] = useState(null)
    const [wrongeop, setwrongeop] = useState(false)
    const [unknown, setunknown] = useState(false)
    const [loggingin, setloggingin] = useState(false)
    const navigate = useNavigate()

    const onlogin = async () => {
        setloggingin(true)
        const formdata = new FormData()
        formdata.append('email', email)
        formdata.append('password', password)
        const response = await fetch(`${BASE_TEST}/login`, {
            method: 'POST',
            body: formdata
        })
        if (!response.ok){
            return
        }
        const resp2 = await response.json()
        console.log(resp2)
        if (resp2.status === 200){
            settoken(resp2.token)
            console.log('Success')
            console.log('LOGIN TOKEN: ', resp2.token)
            localStorage.setItem('token', resp2.token)
            setloggingin(false)
            navigate('/home')
        }
        else if (resp2.status === 404){
            setwrongeop(true)
            setloggingin(false)
        }
        else{
            setunknown(true)
            setloggingin(false)
        }
    }



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
                            {wrongeop && <p className="text-red-600 italic pb-2">Invalid email or password</p>}
                            {unknown && <p className="text-red-600 italic pb-2">Unknown error occurred</p>}
                            <input
                                type="text"
                                placeholder="Email"
                                className="border-b p-2 outline-none border-gray-500 w-[300px]"
                                value={email}
                                onChange={(e) => setemail(e.target.value)}
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                className="border-b p-2 outline-none border-gray-500 "
                                value={password}
                                onChange={(e) => setpassword(e.target.value)}
                            />

                            <div className="flex flex-row items-center justify-between">
                                    <button
                                    onClick={() => {onlogin()}}
                                        className="bg-red-500 text-white p-3 rounded-sm hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-300 w-[80px]"
                                    >
                                    {loggingin ? <Dots color="#fff" /> : 'Log In'}
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
