import Image from "next/image";

export default function HotelBookingPage() {
  const rooms = [
    {
      name: "Double Deluxe Room",
      rating: "⭐⭐⭐",
      discount: "30% Off",
      deal: "Early 2025 Deal",
      description: "One Double Bed, Free Breakfast, Free Cancellation",
      oldPrice: "₹2,999",
      newPrice: "₹2,099.30",
      taxes: "+ ₹252 taxes and charges",
      availability: "Only 1 room left at this price on our site",
      image: "/images/r6.png"
    },
    {
      name: "Luxury Suite",
      rating: "⭐⭐⭐⭐",
      discount: "25% Off",
      deal: "Limited Time Offer",
      description: "King Size Bed, Free Spa Access, City View",
      oldPrice: "₹5,499",
      newPrice: "₹4,124.25",
      taxes: "+ ₹412 taxes and charges",
      availability: "Only 2 rooms left!",
      image: "/images/r6.png"
    },
    {
      name: "Standard Room",
      rating: "⭐⭐",
      discount: "20% Off",
      deal: "Budget Friendly",
      description: "Queen Size Bed, Free WiFi, Air Conditioning",
      oldPrice: "₹1,999",
      newPrice: "₹1,599.20",
      taxes: "+ ₹192 taxes and charges",
      availability: "Hurry! Few rooms available",
      image: "/images/r6.png"
    },
    {
      name: "Executive Suite",
      rating: "⭐⭐⭐⭐⭐",
      discount: "40% Off",
      deal: "Premium Experience",
      description: "King Bed, Private Lounge, Ocean View",
      oldPrice: "₹9,999",
      newPrice: "₹5,999.40",
      taxes: "+ ₹800 taxes and charges",
      availability: "Exclusive Suite - Only 1 left",
      image: "/images/r6.png"
    }
  ];

  return (
    <div className="p-8 bg-gray-100 min-h-screen flex justify-center">
      <div className="w-full max-w-7xl flex gap-6">
        {/* Sidebar */}
        <div className="w-1/4 bg-white p-6 shadow-lg rounded-lg h-fit">
          <h2 className="text-lg font-semibold mb-4">Categories</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex justify-between"><span>Staff</span> <span>4.3</span></li>
            <li className="flex justify-between"><span>Facilities</span> <span>7.5</span></li>
            <li className="flex justify-between"><span>Cleanliness</span> <span>7.6</span></li>
            <li className="flex justify-between"><span>Comfort</span> <span>7.5</span></li>
            <li className="flex justify-between"><span>Value for Money</span> <span>7.3</span></li>
            <li className="flex justify-between"><span>Location</span> <span>7.6</span></li>
            <li className="flex justify-between"><span>Free WiFi</span> <span>4.5</span></li>
          </ul>
        </div>
        
        {/* Main Content */}
        <div className="w-3/4">
          {/* Header */}
          <div className="bg-white p-5 shadow-md flex justify-between items-center rounded-lg border border-gray-300">
            <h1 className="text-2xl font-semibold">Hotel XYZ Raipur at Place Name ⭐⭐⭐⭐</h1>
            <button className="bg-red-600 text-white px-6 py-2 rounded-md text-lg shadow-md hover:bg-red-700">Reserve Now</button>
          </div>
          
          {/* Room Listings */}
          <div className="mt-6 space-y-6">
            {rooms.map((room, index) => (
              <div key={index} className="bg-white p-5 rounded-lg shadow-lg flex border border-gray-300">
                <div className="relative w-48 h-48 rounded-lg overflow-hidden">
                  <Image
                    src={room.image}
                    alt="Hotel Room"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="ml-6 flex-1">
                  <h2 className="text-xl font-semibold">{room.name}</h2>
                  <div className="flex items-center text-red-500 text-lg">{room.rating}</div>
                  <div className="flex items-center mt-2">
                    <span className="bg-green-500 text-white px-3 py-1 rounded text-sm font-semibold">{room.discount}</span>
                    <span className="ml-2 bg-green-300 text-green-700 px-3 py-1 rounded text-sm font-semibold">{room.deal}</span>
                  </div>
                  <p className="text-gray-600 text-sm mt-2">{room.description}</p>
                  <p className="text-red-600 text-sm font-semibold mt-1">{room.availability}</p>
                  <div className="flex items-center mt-3">
                    <span className="text-gray-500 line-through mr-3 text-lg">{room.oldPrice}</span>
                    <span className="text-2xl font-bold text-gray-800">{room.newPrice}</span>
                  </div>
                  <p className="text-gray-500 text-sm mt-1">{room.taxes}</p>
                  <button className="mt-4 bg-purple-700 text-white px-5 py-2 rounded-md text-lg shadow-md hover:bg-purple-800">See Availability</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}