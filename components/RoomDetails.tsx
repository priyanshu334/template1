"use client";
import Image from "next/image";
import { useState } from "react";

export default function RoomDetails() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "/images/r1.png",
    "/images/r2.png",
    "/images/r3.png",
    "/images/r4.png",
  ];

  return (
    <div className="w-full  mx-auto my-20 p-8 bg-white rounded-lg flex flex-col md:flex-row gap-10 overflow-hidden">
      {/* Left Side - Image Carousel */}
      <div className="w-full md:w-1/2 relative">
        <div className="relative w-full h-[450px] overflow-hidden rounded-xl shadow-md">
          <Image 
            src={images[currentImage]}  
            alt="Room Image" 
            layout="fill" 
            objectFit="cover" 
            className="rounded-xl transition-transform duration-500 ease-in-out"
          />
          <button 
            className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75"
            onClick={() => setCurrentImage((currentImage - 1 + images.length) % images.length)}
          >
            ❮
          </button>
          <button 
            className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75"
            onClick={() => setCurrentImage((currentImage + 1) % images.length)}
          >
            ❯
          </button>
        </div>
        
        {/* Thumbnail Images */}
        <div className="flex justify-center gap-3 mt-4">
          {images.map((img, index) => (
            <Image 
              key={index} 
              src={img} 
              alt="Thumbnail" 
              width={70} 
              height={70} 
              className={`cursor-pointer rounded-lg transition-all duration-300 hover:scale-110 ${currentImage === index ? 'border-4 border-blue-500' : ''}`}
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </div>
      </div>
      
      {/* Right Side - Room Details */}
      <div className="w-full md:w-1/2 space-y-6">
        <h2 className="text-4xl font-bold text-gray-800">Double Room</h2>
        <div className="flex flex-wrap items-center gap-2 text-gray-600 text-sm">
          {['🏙️ City View', '🛁 Private Bathroom', '📶 Free WiFi', '🪞 Mirror', '📺 Flat-screen TV', '❄️ Air Conditioning', '🍽️ Restaurant'].map((feature, index) => (
            <span key={index} className="bg-gray-100 px-4 py-2 rounded-lg text-sm font-medium shadow-sm">{feature}</span>
          ))}
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