import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../Slice/CartSlice";

const OrderPlacementForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

 
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();


  const totalAmount = cart.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!name || !phone) {
      alert("Please enter your name and phone number.");
      return;
    }
  
    const order = {
      name,
      phone,
      items: cart,
      totalAmount,
    };
    console.log(order)
  
    try {
      const response = await fetch("https://digital-dinner-p0fz.onrender.com/api/v1/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        console.log("Order saved:", data);
        dispatch(clearCart());
        setIsSubmitted(true);
      } else {
        console.error("Failed to save order:", data);
        alert("Error placing order. Try again.");
      }
    } catch (error) {
      console.error("Error submitting order:", error);
      alert("Something went wrong. Please try again later.");
    }
  };
  
  if (isSubmitted) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-yellow-100 to-pink-100 p-6">
        <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Order Submitted Successfully!
          </h2>
          <p className="text-gray-600 mb-4">Your order is being processed.</p>
          <p className="text-gray-600">
            We will contact you soon at {phone}.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-yellow-100 to-pink-100 p-6">
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Place Your Order
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Phone Number
            </label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Cart Contents:
            </h3>
            <div className="space-y-2">
              {cart.length === 0 ? (
                <p>Your cart is empty!</p>
              ) : (
                cart.map((item) => (
                  <div key={item._id} className="flex justify-between">
                    <span>{item.name}</span>
                    <span>{item.quantity} x ₹{item.price}</span>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="mb-4">
            <p className="text-lg font-semibold text-gray-800">
              Total: ₹{totalAmount.toFixed(2)}
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all"
          >
            Submit Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrderPlacementForm;
