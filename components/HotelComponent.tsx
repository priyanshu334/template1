'use client';

import Image from 'next/image';

export default function HotelComponent() {
  return (
    <div className="flex justify-center items-center p-1 bg-white">
      <div className="flex flex-col md:flex-row items-center gap-8 p-14  ">
        {/* Images Section */}
        <div className="flex gap-4">
          <div className="w-56 h-56 md:w-72 md:h-72 relative overflow-hidden rounded-xl shadow-md">
            <Image src="/images/pic1.png" alt="Restaurant" fill className="object-cover" />
          </div>
          <div className="w-56 h-56 md:w-72 md:h-72 relative overflow-hidden rounded-xl shadow-md">
            <Image src="/images/pic2.png" alt="Poolside" fill className="object-cover" />
          </div>
        </div>

        {/* Text Section */}
        <div className="max-w-lg text-gray-900 space-y-4 text-center md:text-left">
          <h2 className="text-3xl font-extrabold leading-snug">
            Welcome to <span className="text-purple-600">Hotel XYZZ</span>
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Experience luxury and comfort at its finest. Our meticulously designed spaces offer a perfect blend of
            style and warmth, ensuring a relaxing and memorable stay. Whether for business or leisure, indulge in
            world-class amenities, fine dining, and breathtaking views that create an unforgettable experience.
          </p>
          <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium shadow-md hover:bg-purple-700 transition-transform transform hover:scale-105">
            Show More
          </button>
        </div>
      </div>
    </div>
  );
}
