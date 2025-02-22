'use client';

import React from 'react';

const BookingDetails: React.FC = () => {
  return (
    <div className="max-w-md mx-auto border rounded-lg p-4 shadow-lg bg-white">
      <h2 className="text-lg font-bold mb-4">Your booking details</h2>
      
      <div className="flex justify-between border-b pb-2">
        <div>
          <p className="text-sm font-semibold">Check-in</p>
          <p className="text-lg font-bold">Sat 22 Feb 2025</p>
          <p className="text-gray-500 text-sm">12:00 - 00:00</p>
        </div>
        <div>
          <p className="text-sm font-semibold">Check-out</p>
          <p className="text-lg font-bold">Sun 23 Feb 2025</p>
          <p className="text-gray-500 text-sm">11:00 - 11:30</p>
        </div>
      </div>
      
      <p className="mt-3 text-sm font-semibold">Total length of stay:</p>
      <p className="text-lg font-bold">1 night</p>
      
      <div className="mt-4">
        <p className="text-sm font-semibold">You selected</p>
        <p className="text-lg font-bold">1 room for 2 adults</p>
        <p className="text-gray-500 text-sm">1 × Double Room</p>
      </div>
    </div>
  );
};

export default BookingDetails;
