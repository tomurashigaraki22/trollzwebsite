import React from 'react';
import { Search, Heart, ShoppingCart } from 'lucide-react'; // Replace with the actual Lucide icon import
import { useNavigate } from 'react-router-dom';

const NavHome = () => {
    const navigate = useNavigate();
    return (
        <div className="bg-white p-4 flex justify-between items-center pt-[30px]">
            <div className="text-2xl text-black font-bold">Trollz</div>
            <div className="flex space-x-4">
                <p className="hover:text-red-300 hover:underline font-bold text-red-600 cursor-pointer" onClick={() => {navigate('/')}}>Home</p>
                <p className="hover:text-red-300 hover:underline font-bold text-red-600 cursor-pointer">Contact</p>
                <p className="hover:text-red-300 hover:underline font-bold text-red-600 cursor-pointer">About</p>
                <p className="hover:text-red-300 hover:underline font-bold text-red-600 cursor-pointer" onClick={() => {navigate('/signup')}}>Signup</p>
            </div>
            <div className="flex items-center">
                <input 
                    type="text" 
                    placeholder="What are you looking for" 
                    className="border p-2 rounded-full focus:outline-none focus:ring focus:border-gray-300 w-[250px]"
                />
                <div className='flex flex-row items-center space-x-3'>
                    <button className="bg-white-500 p-2 rounded-full">
                        <Search color='black'/>
                    </button>
                    <Heart color='black'/>
                    <ShoppingCart color='black'/>
                </div>

            </div>
        </div>
    );
}

export default NavHome;
