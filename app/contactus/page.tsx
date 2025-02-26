"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
      {/* Contact Header */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-white mb-6 text-center"
      >
        Get In Touch
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-lg rounded-2xl p-8 w-full"
        >
          <h3 className="text-2xl font-semibold text-purple-700 text-center mb-6">Send Us a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500"
                placeholder="Your Message"
                rows={4}
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-purple-600 text-white py-2 rounded-lg font-semibold hover:bg-purple-700 transition"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-lg rounded-2xl p-8 w-full flex flex-col gap-6"
        >
          <h3 className="text-2xl font-semibold text-purple-700 text-center">Contact Info</h3>

          {/* Address */}
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-purple-600 text-xl" />
            <p className="text-gray-700">123 Purple Street, Nagpur, India</p>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-purple-600 text-xl" />
            <p className="text-gray-700">contact@mentora.com</p>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4">
            <FaPhone className="text-purple-600 text-xl" />
            <p className="text-gray-700">+91 98765 43210</p>
          </div>

          {/* Social Media */}
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="text-purple-600 hover:text-purple-800 text-2xl">
              <FaGithub />
            </a>
            <a href="#" className="text-purple-600 hover:text-purple-800 text-2xl">
              <FaTwitter />
            </a>
            <a href="#" className="text-purple-600 hover:text-purple-800 text-2xl">
              <FaLinkedin />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Google Maps */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-12 w-full max-w-4xl overflow-hidden rounded-2xl shadow-lg"
      >
        <iframe
          className="w-full h-64 rounded-2xl"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.134740878856!2d79.08217331536146!3d21.14663358847462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0871a483ff9%3A0xa2b0ffec56a3ec7b!2sNagpur%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1618305895612!5m2!1sen!2sus"
          loading="lazy"
        ></iframe>
      </motion.div>
    </div>
  );
}
