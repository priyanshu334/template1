import Image from "next/image";

const HotelService = () => {
  return (
    <section className="flex flex-col items-center px-8 py-16 lg:flex-row lg:justify-between lg:gap-16 bg-gray-50">
      {/* Text Section */}
      <div className="max-w-lg text-center lg:text-left">
        <h2 className="text-3xl font-bold text-gray-900 leading-tight">
          Over <span className="text-blue-600">15 years</span> of excellence
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Whether you’re a business traveler, a family on vacation, or a solo adventurer, we provide
          personalized service, top-tier amenities, and an unforgettable experience.
        </p>
      </div>

      {/* Image Section */}
      <div className="flex flex-col gap-6 mt-8 lg:mt-0 lg:flex-row">
        <div>
          <Image src="/images/pic6.png" alt="Dining Experience" width={320} height={320} className="rounded-2xl shadow-lg" />
        </div>
        <div>
          <Image src="/images/pic7.png" alt="Food Spread" width={320} height={320} className="rounded-2xl shadow-lg" />
        </div>
      </div>

      {/* Stats Section */}
      <div className="flex justify-center w-full mt-12 border-t pt-6 lg:mt-0 lg:w-auto">
        {["Guests Served", "5-Star Reviews", "Luxury Suites"].map((label, index) => (
          <div key={index} className="text-center px-8 border-r last:border-none">
            <p className="text-3xl font-bold text-blue-600">{index === 0 ? "10K+" : index === 1 ? "5,000+" : "50+"}</p>
            <p className="text-gray-500">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HotelService;
