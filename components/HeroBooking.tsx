"use client";

import { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function HeroBooking() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 bg-[url('/images/bg1.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80"></div>
      </div>

      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center text-white"
      >
        <h1 className="text-5xl font-extrabold tracking-wide">Experience the Stay of Your Dreams!</h1>
        <p className="mt-4 max-w-2xl text-lg text-gray-200">
          Welcome to a world of comfort and luxury, where every stay is a memorable experience.
          Our elegantly designed spaces blend style with warmth, ensuring relaxation and indulgence.
        </p>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-lg transition"
        >
          Book Now
        </motion.button>
      </motion.div>

      {/* Booking Form */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white p-6 rounded-xl shadow-xl flex gap-4 items-center backdrop-blur-md bg-white/80"
      >
        <div className="flex items-center gap-2 border px-4 py-2 rounded-md">
          <FaCalendarAlt className="text-purple-600" />
          <input
            type="date"
            className="outline-none bg-transparent text-gray-800"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2 border px-4 py-2 rounded-md">
          <FaCalendarAlt className="text-purple-600" />
          <input
            type="date"
            className="outline-none bg-transparent text-gray-800"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
          />
        </div>
        <select className="border px-4 py-2 rounded-md bg-transparent text-gray-800" value={adults} onChange={(e) => setAdults(Number(e.target.value))}>
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>{num} Adult{num > 1 ? "s" : ""}</option>
          ))}
        </select>
        <select className="border px-4 py-2 rounded-md bg-transparent text-gray-800" value={children} onChange={(e) => setChildren(Number(e.target.value))}>
          {[0, 1, 2, 3, 4].map((num) => (
            <option key={num} value={num}>{num} Child{num > 1 ? "ren" : ""}</option>
          ))}
        </select>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md shadow-lg transition"
        >
          Check
        </motion.button>
      </motion.div>
    </div>
  );
}
