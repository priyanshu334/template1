'use client';

import { useState } from 'react';
import { Select, SelectItem } from '@/components/ui/Select';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

const rooms = [
  {
    type: 'Double Room',
    guests: 2,
    price: 2099.3,
    taxes: 252,
    discount: '30% Off',
    deal: 'Early 2025 Deal',
    breakfast: 370,
    variations: [2],
  },
  {
    type: 'Double Room',
    guests: 1,
    price: 2099.3,
    taxes: 252,
    discount: '30% Off',
    deal: 'Early 2025 Deal',
    breakfast: 370,
    variations: [1],
  },
  {
    type: 'Deluxe Double or Twin Room',
    guests: 2,
    price: 2099.3,
    taxes: 252,
    discount: '30% Off',
    deal: 'Early 2025 Deal',
    breakfast: 370,
    variations: [2],
  },
  {
    type: 'Deluxe Double or Twin Room',
    guests: 1,
    price: 2099.3,
    taxes: 252,
    discount: '30% Off',
    deal: 'Early 2025 Deal',
    breakfast: 370,
    variations: [1],
  },
];

export default function HotelBooking() {
  const [selectedRooms, setSelectedRooms] = useState<{ [key: string]: number }>({});

  const handleSelectChange = (roomType: string, value: string) => {
    setSelectedRooms((prev) => ({
      ...prev,
      [roomType]: Number(value) || 0,
    }));
  };

  return (
    <div className="container mx-auto p-4">
      <table className="w-full border-collapse border border-gray-300 text-sm">
        <thead>
          <tr className="bg-pink-200 text-gray-700">
            <th className="p-2 border">Room Type</th>
            <th className="p-2 border">Number of Guests</th>
            <th className="p-2 border">Today's Price</th>
            <th className="p-2 border">Your Choices</th>
            <th className="p-2 border">Select rooms</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map((room, index) => (
            <tr key={index} className="border">
              <td className="p-2 border font-semibold text-gray-700">{room.type}</td>
              <td className="p-2 border text-center">{'👤'.repeat(room.guests)}</td>
              <td className="p-2 border text-center">
                <span className="line-through text-gray-500">₹2,999</span>
                <br />
                <span className="text-lg font-bold text-red-600">₹{room.price}</span>
                <br />
                <span className="text-gray-500">+ ₹{room.taxes} taxes</span>
                <br />
                <span className="text-green-600 font-semibold">{room.discount}</span>
                <br />
                <span className="text-green-500">{room.deal}</span>
              </td>
              <td className="p-2 border text-center">
                ☕ Breakfast ₹{room.breakfast} (optional)
                <br />
                ✅ Free cancellation before 27 Feb 2025
                <br />
                💰 Pay the property before arrival
              </td>
              <td className="p-2 border text-center">
                <Select
               
                  onValueChange={(value) => handleSelectChange(`${room.type} - ${room.guests} Guests`, value)}
                >
                  {[...Array(11).keys()].map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {num === 0 ? '0' : `${num} (₹${num * room.price})`}
                    </SelectItem>
                  ))}
                </Select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 text-right">
        <Link href="/booking" passHref>
          <Button className="bg-red-600 text-white px-4 py-2 rounded text-lg font-semibold">
            I'll reserve
          </Button>
        </Link>
        <p className="text-gray-600 text-sm mt-1">• Confirmation is immediate</p>
      </div>
    </div>
  );
}
