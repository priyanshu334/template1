"use client"
import Image from 'next/image';
import { useState } from 'react';

export default function RoomDetails() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    '/room1.jpg',
    '/room2.jpg',
    '/room3.jpg',
    '/room4.jpg',
  ];

  return (
    <div className="max-w-7xl my-20 mx-auto p-11 bg-white shadow-2xl rounded-2xl flex gap-8 overflow-hidden">
      {/* Left Side - Image Carousel */}
      <div className="w-2/5 relative">
        <div className="relative w-full h-96 overflow-hidden rounded-xl">
          <Image 
            src={images[currentImage]}  
            alt="Double Room" 
            layout="fill" 
            objectFit="cover" 
            className="rounded-xl transition-transform duration-500 ease-in-out"
          />
          <button 
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75"
            onClick={() => setCurrentImage((currentImage - 1 + images.length) % images.length)}
          >
            ❮
          </button>
          <button 
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75"
            onClick={() => setCurrentImage((currentImage + 1) % images.length)}
          >
            ❯
          </button>
        </div>

        {/* Thumbnail Images */}
        <div className="flex justify-center gap-2 mt-4">
          {images.map((img, index) => (
            <Image 
              key={index} 
              src={img} 
              alt="Thumbnail" 
              width={60} 
              height={60} 
              className={`cursor-pointer rounded-lg transition-all duration-300 hover:scale-110 ${currentImage === index ? 'border-4 border-blue-500' : ''}`}
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </div>
      </div>
      
      {/* Right Side - Room Details */}
      <div className="w-3/5 space-y-6">
        <h2 className="text-3xl font-extrabold text-gray-800">Double Room</h2>
        <div className="flex flex-wrap items-center gap-3 text-gray-600 text-sm">
          <span className="bg-gray-100 px-3 py-1 rounded-lg">🏙️ City View</span>
          <span className="bg-gray-100 px-3 py-1 rounded-lg">🛁 Private Bathroom</span>
          <span className="bg-gray-100 px-3 py-1 rounded-lg">📶 Free WiFi</span>
          <span className="bg-gray-100 px-3 py-1 rounded-lg">🪞 Mirror</span>
          <span className="bg-gray-100 px-3 py-1 rounded-lg">📺 Flat-screen TV</span>
          <span className="bg-gray-100 px-3 py-1 rounded-lg">❄️ Air Conditioning</span>
          <span className="bg-gray-100 px-3 py-1 rounded-lg">🍽️ Restaurant</span>
        </div>

        <div>
          <p className="text-lg font-semibold text-gray-700">Room size: 21 m²</p>
          <p className="text-lg font-semibold text-gray-700">1 double bed 🛏️</p>
          <p className="text-gray-500 mt-2">Comfy beds, 7.7 ⭐ - Based on 57 reviews</p>
          <p className="text-gray-500 mt-2 leading-relaxed">
            Featuring free toiletries, this double room includes a private bathroom with a shower and slippers. 
            The air-conditioned double room features a flat-screen TV with satellite channels, a minibar, a seating area, 
            a wardrobe, as well as city views. The unit has 1 bed.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800">In your private bathroom:</h3>
          <ul className="list-disc pl-5 text-gray-500">
            <li>Free Toiletries</li>
            <li>Shower</li>
            <li>Toilet</li>
            <li>Slippers</li>
          </ul>
        </div>
        
        <div>
          <p className="text-lg font-semibold text-gray-700">View: 🏙️ City View</p>
          <p className="text-lg font-semibold text-gray-700">Smoking: 🚭 No Smoking</p>
        </div>
      </div>
    </div>
  );
}