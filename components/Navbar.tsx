"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-purple-900 to-indigo-900 w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-extrabold text-white">
          <span className="text-yellow-300">HOTEL</span> OF XYZZ
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-white text-lg">
          <li>
            <Link href="/" className="hover:text-yellow-300 transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/booking" className="hover:text-yellow-300 transition duration-300">
              Booking
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-yellow-300 transition duration-300">
              Services
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-yellow-300 transition duration-300">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-yellow-300 transition duration-300">
              About
            </Link>
          </li>
          <li>
            <Link href="/contactus" className="hover:text-yellow-300 transition duration-300">
              Contact Us
            </Link>
          </li>
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
              <li>
                <Link href="/" className="block py-2 hover:text-yellow-300 transition duration-300" onClick={() => setIsOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/booking" className="block py-2 hover:text-yellow-300 transition duration-300" onClick={() => setIsOpen(false)}>
                  Booking
                </Link>
              </li>
              <li>
                <Link href="/services" className="block py-2 hover:text-yellow-300 transition duration-300" onClick={() => setIsOpen(false)}>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="block py-2 hover:text-yellow-300 transition duration-300" onClick={() => setIsOpen(false)}>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="block py-2 hover:text-yellow-300 transition duration-300" onClick={() => setIsOpen(false)}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/contactus" className="block py-2 hover:text-yellow-300 transition duration-300" onClick={() => setIsOpen(false)}>
                  Contact Us
                </Link>
              </li>
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
