import React, { useEffect, useState } from "react";
import { Dots } from "react-activity";
import 'react-activity/dist/library.css';
import { BASE_TEST } from "../../config";
import { Check, Heart } from "lucide-react";
import Related from "./Related";

const Pitem = ({ item, isload, mail }) => {
    const [posts, setposts] = useState([])
    const [added, setadded] = useState(false)
    const [erradd, seterradd] = useState(false)
    const [unknown, setunknown] = useState(false)
    const [adding, setadding] = useState(false)
    console.log('Item:', item)
    if (!item) {
        return <Dots color="red" size={20} />;
    }

    useEffect(() => {
        const getCate = async () => {
            const response = await fetch(`${BASE_TEST}/getItemses/${item.category}`)
            if (!response.ok){
                return
            }
            const resp2 = await response.json()
            if (resp2.status === 200){
                console.log('It worked')
                setposts(resp2.posts)
            }
            else{
                console.log('Unwanted error occured')
            }
        }
        getCate()
    }, [item])

    const addtocart = async () => {
        setadding(true)
        const response = await fetch(`${BASE_TEST}/addToCart/${item.id}/${mail}`)
        if (!response.ok){
            setadding(false)
            return
        }
        const resp2 = await response.json()
        if (resp2.status === 200){
            console.log('Hehehe')
            setadding(false)
            setadded(true)
        }
        else if (resp2.status === 404){
            console.log('Whyyy')
            setadding(false)
            seterradd(true)
        }
        else{
            console.log('Not my fault')
            setadding(false)
            setunknown(true)
        }
    }

    return (
        <div>
            <div>
                <div className="flex flex-row items-center justify-center pt-10 pb-20 w-full">
                    <img 
                        src={`${BASE_TEST}/${item.img}`}
                        alt="Product Item"
                        className="w-auto h-[200px] lg:w-auto lg:h-auto md:w-[300px] md:h-[300px] pl-5"
                    />
                    <div className="flex flex-col items-start space-y-2 pl-7">
                        <p className="text-[15px] font-bold text-black lg:text-2xl md:text-xl whitespace-normal max-w-[200px]">{item.caption}</p>
                        <div className="flex items-center mb-2 text-xl">
                            <span className="text-yellow-500">★</span>
                            <span className="text-yellow-500">★</span>
                            <span className="text-yellow-500">★</span>
                            <span className="text-gray-400">☆</span>
                            <span className="text-gray-400">☆</span>
                        </div>
                        <div className="flex flex-row items-start pt-2">
                            <p className="text-green-600 font-bold text-sm lg:text-base">In Stock</p>
                            <Check color="green" size={20} className="pl-2 font-bold"/>
                        </div>
                        <p className="text-base lg:text-xl">Colours: {item.colors}</p>
                        <p className="font-bold text-[16px] lg:text-[20px]">Price: NGN {item.price.toLocaleString()}</p>
                        <div className="flex flex-row items-start space-x-6 justify-center lg:justify-start pt-5">
                            {adding ? (
                                <Dots color="red" size={30} />
                            ) : (
                                added ? (
                                    <p className="border border-white bg-green-500 hover:bg-green-700 rounded-md p-2 text-white cursor-pointer text-base lg:text-xl" onClick={addtocart}>Item Added</p>
    
                                ) : (
                                    <p className="border border-white bg-red-500 hover:bg-red-700 rounded-md p-2 text-white cursor-pointer text-base lg:text-xl" onClick={addtocart}>Add To Cart</p>
                                )
                            )}
                            
                            {/* Added border and padding to the heart icon */}
                            <Heart color="gray" size={34} className="mt-1 border border-gray-500 p-1 rounded-full cursor-pointer hover:bg-gray-300"/>
                        </div>
                    </div>
                </div>
                <Related item={posts}/>
            </div>
        </div>
    );
}

export default Pitem;
