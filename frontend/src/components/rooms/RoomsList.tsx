'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface Room {
  id: number;
  name: string;
  type: string;
  price: number;
  image: string;
  description: string;
}

const RoomsList: React.FC = () => {
  // Mock data - replace with your API call
  const rooms: Room[] = [
    {
      id: 1,
      name: "Deluxe Ocean View",
      type: "Deluxe",
      price: 299,
      image: "https://example.com/room1.jpg",
      description: "Luxurious room with ocean view"
    },
    // Add more rooms...
  ];

  return (
    <div className="py-6">
      <h1 className="text-3xl font-bold mb-8">Available Rooms</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rooms.map((room) => (
          <motion.div
            key={room.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img 
              src={room.image} 
              alt={room.name} 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{room.name}</h3>
              <p className="text-gray-600">{room.type}</p>
              <p className="text-2xl font-bold text-blue-600 mt-2">${room.price}</p>
              <Link
                to={`/booking/create?roomId=${room.id}`}
                className="mt-4 block w-full text-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
              >
                Book Now
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RoomsList;