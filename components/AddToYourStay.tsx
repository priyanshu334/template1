"use client"
import { useState } from "react";
import { FaShuttleVan, FaCar } from "react-icons/fa";
import { MdLocalTaxi } from "react-icons/md";

const AddToYourStay = () => {
  const [selectedOptions, setSelectedOptions] = useState({
    shuttle: true,
    carRental: false,
    taxi: true,
  });

  const toggleOption = (option: keyof typeof selectedOptions) => {
    setSelectedOptions((prev) => ({ ...prev, [option]: !prev[option] }));
  };

  return (
    <div className="p-6 max-w-xl border rounded-lg shadow-md bg-white">
      <h2 className="text-2xl font-semibold mb-4">Add to your stay</h2>
      <div className="space-y-4">
        {/* Shuttle Option */}
        <label className="flex items-start gap-3 p-4 border rounded-lg cursor-pointer">
          <input
            type="checkbox"
            checked={selectedOptions.shuttle}
            onChange={() => toggleOption("shuttle")}
            className="mt-1 w-5 h-5"
          />
          <div>
            <p className="font-semibold">I'm interested in requesting an airport shuttle</p>
            <p className="text-sm text-gray-600">
              We'll tell your accommodation that you're interested so they can
              provide details and costs.
            </p>
          </div>
          <FaShuttleVan className="text-xl text-gray-600 ml-auto" />
        </label>

        {/* Car Rental Option */}
        <label className="flex items-start gap-3 p-4 border rounded-lg cursor-pointer">
          <input
            type="checkbox"
            checked={selectedOptions.carRental}
            onChange={() => toggleOption("carRental")}
            className="mt-1 w-5 h-5"
          />
          <div>
            <p className="font-semibold">I'm interested in renting a car with 10% off</p>
            <p className="text-sm text-gray-600">
              Save 10% on all rental cars when you book with us.
            </p>
          </div>
          <FaCar className="text-xl text-gray-600 ml-auto" />
        </label>

        {/* Taxi Option */}
        <label className="flex items-start gap-3 p-4 border rounded-lg cursor-pointer">
          <input
            type="checkbox"
            checked={selectedOptions.taxi}
            onChange={() => toggleOption("taxi")}
            className="mt-1 w-5 h-5"
          />
          <div>
            <p className="font-semibold">Want to book a taxi or shuttle ride in advance?</p>
            <p className="text-sm text-gray-600">
              Avoid surprises - get from the airport to your accommodation
              without a hitch.
            </p>
          </div>
          <MdLocalTaxi className="text-xl text-gray-600 ml-auto" />
        </label>
      </div>
    </div>
  );
};

export default AddToYourStay;
