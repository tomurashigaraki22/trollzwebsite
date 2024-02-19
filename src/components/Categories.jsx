import { Camera, Headphones, Monitor, Phone, Watch, Gamepad, Smartphone } from "lucide-react";
import React from "react";
import { BASE_TEST } from "../../config";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const navigate = useNavigate();

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
                { icon: <Smartphone color="black" size={30} />, name: 'Smartphone', value: 'Phone' },
                { icon: <Monitor color="black" size={30} />, name: 'Monitor', value: 'monitor' },
                { icon: <Watch color="black" size={30} />, name: 'Watch', value: 'watch' },
                { icon: <Camera color="black" size={30} />, name: 'Camera', value: 'camera' },
                { icon: <Headphones color="black" size={30} />, name: 'Headphones', value: 'speaker' },
                { icon: <Gamepad color="black" size={30} />, name: 'Gamepad', value: 'gamepad' },
                
                // Repeat items as needed
              ].map((item, index) => (
                <div key={index} className="text-center pt-10 pl-7" onClick={() => handleItemClick(item.value)}>
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
