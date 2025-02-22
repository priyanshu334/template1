"use client"
import { FaYoutube, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Hotel Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-purple-400">Hotel of XYZZ</h2>
          <p className="text-sm text-gray-400">Luxury Stay</p>
          <p className="mt-2 text-sm text-gray-300">
            Passengers vary in needs and expectations, and our hotel ensures comfort,
            convenience, and a perfect stay for all.
          </p>
          <div className="flex space-x-4 mt-4">
            {[FaYoutube, FaInstagram, FaTwitter, FaFacebook].map((Icon, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Icon className="text-gray-300 hover:text-purple-400 cursor-pointer text-2xl" />
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Quick Links */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <h3 className="text-lg font-semibold text-purple-400">Quick Links</h3>
          <ul className="text-sm text-gray-300 space-y-2 mt-3">
            <li>+91 (000-985X-563)</li>
            <li><a href="#" className="hover:text-purple-400 transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-purple-400 transition">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-purple-400 transition">FAQ</a></li>
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <h3 className="text-lg font-semibold text-purple-400">Contact Info</h3>
          <ul className="text-sm text-gray-300 space-y-2 mt-3">
            <li>+91 (000-985X-563)</li>
            <li>17, Resort View, London27</li>
            <li>Email: ydgth@gmail.com</li>
          </ul>
        </motion.div>
        
        {/* Newsletter */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
          <h3 className="text-lg font-semibold text-purple-400">Newsletter</h3>
          <p className="text-sm text-gray-300 mt-2">Get Special Offers & Discounts</p>
          <div className="mt-3">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="w-full px-4 py-2 border rounded-md text-sm bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-3 w-full bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600 transition"
            >
              SUBSCRIBE
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
