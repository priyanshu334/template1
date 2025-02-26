import Image from "next/image";
import { Hotel, UtensilsCrossed, HotelIcon } from "lucide-react";
const About = () => {
  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-r from-purple-900 to-indigo-900 text-white py-20 px-6 text-center ">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold leading-tight">About <span className="text-yellow-300">Hotel XYZZ</span></h1>
          <p className="mt-4 text-lg text-gray-200">
            Experience luxury and comfort like never before. With over 15 years of excellence, we offer world-class service in a serene and elegant atmosphere.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="flex flex-col items-center px-8 py-16 lg:flex-row lg:justify-between lg:gap-16">
        {/* Text Section */}
        <div className="max-w-lg text-center lg:text-left">
          <h2 className="text-3xl font-bold text-gray-900 leading-tight">
            Our <span className="text-purple-700">Story & Mission</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Hotel XYZZ was founded with a vision to create a sanctuary of luxury and relaxation. We provide a seamless blend of comfort, fine dining, and exceptional service, making every stay unforgettable.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex flex-col gap-6 mt-8 lg:mt-0 lg:flex-row">
          <div>
            <Image src="/images/pic5.png" alt="Luxury Suite" width={320} height={320} className="rounded-2xl shadow-lg" />
          </div>
          <div>
            <Image src="/images/pic6.png" alt="Spa & Wellness" width={320} height={320} className="rounded-2xl shadow-lg" />
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="px-8 py-16 bg-white">
      <h2 className="text-center text-3xl font-bold text-gray-900">Why Choose Us?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-10 max-w-5xl mx-auto">
        {/* Feature 1 - Premium Suites */}
        <div className="text-center">
          <Hotel size={60} className="text-purple-700 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-purple-700">Premium Suites</h3>
          <p className="text-gray-600 mt-2">
            Enjoy state-of-the-art rooms with stunning city views and unmatched luxury.
          </p>
        </div>

        {/* Feature 2 - Gourmet Dining */}
        <div className="text-center">
          <UtensilsCrossed size={60} className="text-purple-700 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-purple-700">Gourmet Dining</h3>
          <p className="text-gray-600 mt-2">
            Savor exquisite cuisines crafted by world-class chefs at our award-winning restaurants.
          </p>
        </div>

        {/* Feature 3 - Wellness & Spa */}
        <div className="text-center">
          <HotelIcon size={60} className="text-purple-700 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-purple-700">Wellness & Spa</h3>
          <p className="text-gray-600 mt-2">
            Relax and rejuvenate with our spa treatments, yoga sessions, and wellness therapies.
          </p>
        </div>
      </div>
    </section>
      {/* Stats Section */}
      <section className="flex justify-center w-full mt-12 border-t pt-6 mb-20">
        {["Years of Excellence", "Happy Guests", "Luxury Suites"].map((label, index) => (
          <div key={index} className="text-center px-8 border-r last:border-none">
            <p className="text-3xl font-bold text-purple-700">{index === 0 ? "15+" : index === 1 ? "50K+" : "120+"}</p>
            <p className="text-gray-500">{label}</p>
          </div>
        ))}
      </section>
    </main>
  );
};

export default About;
