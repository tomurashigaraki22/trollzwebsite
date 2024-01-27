import React from "react";
import per from '../assets/per.png'
import ps5 from '../assets/ps5.png'
import peak from '../assets/peakpx.png'
import sp from '../assets/sp.png'

const Featured = () => {
    return(
        <div>
            <div>
                <div className="flex flex-row items-center space-x-2 pb-5">
                    <p className="border-2 bg-red-600 border-red-600 w-[20px] rounded-md">.</p>
                    <p className="text-red-600 font-bold">Featured</p>
                </div>
                <div>
                    <p className="text-red-600 text-4xl font-bold">New Arrival</p>
                    <div className="pt-10 relative flex flex-row items-start space-x-10">
                        <div className="relative hover:cursor-pointer">
                            <img
                            src={ps5}
                            alt="PS5"
                            className="w-[600px] h-[600px] rounded-md"
                            />

                        </div>
                        <div>
                            <div className=" hover:cursor-pointer">
                                <img
                                src={peak}
                                alt="Women"
                                className="w-[600px] rounded-md"
                                />
                            </div>
                            <div className="flex flex-row items-start justify-between pt-5">
                                <div>
                                    <img
                                    src={sp}
                                    alt="Speaker"
                                    className="w-[280px] h-[285px] rounded-md hover:cursor-pointer"
                                    />
                                </div>
                                <div>
                                    <img
                                    src={per}
                                    alt="Perfume"
                                    className="w-[280px] h-[285px] rounded-md hover:cursor-pointer"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Featured;
