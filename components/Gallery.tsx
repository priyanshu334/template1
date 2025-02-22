'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Gallery() {
  const items = [
    { title: 'Room', photosCount: 4, imageUrl: '/images/pic9.png' },
    { title: 'Spa', photosCount: 3, imageUrl: '/images/pic10.png' },
    { title: 'Outdoor', photosCount: 5, imageUrl: '/images/pic11.png' },
  ];

  return (
    <div className="text-center py-12  text-black">
      <h2 className="text-4xl font-extrabold mb-8 tracking-wide">Our Gallery</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {items.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="relative overflow-hidden rounded-2xl shadow-xl bg-gray-800/30 backdrop-blur-md"
          >
            <div className="relative w-full h-72">
              <Image src={item.imageUrl} alt={item.title} layout="fill" objectFit="cover" className="rounded-t-2xl" />
            </div>
            <div className="p-5 text-center">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-black">{item.photosCount} Photos</p>
            </div>
            <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
              <p className="text-black text-lg font-medium">View More</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
