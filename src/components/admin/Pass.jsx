import React, { useState } from "react";

const Pass = ({ setLogin }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [wrongeop, setWrongeop] = useState(false)
    const [blank, setBlank] = useState(false)

    const checkLogins = (e) => {
        e.preventDefault();
        if (email === '' || password === '') {
            setBlank(true)
            return
        } else if (email === 'trollz.mallstore@gmail.com' && password === 'Godwithus22') {
            localStorage.setItem('adminlogin', 'true')
            setLogin(true);
            setTimeout(() => {
                window.location.reload()
            }, 2000)
        } else {
            setWrongeop(true)
        }
    }

    return (
        <div>
            <div className="flex flex-col items-center mt-[180px]">
                <div className="flex items-center justify-center">
                    <header className="flex font-bold text-3xl pb-[60px]">Trollz Admin</header>
                </div>
                <div className="flex flex-col items-center pb-10">
                    {wrongeop && <p className="text-red-600 italic">Wrong Email or Password...</p>}
                    {blank && <p className="text-red-600 italic">Email or Password cannot be blank</p>}
                    <label className="text-xl pb-2">Email</label>
                    <input
                        placeholder="Input email address...."
                        color="black"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-[300px] h-[40px] bg-gray-200 rounded-md px-4 md:w-[600px] md:h-[50px] lg:w-[800px] lg:h-[55px] hover:bg-gray-300"
                    />
                </div>
                <div className="flex flex-col items-center pb-10">
                    <label className="text-xl pb-2">Password</label>
                    <input
                        type="password"
                        placeholder="Password"
                        color="black"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-[300px] h-[40px] bg-gray-200 rounded-md px-4 md:w-[600px] md:h-[50px] lg:w-[800px] lg:h-[55px] hover:bg-gray-300"
                    />
                </div>
                <div className="border-2 border-black bg-black w-[100px] flex items-center justify-center rounded-md hover:border-gray-900 hover:bg-gray-900 cursor-pointer">
                    <button className="font-bold text-white" onClick={checkLogins}>Log In</button>
                </div>
            </div>
        </div>
    );
}

export default Pass;
