"use client"
import { useState } from "react";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    phone: "",
    mainGuest: "someoneElse",
    workTravel: "no",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Enter Your Details</h2>
      <div className="bg-blue-100 text-blue-800 p-3 rounded mb-4">Almost done! Just fill in the <span className="text-red-500">*</span> required info</div>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">First Name *</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full p-2 border rounded" placeholder="Enter your First Name" required />
        </div>
        <div>
          <label className="block text-sm font-medium">Last Name *</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full p-2 border rounded" placeholder="Enter your Last Name" required />
        </div>
      </div>
      
      <div className="mt-4">
        <label className="block text-sm font-medium">Email Address *</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded" placeholder="Enter your Email Address" required />
      </div>
      
      <div className="mt-4">
        <label className="block text-sm font-medium">Country/Region *</label>
        <select name="country" value={formData.country} onChange={handleChange} className="w-full p-2 border rounded">
          <option value="India">India</option>
        </select>
      </div>
      
      <div className="mt-4">
        <label className="block text-sm font-medium">Phone Number *</label>
        <div className="flex items-center gap-2">
          <span className="p-2 border rounded bg-gray-100">+91</span>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="w-full p-2 border rounded" placeholder="95XXXXXX23" required />
        </div>
      </div>
      
      <div className="mt-4 flex items-center gap-2">
        <input type="checkbox" id="paperless" className="h-4 w-4" />
        <label htmlFor="paperless" className="text-sm">Yes, I’d like free paperless confirmation (recommended)</label>
      </div>
      
      <div className="mt-4">
        <label className="block text-sm font-medium">Who are you booking for? (optional)</label>
        <div className="flex gap-4 mt-1">
          <label className="flex items-center gap-2">
            <input type="radio" name="mainGuest" value="self" checked={formData.mainGuest === "self"} onChange={handleChange} /> I am the main guest
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="mainGuest" value="someoneElse" checked={formData.mainGuest === "someoneElse"} onChange={handleChange} /> Booking is for someone else
          </label>
        </div>
      </div>
      
      <div className="mt-4">
        <label className="block text-sm font-medium">Are you travelling for work? (optional)</label>
        <div className="flex gap-4 mt-1">
          <label className="flex items-center gap-2">
            <input type="radio" name="workTravel" value="yes" checked={formData.workTravel === "yes"} onChange={handleChange} /> Yes
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="workTravel" value="no" checked={formData.workTravel === "no"} onChange={handleChange} /> No
          </label>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
