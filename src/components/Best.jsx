import React, { useEffect, useState } from "react";
import { BASE_TEST } from "../../config";

const Best = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function getItems() {
      try {
        const formdata = new FormData();
        formdata.append('email', 'hiir443@gmail.com');
        const response = await fetch(`${BASE_TEST}/getItems`, {
          method: 'POST',
          body: formdata
        });

        if (!response.ok) {
          return;
        }

        const resp2 = await response.json();

        if (resp2.status === 200) {
          setItems(resp2.posts);
        } else if (resp2.status === 404) {
          console.log('Error 404');
        } else {
          console.log('Unknown error');
        }
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    }

    getItems();
  }, []);

  return (
    <div>
      <div>
        <div>
          <div className="flex flex-row items-center space-x-2">
            <p className="border-2 bg-red-600 border-red-600 hover:border-red-600 w-[20px] rounded-md">.</p>
            <p className="text-red-600 font-bold">This month</p>
          </div>
          <div>
            <p className="text-red-600 font-bold text-4xl pt-5">Best Selling Products</p>
          </div>
          <div className="flex space-x-4 pt-10 overflow-x-auto">
            {items.map((item, index) => (
              <div key={index} className="border-4 p-4 w-[300px] hover:border-red-600 ml-[20px]">
                <div className="flex flex-col items-center justify-center">
                  {/* Display your item content here */}
                  <div className="flex flex-col items-start cursor-pointer">
                    <img
                      src={`http://192.168.1.188:5442/${item.img}`}
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
        </div>
      </div>
    </div>
  );
}

export default Best;
