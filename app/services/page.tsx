'use client';

import React from 'react';
import { Car, Wifi, Waves } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Car Rental',
    description: 'Convenient and affordable car rental services for all your travel needs.',
    icon: <Car size={48} className="text-purple-500 mx-auto" />,
  },
  {
    title: 'Swimming Pool',
    description: 'Enjoy a refreshing dip in our pristine swimming pool with a relaxing ambiance.',
    icon: <Waves size={48} className="text-purple-500 mx-auto" />,
  },
  {
    title: 'Free WiFi',
    description: 'Stay connected with our high-speed WiFi available throughout the hotel.',
    icon: <Wifi size={48} className="text-purple-500 mx-auto" />,
  },
];

const Services: React.FC = () => {
  return (
    <section
      className="relative text-white py-28 px-6 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/bg2.png')" }}
    >
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <div className="relative max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-purple-500 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Services & Features
        </motion.h2>
        <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
          Experience luxurious accommodations, fine dining, a rejuvenating spa, a fully equipped fitness center, event and conference facilities, 24/7 concierge service, and high-speed Wi-Fi.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white bg-opacity-10 rounded-2xl shadow-xl transform transition duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-2 text-white">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
