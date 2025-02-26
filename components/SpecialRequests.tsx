'use client';

import { useState } from 'react';

const SpecialRequests = () => {
  const [request, setRequest] = useState('');

  return (
    <div className="border rounded-lg p-6 shadow-lg  mx-auto bg-white">
      <h2 className="text-2xl font-bold mb-2">Special requests</h2>
      <p className="text-gray-600 text-sm mb-4">
        Special requests cannot be guaranteed – but the property will do its best to meet your needs. You can always make a special request after your booking is complete!
      </p>
      <label className="block font-medium text-gray-700 mb-1">
        Please write your requests in English or Hindi. <span className="text-gray-500 text-sm">(optional)</span>
      </label>
      <textarea
        className="w-full border rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
        rows={4}
        placeholder="Enter Your Request here in detail."
        value={request}
        onChange={(e) => setRequest(e.target.value)}
      />
    </div>
  );
};

export default SpecialRequests;
