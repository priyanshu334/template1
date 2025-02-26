'use client';

import React from 'react';

const PaymentDetails = () => {
  return (
    <div className=" mx-auto p-6 space-y-4 border bg-white border-gray-300 rounded-lg shadow-lg">
      {/* Payment Schedule Section */}
      <div className="p-4 border rounded-lg bg-gray-100">
        <h2 className="text-lg font-semibold text-gray-900">Your payment schedule</h2>
        <p className="text-gray-600 text-sm mt-1">You will be charged a prepayment of the total price at any time.</p>
      </div>

      {/* Cancellation Section */}
      <div className="p-4 border rounded-lg bg-gray-100">
        <h2 className="text-lg font-semibold text-gray-900">How much will it cost to cancel?</h2>
        <p className="text-green-600 text-sm mt-1">Free cancellation before <span className="font-semibold">21 Feb</span></p>
        <p className="text-gray-600 text-sm">From 00:00 on 21 Feb</p>
        <p className="text-right text-gray-900 font-semibold mt-2">₹20999.30</p>
      </div>
    </div>
  );
};

export default PaymentDetails;
