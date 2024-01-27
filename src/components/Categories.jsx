import { Camera, Headphones, Monitor, Phone, Watch, Gamepad, Smartphone } from "lucide-react";
import React from "react";

const Categories = () => {
  return (
    <div>
      <div>
        <div className="flex flex-col items-start">
            <div className="flex flex-row items-center space-x-2">
                <p className="border-2 bg-red-600 border-red-600 w-[20px] rounded-md">.</p>
                <p className="text-red-600 font-bold">Categories</p>
            </div>
          <p className="text-red-600 font-bold text-4xl pt-5">Browse By Category</p>
          <div className="flex flex-row items-start space-x-10 overflow-x-auto pl-[72px]">
            <div className="min-w-screen flex">
              {[
                { icon: <Smartphone color="black" size={30} />, name: 'Smartphone' },
                { icon: <Monitor color="black" size={30} />, name: 'Monitor' },
                { icon: <Watch color="black" size={30} />, name: 'Watch' },
                { icon: <Camera color="black" size={30} />, name: 'Camera' },
                { icon: <Headphones color="black" size={30} />, name: 'Headphones' },
                { icon: <Gamepad color="black" size={30} />, name: 'Gamepad' },
                
                // Repeat items as needed
              ].map((item, index) => (
                <div key={index} className="text-center pt-10 pl-7 overflow-x-auto">
                  <div className="border-2 p-8 mb-2 flex flex-col items-center space-y-3 hover:border-red-600 cursor-pointer">
                    {item.icon}
                    <p className="text-xl text-black">{item.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
