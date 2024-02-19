import React, { useState } from "react";
import { BASE_TEST } from "../../config";
import { Trash2 } from "lucide-react";
import { Plus, Minus } from "lucide-react";

const CartItem = ({ item, mail }) => {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleIncrease = async () => {
    const response = await fetch(`${BASE_TEST}/incQuantity/${item.id}/${mail}`);
    if (!response.ok) {
      console.log("Failed to increase quantity");
      return;
    }
    const resp2 = await response.json();
    if (resp2.status === 200) {
      setQuantity(prevQuantity => prevQuantity + 1);
      console.log("Quantity increased successfully");
    } else {
      console.log(resp2)
      console.log("Failed to increase quantity");
    }
  };

  const handleDecrease = async () => {
    if (quantity > 1) {
      const response = await fetch(`${BASE_TEST}/decQuantity/${item.id}/${mail}`);
      if (!response.ok) {
        console.log("Failed to decrease quantity");
        return;
      }
      const resp2 = await response.json();
      if (resp2.status === 200) {
        setQuantity(prevQuantity => prevQuantity - 1);
        console.log("Quantity decreased successfully");
      } else {
        console.log("Failed to decrease quantity");
        console.log(resp2)
      }
    }
  };

  const handleRemove = async () => {
    const response = await fetch(`${BASE_TEST}/deleteFromCart/${item.id}/${mail}`);
    if (!response.ok) {
      console.log("Failed to remove item from cart");
      return;
    }
    const resp2 = await response.json();
    if (resp2.status === 200) {
      console.log("Item removed from cart");
      // Handle UI update or other actions after removing item from cart
    } else {
      console.log("Failed to remove item from cart");
    }
  };

  return (
    <div className="border p-4 rounded-md w-50 mx-auto mb-8 relative" style={{ height: "300px" }}>
      <button
        onClick={handleRemove}
        className="absolute top-0 left-0 p-2 hover:bg-red-500 rounded-full text-white cursor-pointer"
      >
        <Trash2 color="black" size={25} />
      </button>
      <div className="flex flex-col items-center justify-center">
        <img
          src={`${BASE_TEST}/${item.img}`}
          alt={item.caption}
          className="w-[150px] h-auto mb-4 max-h-40"
        />
        <p className="text-gray-600 font-bold text-center">{item.caption}</p>
        <p className="text-gray-500">NGN {item.price.toFixed(2).toLocaleString()} x {quantity}</p>
        <div className="flex mt-2">
          <Minus
            color="black"
            size={24}
            onClick={handleDecrease}
            className="border border-gray-500 bg-gray-400 rounded-lg cursor-pointer hover:bg-gray-300"
          />
          <span className="pl-4 pr-4">{quantity}</span>
          <Plus
            color="black"
            size={24}
            onClick={handleIncrease}
            className="border border-gray-500 bg-gray-400 rounded-lg cursor-pointer hover:bg-gray-300"
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
