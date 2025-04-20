import React, { useState } from 'react';
import axios from 'axios';

const History = () => {
  const [phone, setPhone] = useState('');
  const [userData, setUserData] = useState(null);
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchOrders = async () => {
    if (!phone.trim()) {
      return setError("Please enter a phone number.");
    }

    try {
      setLoading(true);
      setError('');
      const response = await axios.get(`https://digital-dinner-p0fz.onrender.com/api/v1/orders/${phone}`);
      setUserData(response.data.user);
      setOrders(response.data.orders);
    } catch (err) {
      setUserData(null);
      setOrders([]);
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-xl mt-8">
      <h2 className="text-2xl font-semibold mb-4">📱 Order History</h2>
      <div className="flex items-center gap-4 mb-4">
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter phone number"
          className="border border-gray-300 px-4 py-2 rounded w-full"
        />
        <button
          onClick={fetchOrders}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500 font-medium">{error}</p>}

      {userData && (
        <div className="mt-4 bg-gray-100 p-4 rounded-lg">
          <h3 className="font-semibold">👤 User Info:</h3>
          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>Phone:</strong> {userData.phone_number}</p>
        </div>
      )}

      {orders.length > 0 && (
        <div className="mt-4">
          <h3 className="font-semibold">📦 Orders:</h3>
          {orders.map((order, idx) => (
            <div key={idx} className="border p-3 mt-2 rounded-md bg-white shadow">
              <p><strong>Order ID:</strong> {order.id}</p>
              <p><strong>Total:</strong> ₹{order.total_amount}</p>
              <p><strong>Date:</strong> {new Date(order.order_date).toLocaleString()}</p>
              <p><strong>Items:</strong></p>
              <ul className="list-disc pl-6">
                {Array.isArray(order.items) ? order.items.map((item, index) => (
                  <li key={index}>
                    {item.name} x {item.quantity}
                  </li>
                )) : <li>No items</li>}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default History;
