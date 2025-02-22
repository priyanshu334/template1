import Image from 'next/image';

const SpecialOffers = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold text-center text-gray-800">Special Offers</h2>
      <p className="text-gray-500 text-center mt-2">Exclusive deals just for you!</p>
      
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {[{ src: '/images/pic7.png', discount: '20%' }, { src: '/images/pic8.png', discount: '15%' }].map((offer, index) => (
          <div 
            key={index} 
            className="bg-white border rounded-xl shadow-lg overflow-hidden transition-all"
          >
            <Image 
              src={offer.src} 
              alt="Spa & Wellness" 
              width={500} 
              height={300} 
              className="w-full h-60 object-cover"
            />
            <div className="p-4 text-center">
              <span className="inline-block bg-purple-100 text-purple-900 text-sm font-semibold px-4 py-1 rounded-full">Spa & Wellness</span>
              <p className="text-gray-700 mt-2 font-medium">{offer.discount} off on this package</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialOffers;
