'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const rooms = [
  {
    title: 'Junior Suite',
    price: 1200,
    image: '/images/pic3.png',
  },
  {
    title: 'Family Room',
    price: 1500,
    image: '/images/pic4.png',
  },
  {
    title: 'Standard Room',
    price: 2000,
    image: '/images/pic5.png',
  },
  {
    title: 'Deluxe Room',
    price: 2500,
    image: '/images/pic6.png',
  },
];

export default function RoomCarousel() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollAmount = 320;

  const scrollLeft = () => {
    setScrollPosition((prev) => Math.max(prev - scrollAmount, 0));
  };

  const scrollRight = () => {
    setScrollPosition((prev) => Math.min(prev + scrollAmount, (rooms.length - 1) * 320));
  };

  return (
    <div className="bg-white p-8 rounded-2xl relative shadow-xl  mx-auto">
      <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">Rooms & Suites</h2>
      <p className="text-gray-500 text-center mb-6">Experience luxury and comfort like never before.</p>
      
      <div className="relative overflow-hidden">
        <div
          className="flex gap-6 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${scrollPosition}px)` }}
        >
          {rooms.map((room, index) => (
            <div key={index} className="bg-white p-5 shadow-lg rounded-2xl min-w-[300px] transform transition duration-300 hover:scale-105 border border-gray-200">
              <div className="relative w-[300px] h-[200px] rounded-xl overflow-hidden">
                <Image src={room.image} alt={room.title} layout="fill" objectFit="cover" className="rounded-xl" />
              </div>
              <h3 className="text-xl font-semibold mt-4 text-gray-800">{room.title}</h3>
              <p className="text-gray-500">₹{room.price} Per Night</p>
              <button className="bg-indigo-600 text-white px-5 py-2 mt-4 rounded-lg w-full hover:bg-indigo-700 transition">Show More</button>
            </div>
          ))}
        </div>
      </div>
      
      <button
        className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition"
        onClick={scrollLeft}
      >
        <ChevronLeft size={28} />
      </button>
      
      <button
        className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition"
        onClick={scrollRight}
      >
        <ChevronRight size={28} />
      </button>
    </div>
  );
}
