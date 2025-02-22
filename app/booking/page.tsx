import AddToYourStay from "@/components/AddToYourStay";
import BookingConfirmation from "@/components/BookingConfirmation";
import BookingDetails from "@/components/BookingDetails";
import BookingForm from "@/components/BookingForm";
import HotelCard from "@/components/HotelCard";
import PaymentDetails from "@/components/PaymentDetails";
import PriceSummary from "@/components/PriceSummary";
import SpecialRequests from "@/components/SpecialRequests";
import { CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-gray-100 p-20">
      <div className="max-w-8xl w-full grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div className="md:col-span-2 space-y-6">
          <BookingForm />
          
          {/* Info Box */}
          <div className="border rounded-xl p-6 bg-white shadow-lg">
            <h2 className="text-xl font-semibold">Good to know:</h2>
            <div className="flex items-start gap-3 mt-3 text-gray-700">
              <CheckCircle className="text-green-500 w-6 h-6 mt-1" />
              <p>
                <span className="font-medium">Stay flexible:</span> You can cancel for free before <strong>27 February 2025</strong>, so lock in this great price today.
              </p>
            </div>
          </div>

          {/* Room Details */}
          <div className="bg-white p-6 rounded-xl shadow-lg space-y-4">
            <h2 className="text-2xl font-bold">Double Room</h2>
            <p className="text-green-600 font-medium">✔ Free cancellation before 27 February 2025</p>
            <div className="text-gray-700">👥 Guests: <strong>2 Adults</strong></div>
            <div className="text-gray-700">🚭 No Smoking</div>

            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium">Guest Full Name</label>
                <input 
                  type="text" 
                  placeholder="First Name, Last Name" 
                  className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" 
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Guest Email (Optional)</label>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" 
                />
                <p className="text-xs text-gray-500 mt-1">Emails are only used for sending reservation information. No commercial messages - <strong>guaranteed</strong>.</p>
              </div>
            </form>
          </div>
          
          <AddToYourStay />
          <SpecialRequests />
          <BookingConfirmation />
        </div>

        {/* Right Section */}
        <div className="space-y-6">
          <HotelCard />
          <BookingDetails />
          <PriceSummary />
          <PaymentDetails />
        </div>
      </div>
    </main>
  );
}