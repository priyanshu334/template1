"use client";

import { FaShuttleVan, FaWifi, FaUtensils, FaParking } from "react-icons/fa";

export default function HotelCard() {
  return (
    <div className=" mx-auto border rounded-lg shadow-md p-4 bg-white">
      <h2 className="text-lg font-semibold flex items-center gap-2">
        Hotel <span className="text-yellow-500">⭐⭐⭐</span>
        <span className="bg-yellow-500 text-white p-1 rounded">👍</span>
      </h2>
      <h3 className="text-xl font-bold mt-2">Hotel Name</h3>
      <p className="text-gray-600">Address</p>
      <p className="text-gray-600">Pincode</p>
      <div className="flex items-center mt-3">
        <span className="bg-purple-600 text-white px-2 py-1 rounded-md text-sm">
          7.7
        </span>
        <span className="ml-2 text-gray-700 text-sm">Good - 77 reviews</span>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4 text-gray-700">
        <div className="flex items-center gap-2">
          <FaShuttleVan className="text-xl" />
          <span>Airport shuttle</span>
        </div>
        <div className="flex items-center gap-2">
          <FaWifi className="text-xl" />
          <span>Free Wifi</span>
        </div>
        <div className="flex items-center gap-2">
          <FaParking className="text-xl" />
          <span>Parking</span>
        </div>
        <div className="flex items-center gap-2">
          <FaUtensils className="text-xl" />
          <span>Restaurant</span>
        </div>
      </div>
    </div>
  );
}
