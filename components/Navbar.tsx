'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-purple-900 to-indigo-900   w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-extrabold text-white">
          <span className="text-yellow-300">HOTEL</span> OF XYZZ
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-white text-lg">
          {['Home', 'Booking', 'Service', 'Blog', 'About', 'Contact Us'].map((item, index) => (
            <li key={index}>
              <Link href={`/${item.toLowerCase().replace(' ', '')}`} className="hover:text-yellow-300 transition duration-300">
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Book Now Button */}
        <button className="hidden md:block bg-yellow-400 text-gray-900 px-5 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition duration-300">
          Book Now
        </button>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white focus:outline-none">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-indigo-700 py-4"
          >
            <ul className="text-center text-white text-lg space-y-4">
              {['Home', 'Booking', 'Service', 'Blog', 'About', 'Contact Us'].map((item, index) => (
                <li key={index}>
                  <Link href={`/${item.toLowerCase().replace(' ', '')}`} className="block py-2 hover:text-yellow-300 transition duration-300" onClick={() => setIsOpen(false)}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="text-center mt-4">
              <button className="bg-yellow-400 text-gray-900 px-5 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition duration-300">
                Book Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;