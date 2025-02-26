import React from "react";

const PriceSummary = () => {
  return (
    <div className="bg-white mx-auto bg-gray-100 p-4 rounded-lg shadow-md">
      <div className="border-b pb-3">
        <h2 className="text-xl font-semibold">Your price summary</h2>
        <div className="mt-2">
          <p className="text-gray-700 flex justify-between">
            <span>Original price</span>
            <span className="line-through">₹2,999</span>
          </p>
          <p className="text-gray-700 flex justify-between">
            <span>Early 2025 Deal</span>
            <span className="text-red-500">-₹899.70</span>
          </p>
          <p className="text-xs text-gray-500 mt-1">
            This property is offering a discount on stays between 1 Jan - 1 Apr 2025.
          </p>
        </div>
      </div>

      <div className="bg-purple-100 p-4 my-3 rounded-lg">
        <h3 className="text-lg font-bold text-gray-800">Price</h3>
        <p className="text-3xl font-semibold">₹2,099.30</p>
        <p className="text-xs text-gray-500">+ ₹251.92 taxes and charges</p>
      </div>

      <div className="border-t pt-3">
        <h3 className="text-lg font-semibold">Price information</h3>
        <p className="text-gray-700 text-sm mt-1">
          <span className="font-medium">Excludes ₹251.92</span> in taxes and charges
        </p>
        <p className="text-gray-500 text-sm">Goods & services tax ₹251.92</p>
      </div>
    </div>
  );
};

export default PriceSummary;
