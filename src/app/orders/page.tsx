

'use client';

import { useState } from 'react';

// Define a type for the food data (with dynamic details)
interface FoodData {
  price: string;
  details: string;
}

export default function OrderPage() {
  const [foodName, setFoodName] = useState<string>('');
  const [foodInfo, setFoodInfo] = useState<FoodData | null>(null);
  const [userName, setUserName] = useState<string>('');
  const [userAddress, setUserAddress] = useState<string>('');
  const [orderConfirmed, setOrderConfirmed] = useState<boolean>(false);

  // Handle food input change event
  const handleFoodChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFoodName(event.target.value);
  };

  // Handle user details input changes
  const handleUserNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setUserName(event.target.value);
  };

  const handleUserAddressChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setUserAddress(event.target.value);
  };

  // Get food details (this could be dynamic, but here we just simulate it)
  const getFoodDetails = () => {
    if (!foodName) {
      alert("Please enter a food name.");
      return;
    }

    // For demo purposes, simulate fetching details for entered food name
    setFoodInfo({
      price: `$${(Math.random() * 20 + 5).toFixed(2)}`, // Random price between $5 and $25
      details: `A delicious ${foodName} made with fresh ingredients.`,
    });
  };

  // Handle order confirmation
  const handleOrder = () => {
    if (!userName || !userAddress) {
      alert('Please provide your name and address to place the order.');
      return;
    }
    setOrderConfirmed(true);
  };

  return (
    <div className="min-h-screen bg-red text-black flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl text-white font-bold mb-6">Food Order Page</h1>

      {/* Food input section */}
      <div className="flex flex-col items-center mb-6">
        <input
          type="text"
          className="p-3 text-lg border border-black-300 rounded-lg w-64 mb-4"
          value={foodName}
          onChange={handleFoodChange}
          placeholder="Enter food name"
        />
        <button
          className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg transition-colors duration-300 hover:bg-blue-700"
          onClick={getFoodDetails}
        >
          Get Food Details
        </button>
      </div>

      {/* Display food details */}
      {foodInfo && (
        <div className="bg-white text-black p-6 rounded-lg shadow-lg w-full max-w-lg mt-6">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">{foodName}</h2>
          <p className="text-lg"><strong>Price:</strong> {foodInfo.price}</p>
          <p className="text-lg mt-2"><strong>Details:</strong> {foodInfo.details}</p>
        </div>
      )}

      {/* Order form section */}
      {foodInfo && !orderConfirmed && (
        <div className="bg-red p-6 rounded-lg shadow-lg w-full max-w-lg mt-6">
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">Enter Your Details to Order</h3>

          <input
            type="text"
            className="p-3 text-lg border border-black-300 rounded-lg w-full mb-4"
            placeholder="Your Name"
            value={userName}
            onChange={handleUserNameChange}
          />

          <input
            type="text"
            className="p-3 text-lg border border-gray-300 rounded-lg w-full mb-4"
            placeholder="Your Address"
            value={userAddress}
            onChange={handleUserAddressChange}
          />

          <button
            className="px-6 py-3 text-lg font-semibold text-white bg-green-600 rounded-lg transition-colors duration-300 hover:bg-green-700"
            onClick={handleOrder}
          >
            Place Order
          </button>
        </div>
      )}

      {/* Order confirmation */}
      {orderConfirmed && (
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg mt-6">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">Order Confirmed!</h2>
          <p className="text-lg">Thank you, {userName}! Your order for {foodName} has been placed successfully.</p>
          <p className="text-lg mt-2">Delivery address: {userAddress}</p>
        </div>
      )}
    </div>
  );
}

