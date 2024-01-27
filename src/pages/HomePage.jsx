import React from "react";
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

const HomePage = () => {
    return (
        <div>
            <Header />
            <NavHome />
            <div>
                <div>
                    <div className="flex flex-row items-center justify-between  space-x-4 pt-[50px] border-r border-gray">
                        <div className="flex flex-col items-start justify-center space-y-3 pl-[150px]">
                            <div className="flex flex-row items-center justify-between space-x-1 w-[200px] hover:w-[250px] transition hover:text-red-600 cursor-pointer">
                                <p className="text-xl flex items-center">Women Fashion</p>
                                <ChevronRight color="black" className="mt-1 hover:text-red-600"/>
                            </div>
                            <div className="flex flex-row items-center justify-between space-x-1 w-[200px] hover:w-[250px] transition hover:text-red-600 cursor-pointer">
                                <p className="text-xl flex items-center">Men Fashion</p>
                                <ChevronRight color="black" className="mt-1"/>
                            </div>
                            <div className="flex flex-row items-center justify-between space-x-1 w-[200px] hover:w-[250px] transition hover:text-red-600 cursor-pointer">
                                <p className="text-xl flex items-center">Gadgets</p>
                                <ChevronRight color="black" className="mt-1"/>
                            </div>
                            <div className="flex flex-row items-center justify-between space-x-1 w-[200px] hover:w-[250px] transition hover:text-red-600 cursor-pointer">
                                <p className="text-xl flex items-center">Medicine</p>
                                <ChevronRight color="black" className="mt-1"/>
                            </div>
                            <div className="flex flex-row items-center justify-between space-x-1 w-[200px] hover:w-[250px] transition hover:text-red-600 cursor-pointer">
                                <p className="text-xl flex items-center">Home & Lifestyle</p>
                                <ChevronRight color="black" className="mt-1"/>
                            </div>
                            <div className="flex flex-row items-center justify-between space-x-1 w-[200px] hover:w-[250px] transition hover:text-red-600 cursor-pointer">
                                <p className="text-xl flex items-center">Sports & Outdoor</p>
                                <ChevronRight color="black" className="mt-1"/>
                            </div>
                            <div className="flex flex-row items-center justify-between space-x-1 w-[200px] hover:w-[250px] transition hover:text-red-600 cursor-pointer">
                                <p className="text-xl flex items-center">Baby's & Toys</p>
                                <ChevronRight color="black" className="mt-1"/>
                            </div>
                            <div className="flex flex-row items-center justify-between space-x-1 w-[200px] hover:w-[250px] transition hover:text-red-600 cursor-pointer">
                                <p className="text-xl flex items-center">Groceries & Pets</p>
                                <ChevronRight color="black" className="mt-1"/>
                            </div>
                            <div className="flex flex-row items-center justify-between space-x-1 w-[200px] hover:w-[250px] transition hover:text-red-600 cursor-pointer">
                                <p className="text-xl flex items-center">Health & Beauty</p>
                                <ChevronRight color="black" className="mt-1"/>
                            </div>
                        </div>
                        <div className="pr-[180px]">
                            <Slideshow/>
                        </div>
                    </div>
                    <div className="pl-[150px] pt-20">
                    <FlashSales/>
                    </div>
                    <div className="pl-[150px] pt-20">
                        <Categories/>
                    </div>
                    <div className="pl-[150px] pt-20">
                        <Best/>
                    </div>
                    <div className="flex items-center justify-center pt-10">
                        <Asset/>
                    </div>
                    <div className="pl-[150px] pt-20">
                        <Featured/>
                    </div>
                    <div className="pl-[150px] pt-20">
                        <Prefooter/>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default HomePage;
