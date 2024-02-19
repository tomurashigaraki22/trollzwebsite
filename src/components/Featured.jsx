import React from "react";
import per from '../assets/per.png'
import ps5 from '../assets/ps5.png'
import peak from '../assets/peakpx.png'
import sp from '../assets/sp.png'

const Featured = () => {
    const search = async (value) => {
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
    
    const handleItemClick = (value) => {
    search(value);
    };

    return(
        <div>
            <div>
                <div className="flex flex-row items-center space-x-2 pb-5">
                    <p className="border-2 bg-red-600 border-red-600 w-[20px] rounded-md">.</p>
                    <p className="text-red-600 font-bold">Featured</p>
                </div>
                <div>
                    <p className="text-red-600 text-4xl font-bold">New Arrival</p>
                    <div className="pt-10 relative flex flex-col items-start lg:space-x-10 md:space-x-7 md:flex-row lg:flex-row">
                        <div className="relative hover:cursor-pointer" onClick={() => handleItemClick('ps5')}>
                            <img
                            src={ps5}
                            alt="PS5"
                            className="w-[900px] h-[300px] rounded-md lg:h-[600px] lg:w-[600px] md:h-[500px] md:w-[500px]"
                            />

                        </div>
                        <div className="pt-4 md:pt-0 lg:pt-0">
                            <div className=" hover:cursor-pointer" onClick={() => handleItemClick('women')}>
                                <img
                                src={peak}
                                alt="Women"
                                className="w-[400px] rounded-md h-[200px] lg:h-[285px] md:w-[500px] md:h-[250px]"
                                />
                            </div>
                            <div className="flex flex-row items-start justify-between pt-5">
                                <div onClick={() => handleItemClick('speaker')}>
                                    <img
                                    src={sp}
                                    alt="Speaker"
                                    className="w-[280px] h-[220px] rounded-md hover:cursor-pointer lg:h-[295px] md:w-[240px] md:h-[230px]"
                                    />
                                </div>
                                <div onClick={() => handleItemClick(perfume)}>
                                    <img
                                    src={per}
                                    alt="Perfume"
                                    className="w-[280px] h-[220px] rounded-md hover:cursor-pointer lg:h-[295px] md:w-[240px] md:h-[230px]"
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
