import React from "react";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { addToCart } from "../../Slice/CartSlice";

const MenuCard = ({
  name,
  imageUrl,
  description,
  isAvailable,
  price,
  categoryName,
  _id
}) => {
  const dispatch = useDispatch();

  // Function to add the item to the cart
  const handleAddToCart = () => {
    if (isAvailable) {
      const item = {
        _id,
        name,
        price,
        imageUrl,
        categoryName,
        quantity: 1
      };
      dispatch(addToCart(item));  // Dispatch addToCart action
      toast.success("Item added to cart");
    } else {
      toast.error("Item not available");
    }
  };

  return (
    <div className="bg-gradient-to-br from-yellow-50 to-pink-100 rounded-2xl shadow-lg overflow-hidden w-full max-w-sm transform transition duration-300 hover:scale-105 hover:shadow-2xl flex flex-col cursor-pointer">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-48 object-cover"
      />

      <div className="p-4 flex flex-col flex-grow">
        <span className="inline-block mb-2 px-3 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-800">
          {categoryName || "Uncategorized"}
        </span>

        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-bold text-gray-800">{name}</h2>
          <span className="text-lg font-bold text-green-700">₹{price}</span>
        </div>

        <p className="text-gray-700 text-sm mb-3 line-clamp-2">
          {description}
        </p>

        <span
          className={`inline-block mb-4 px-3 py-1 text-xs font-medium rounded-full ${isAvailable
            ? "bg-green-200 text-green-700"
            : "bg-red-100 text-red-700"}`}
        >
          {isAvailable ? "Available" : "Not Available"}
        </span>

        <button
          onClick={handleAddToCart}
          disabled={!isAvailable}
          className={`mt-auto w-full py-2 px-4 rounded-lg font-semibold text-white transition-all duration-300 ${
            isAvailable
              ? "bg-[#CF0F47] hover:bg-[#FF0B55] cursor-pointer"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default MenuCard;
