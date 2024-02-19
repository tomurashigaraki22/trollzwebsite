import React, { useState } from 'react';
import { Search, Heart, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { BASE_TEST } from '../../config';

const NavHome = () => {
    const navigate = useNavigate();
    const [value, setvalue] = useState('');
    const [err, seterr] = useState(false);

    const search = async () => {
        const response = await fetch(`${BASE_TEST}/search/${value}`);
        if (!response.ok) {
            return;
        }
        const resp2 = await response.json();
        if (resp2.status === 200) {
            console.log('yay');
            console.log(resp2.feedback);
            navigate(`/search/${value}`, { state: { items: resp2.feedback } });
        } else {
            console.log('No');
            console.log('Why: ', resp2);
            seterr(true);
        }
    };

    return (
        <div className="bg-white p-4 flex justify-between items-center pt-[30px]">
            <div className="text-2xl text-black font-bold hidden sm:block">Trollz</div>
            <div className="flex items-center space-x-3"> {/* Show on all screens */}
                <div className="flex items-center space-x-3"> {/* Show on small screens */}
                    <input 
                        type="text" 
                        placeholder="What are you looking for" 
                        className="border p-2 rounded-full focus:outline-none focus:ring focus:border-gray-300 w-[200px] md:w-[300px] lg:w-[450px]"
                        value={value}
                        onChange={(e) => setvalue(e.target.value)}
                    />
                    <button className="bg-white-500 p-2 rounded-full" onClick={search}>
                        <Search color='black' />
                    </button>
                </div>
                <ShoppingCart color='black' onClick={() => {navigate('/cart')}} className='cursor-pointer'/>
            </div>
            <div className="hidden md:flex space-x-4 overflow-hidden"> {/* Hide on small screens */}
                <p className="hover:text-red-300 hover:underline font-bold text-red-600 cursor-pointer" onClick={() => {navigate('/')}}>Home</p>
                <p className="hover:text-red-300 hover:underline font-bold text-red-600 cursor-pointer">Contact</p>
                <p className="hover:text-red-300 hover:underline font-bold text-red-600 cursor-pointer">About</p>
                <p className="hover:text-red-300 hover:underline font-bold text-red-600 cursor-pointer" onClick={() => {navigate('/signup')}}>Signup</p>
            </div>
        </div>
    );
}

export default NavHome;
