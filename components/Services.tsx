import React from "react";

const Services = () => {
  return (
    <section 
      className="relative text-white py-28 px-4 bg-cover bg-center" 
      style={{ backgroundImage: "url('/images/bg2.png')" }}
    >
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <div className="relative max-w-6xl mx-auto text-center">
        <h2 
          className="text-3xl md:text-4xl font-bold text-pink-400 mb-4"
        >
          Our Services & Features
        </h2>
        <p 
          className="text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          Experience luxurious accommodations, fine dining, a rejuvenating spa, a fully equipped fitness center, event and conference facilities, 24/7 concierge service, and high-speed Wi-Fi.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className=" p-6 rounded-2xl shadow-xl transform transition duration-300 hover:scale-105 "
            >
              <h3 className="text-2xl font-semibold mb-2 text-white">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const services = [
  {
    title: "Car Rental",
    description: "Convenient and affordable car rental services for all your travel needs."
  },
  {
    title: "Swimming Pool",
    description: "Enjoy a refreshing dip in our pristine swimming pool with a relaxing ambiance."
  },
  {
    title: "Free WiFi",
    description: "Stay connected with our high-speed WiFi available throughout the hotel."
  },
];

export default Services;