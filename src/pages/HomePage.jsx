import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import NavHome from "../components/NavHome";
import Footer from "../components/Footer";
import { ChevronRight } from "lucide-react";
import Slideshow from "../components/HeroSvg";
import FlashSales from "../components/FlashSales";
import Categories from "../components/Categories";
import Best from "../components/Best";
import Asset from "../components/asset";
import Featured from "../components/Featured";
import Prefooter from "../components/Prefooter";
import jwt_decode from 'jwt-decode'
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const [email, setemail] = useState('');
    const navigate = useNavigate()

    useEffect(() => {
        async function getDeets(){
            const token = localStorage.getItem('token')
            console.log('Token: ', token)
            const decodedtoken = jwt_decode(token)
            console.log(decodedtoken)
            const email = decodedtoken.email
        }
        getDeets()
    }, []);

    return (
        <div>
            <Header />
            <NavHome />
            <div>
                <div>
                    <div className="flex flex-row items-center justify-between  space-x-4 pt-[50px] border-r border-gray">
                        <div className="hidden sm:block flex flex-col items-start justify-center space-y-3 pl-[150px]">
                            <div className="flex flex-row items-center justify-between space-x-1 w-[200px] hover:w-[250px] transition hover:text-red-600 cursor-pointer"> {/* Hide on small screens */}
                                <p className="text-xl flex items-center">Women Fashion</p>
                                <ChevronRight color="black" className="mt-1 hover:text-red-600"/>
                            </div>
                            <div className="flex flex-row items-center justify-between space-x-1 w-[200px] hover:w-[250px] transition hover:text-red-600 cursor-pointer"> {/* Hide on small screens */}
                                <p className="text-xl flex items-center">Men Fashion</p>
                                <ChevronRight color="black" className="mt-1"/>
                            </div>
                            <div className="flex flex-row items-center justify-between space-x-1 w-[200px] hover:w-[250px] transition hover:text-red-600 cursor-pointer"onClick={() => navigate('/category/Medicine', {state: {cate: 'PhonesAndAccessories'}})}> {/* Hide on small screens */}
                                <p className="text-xl flex items-center">Gadgets</p>
                                <ChevronRight color="black" className="mt-1"/>
                            </div>
                            <div className="flex flex-row items-center justify-between space-x-1 w-[200px] hover:w-[250px] transition hover:text-red-600 cursor-pointer" onClick={() => navigate('/category/Medicine', {state: {cate: 'Medicine'}})}> {/* Hide on small screens */}
                                <p className="text-xl flex items-center">Medicine</p>
                                <ChevronRight color="black" className="mt-1"/>
                            </div>
                            <div className="flex flex-row items-center justify-between space-x-1 w-[200px] hover:w-[250px] transition hover:text-red-600 cursor-pointer"> {/* Hide on small screens */}
                                <p className="text-xl flex items-center">Home & Lifestyle</p>
                                <ChevronRight color="black" className="mt-1"/>
                            </div>
                            <div className="flex flex-row items-center justify-between space-x-1 w-[200px] hover:w-[250px] transition hover:text-red-600 cursor-pointer"> {/* Hide on small screens */}
                                <p className="text-xl flex items-center">Sports & Outdoor</p>
                                <ChevronRight color="black" className="mt-1"/>
                            </div>
                            <div className="flex flex-row items-center justify-between space-x-1 w-[200px] hover:w-[250px] transition hover:text-red-600 cursor-pointer"> {/* Hide on small screens */}
                                <p className="text-xl flex items-center">Baby's & Toys</p>
                                <ChevronRight color="black" className="mt-1"/>
                            </div>
                            <div className="flex flex-row items-center justify-between space-x-1 w-[200px] hover:w-[250px] transition hover:text-red-600 cursor-pointer"> {/* Hide on small screens */}
                                <p className="text-xl flex items-center">Groceries & Pets</p>
                                <ChevronRight color="black" className="mt-1"/>
                            </div>
                            <div className="flex flex-row items-center justify-between space-x-1 w-[200px] hover:w-[250px] transition hover:text-red-600 cursor-pointer"> {/* Hide on small screens */}
                                <p className="text-xl flex items-center">Health & Beauty</p>
                                <ChevronRight color="black" className="mt-1"/>
                            </div>
                        </div>
                        <div className="pr-[180px] hidden md:block lg:block xl:block"> {/* Show only on lg screens */}
                            <Slideshow/>
                        </div>
                    </div>
                    <div className="pl-[10px] pt-10 lg:pl-[150px] md:[100px]">
                        <FlashSales/>
                    </div>
                    <div className="pl-[10px] pt-20 lg:pl-[150px] md:[100px]">
                        <div className="overflow-x-auto"> {/* Enable horizontal scrolling on small screens */}
                            <Categories/>
                        </div>
                    </div>
                    <div className="pl-[10px] pt-20 lg:pl-[150px] md:[100px]">
                        <Best/>
                    </div>
                    <div className="flex items-center justify-center pt-10">
                        <Asset/>
                    </div>
                    <div className="pl-[10px] pt-20 lg:pl-[150px] md:pl:[20px]">
                        <Featured/>
                    </div>
                    <div className="pl-[10px] pt-20 lg:pl-[150px] md:[100px]">
                        <Prefooter/>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default HomePage;
