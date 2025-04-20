import React from "react";
import { useDispatch } from "react-redux";
import { MdDelete } from "react-icons/md";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../../Slice/CartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(removeFromCart(item._id));
  };

  const handleIncreaseQuantity = () => {
    dispatch(increaseQuantity(item._id));  
  };

  const handleDecreaseQuantity = () => {
    dispatch(decreaseQuantity(item._id)); 
  };

  return (
    <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md mb-4">
      <div className="flex items-center">
        <img
          src={item.imageUrl}
          alt={item.name}
          className="w-24 h-24 object-cover rounded-md mr-4"
        />
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
          <p className="text-sm text-gray-600">{item.description}</p>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="flex items-center mb-2">
          <button
            onClick={handleDecreaseQuantity}
            className="px-2 py-1 bg-gray-200 rounded-full text-lg"
          >
            -
          </button>
          <span className="mx-2 text-lg font-semibold">{item.quantity}</span>
          <button
            onClick={handleIncreaseQuantity}
            className="px-2 py-1 bg-gray-200 rounded-full text-lg"
          >
            +
          </button>
        </div>
        <p className="text-lg font-semibold text-green-700">
          ₹{(item.price * item.quantity).toFixed(2)} 
        </p>
      </div>

      <div className="flex flex-col items-center">
        <button
          onClick={handleRemoveItem}
          className="text-red-500 hover:text-red-700"
        >
          <MdDelete size={24} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
