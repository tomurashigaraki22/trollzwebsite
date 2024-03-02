import React, {useEffect, useState} from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Imga from '../assets/loginimg.png'
import { useNavigate } from "react-router-dom";
import { BASE_TEST } from "../../config";


const Register = () => {
    const [email, setemail] = useState('');
    const [address, setAddress] = useState('');
    const [password, setpassword] = useState('');
    const [wrongEmailType, setwrongEmailtype] = useState(false);
    const [whiteEmailOrPass, setwhiteEmailOrPass] = useState(false);
    const [unknownError, setUnknownErr] = useState(false);
    const [Incorrectpass, setincorrectpass] = useState(false);
    const navigate = useNavigate();
    const [loggingin, setloggingin] = useState(false);

  const signup = async () => {
    try {
      setwrongEmailtype(false);
      setwhiteEmailOrPass(false);
      setUnknownErr(false);
      setloggingin(true); // Set loading state

      // Validate email and password
      if (!email.endsWith('@gmail.com')) {
        setwrongEmailtype(true);
        console.log(email)
        setloggingin(false); // Reset loading state
        return;
      }

      if (email === '' || password === '' || address === '') {
        setwhiteEmailOrPass(true);
        setloggingin(false); // Reset loading state
        return;
      }

      const formdata = new FormData();
      formdata.append('email', email);
      formdata.append('password', password);
      formdata.append('address', address); // Add this line
      const response = await fetch(`${BASE_TEST}/signup`, {
        method: 'POST',
        body: formdata,
      });
      console.log('Woww')

      const resp2 = await response.json();
      console.log('Resp2: ', resp2)
      if (resp2.status === 200) {
        console.log('Success');
        setloggingin(false); // Reset loading state
        localStorage.setItem('token', resp2.token);
        navigate('/home');
      } else if (resp2.status === 404) {
        console.log('Incorrect Password');
        setincorrectpass(true);
      } else if (resp2.status === 509) {
        console.log('Error somewhere');
        setUnknownErr(true);
      }

      setloggingin(false); // Reset loading state
    } catch (error) {
      console.error(error);
    }
  };

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
                            {whiteEmailOrPass && <p className='text-red-500'>All Fields are required</p>}
                            {unknownError && <p className='text-red-500'>An unknown error Occurred... Try again</p>}
                            {wrongEmailType && <p className='text-red-500'>Email must end in @gmail.com</p>}
                        </div>
                        <div className="flex flex-col space-y-6">
                            <input
                                type="numeric"
                                placeholder="Phone Number"
                                className="border-b p-2 outline-none border-gray-500"
                                onChange={(e) => localStorage.setItem('phone', e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Email"
                                className="border-b p-2 outline-none border-gray-500"
                                value={email}
                                onChange={(e) => setemail(e.target.value)}
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                className="border-b p-2 outline-none border-gray-500"
                                value={password}
                                onChange={(e) => setpassword(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Address"
                                className="border-b p-2 outline-none border-gray-500"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />

                            <div className="flex flex-col sm:flex-row items-center justify-between">
                            <button
                                className="bg-red-500 text-white p-3 rounded-sm hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-300"
                                disabled={loggingin}
                                onClick={signup}
                            >
                                {loggingin ? 'Signing Up...' : 'Sign Up'}
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
