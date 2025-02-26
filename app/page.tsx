import ClientsExperience from "@/components/ClientExperience";
import Gallery from "@/components/Gallery";
import HeroBooking from "@/components/HeroBooking";
import HotelComponent from "@/components/HotelComponent";
import HotelService from "@/components/HotelService";
import LatestBlog from "@/components/LatestBlog";
import RoomCarousel from "@/components/RoomCarousel";
import Services from "@/components/Services";
import SpecialOffers from "@/components/SpecialOffers";

export default function Home() {
  return (
    <div className="bg-gray-100 text-gray-800">
      <HeroBooking />
      
      <HotelComponent />
      
      <RoomCarousel />
      
      <Services />
      
      <HotelService />
      
      <ClientsExperience />
      
      <div
        className="relative bg-cover bg-center text-white py-24 px-6"
        style={{ backgroundImage: "url('/images/bg2.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative max-w-3xl mx-auto text-center z-10">
          <h2 className="text-3xl font-bold mb-4">Experience a Luxurious Stay</h2>
          <p className="text-lg mb-6">
            Our hotel offers premium services to cater to all types of travelers, ensuring a comfortable and memorable experience.
          </p>
          <p className="mb-4">
            Call us: <span className="font-bold">9654256-000000</span> / Email:
            <span className="font-bold"> mhgdhsvgshjsjs@gmail.com</span>
          </p>
          <button className="mt-4 bg-pink-600 hover:bg-pink-700 text-white py-3 px-8 rounded-full text-lg shadow-lg transition-transform transform hover:scale-105">
            Book Now
          </button>
        </div>
      </div>
      
      <SpecialOffers />
      
      <LatestBlog />
      
      <div className="container mx-auto px-4 py-12">
        <Gallery />
      </div>
    </div>
  );
}
