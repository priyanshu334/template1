import React from "react";

const BookingConfirmation = () => {
  return (
    <div className=" mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Your arrival time</h2>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex items-center mb-2">
          <span className="text-green-600 mr-2">✔️</span>
          <p className="text-gray-700">Your room will be ready for check-in between 12:00 - 00:00</p>
        </div>
        <div className="flex items-center mb-4">
          <span className="text-green-600 mr-2">🏨</span>
          <p className="text-gray-700">24-hour front desk - Help whenever you need it!</p>
        </div>
        <label className="block text-gray-700 font-semibold mb-2">Add your estimated arrival time (optional)</label>
        <select className="w-full p-2 border rounded-md">
          <option>Please Select</option>
        </select>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md mt-4">
        <h3 className="text-xl font-bold">Hotel xyxxx Raipur at Place Name</h3>
        <p className="text-gray-600">Double Room</p>
        <div className="mt-3">
          <p className="font-semibold">Check-In</p>
          <p className="text-gray-700 font-bold">Sat 22 Feb 2025</p>
          <p className="text-gray-600">12:00 - 00:00</p>
        </div>
        <div className="mt-3">
          <p className="font-semibold">Check-Out</p>
          <p className="text-gray-700 font-bold">Sun 23 Feb 2025</p>
          <p className="text-gray-600">11:00 - 11:30</p>
        </div>
        <p className="mt-3 text-gray-700 font-semibold">Total length of stay: <span className="font-bold">1 night</span></p>
      </div>
      <button className="w-full bg-purple-600 text-white font-bold py-2 px-4 rounded-lg mt-4 hover:bg-purple-700">Submit</button>
    </div>
  );
};

export default BookingConfirmation;
