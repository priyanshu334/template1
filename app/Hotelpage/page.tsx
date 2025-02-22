'use client';

import Progress from '@/components/Progress';
import Image from 'next/image';


const ratings = [
  { category: 'Staff', score: 87 },
  { category: 'Facilities', score: 79 },
  { category: 'Cleanliness', score: 87 },
  { category: 'Comfort', score: 75 },
  { category: 'Value of Money', score: 73 },
  { category: 'Location', score: 85 },
  { category: 'Free WiFi', score: 45 },
];

const images = [
  '/overview.jpg', '/double-room.jpg', '/deluxe-room.jpg',
  '/bar.jpg', '/lounge.jpg', '/pool.jpg',
  '/room.jpg', '/reception.jpg', '/restaurant.jpg', '/hallway.jpg'
];

export default function HotelPage() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Hotel xyxxx Raipur at Place Name <span className="text-yellow-500">★★★★</span></h1>
        <button className="bg-red-700 text-white px-4 py-2 rounded">Reserve Now</button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {images.map((src, index) => (
          <div key={index} className="relative w-full h-32 rounded overflow-hidden">
            <Image src={src} alt="Hotel image" layout="fill" objectFit="cover" />
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 border rounded shadow-sm">
        <h2 className="text-xl font-semibold">7.7 Good (77 reviews)</h2>
        <div className="mt-4 space-y-3">
          {ratings.map(({ category, score }) => (
            <div key={category}>
              <div className="flex justify-between text-sm font-medium">
                <span>{category}</span>
                <span>{score}</span>
              </div>
              <Progress value={score} max={100} color={score < 50 ? 'bg-red-500' : 'bg-purple-700'} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
