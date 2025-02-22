'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  image: string;
  review: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: 'Ayush Shukla',
    image: '/images/c1.png',
    review:
      'Exceptional stay with top-notch service, cozy rooms, and delicious cuisine. The staff was welcoming and attentive.',
    rating: 5,
  },
  {
    name: 'Bhavana Dubey',
    image: '/images/c2.png',
    review:
      'Exceptional stay with top-notch service, cozy rooms, and delicious cuisine. The staff was welcoming and attentive.',
    rating: 5,
  },
];

export default function ClientsExperience() {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 tracking-wide">Clients & Experience</h2>
        <div className="flex overflow-x-auto gap-6 md:justify-center scrollbar-hide">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-xl max-w-sm min-w-[280px] md:min-w-[320px] border border-white/20"
            >
              <p className="text-sm text-gray-200 italic">{testimonial.review}</p>
              <div className="flex items-center mt-5">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full border-2 border-yellow-400"
                />
                <div className="ml-3">
                  <p className="font-semibold text-lg">{testimonial.name}</p>
                  <div className="flex gap-1 text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" stroke="none" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}