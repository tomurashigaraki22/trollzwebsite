import React, { useEffect, useState } from "react";
import { BASE_TEST } from '../../config';
import { useNavigate } from "react-router-dom";

const FlashSales = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function getItems() {
      try {
        const response = await fetch(`${BASE_TEST}/getItems4`);
        if (!response.ok) {
          return;
        }
        const resp2 = await response.json();
        console.log(resp2);
        console.log('Status: ', resp2.status);
        if (resp2.status === 200) {
          setItems(resp2.posts);
        } else if (resp2.status === 404) {
          console.log('No image found');
        } else {
          console.log('Blaj');
        }
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    }
    getItems();
  }, []);

  const navigate = useNavigate()

  return (
    <div>
      <div>
        <div className="flex flex-row items-center space-x-2 pb-5">
          <p className="border-2 bg-red-600 border-red-600 w-[20px] rounded-md">.</p>
          <p className="text-red-600 font-bold">Sales</p>
        </div>
        <div className="flex flex-col items-start space-x-10">
          <p className="text-red-600 text-4xl font-bold">Flash Sales</p>
          <div className="flex flex-row items-start space-x-7 pt-4">
            <div>
              <p className="text-2xl font-bold">Weeks</p>
              <p className="text-3xl font-bold">02</p>
            </div>
            <div>
              <p className="text-red-600 text-3xl">:</p>
            </div>
            <div>
              <p className="text-2xl font-bold">Days</p>
              <p className="text-3xl font-bold">06</p>
            </div>
            <div>
              <p className="text-red-600 text-3xl">:</p>
            </div>
            <div>
              <p className="text-2xl font-bold">Hours</p>
              <p className="text-3xl font-bold">12</p>
            </div>
          </div>
        </div>
        <div className="flex space-x-4 pt-10 overflow-x-auto">
          {items.map((item, index) => (
            <div key={index} className="border-4 p-4 w-[200px] hover:border-red-600 ml-[100px]" onClick={() => navigate(`/product/${item.id}`)}>
              <div className="flex flex-col items-center justify-center">
                {/* Display your item content here */}
                <div className="flex flex-col items-start cursor-pointer">
                  <img
                    src={`${BASE_TEST}/${item.img}`}
                    alt="Image"
                    className="w-full mb-2"
                  />
                  <p className="text-black font-bold mb-2">{item.caption}</p>
                  <p className="text-red-600 font-bold">{item.currency} {item.price.toLocaleString()}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center pt-7">
            <p className="inline-block text-white border-2 border-red-600 bg-red-600 p-3 ">View All Products</p>
        </div>
      </div>
    </div>
  );
};

export default FlashSales;
