import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CartItem from "./CartItem";
import OrderPlacementForm from "./OrderPlacementForm";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
 
  const [totalAmount, setTotalAmount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const total = cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
    setTotalAmount(total);
  }, [cart]);

  const handleCheckout = () => {
   
    navigate("/cart/checkout");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-pink-100 p-6">
      {cart.length > 0 ? (
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-4">
            {cart.map((item, index) => (
              <CartItem key={item._id} item={item} itemIndex={index} />
            ))}
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Cart</h2>
              <p className="text-gray-700 mb-2">Summary</p>
              <p className="text-sm text-gray-600">Total Items: {cart.length}</p>
            </div>
            <div className="mt-6">
              <p className="text-lg font-semibold text-gray-800 mb-4">
                Total Amount: ₹{totalAmount.toFixed(2)}
              </p>
              <button
                onClick={handleCheckout} // Trigger checkout on button click
                className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition-all"
              >
                Checkout Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-[60vh] text-center">
          <h1 className="text-2xl font-bold text-gray-700 mb-4">Your cart is empty</h1>
          <Link to="/">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all">
              See Menu
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
