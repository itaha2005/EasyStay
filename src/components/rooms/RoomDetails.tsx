'use client';
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const RoomDetails: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock room data - replace with actual API call
  const room = {
    id: 1,
    name: "Deluxe Ocean View",
    type: "Deluxe",
    price: 299,
    description: "Luxurious room with stunning ocean views and modern amenities.",
    images: [
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    ],
    amenities: [
      "King Size Bed",
      "Ocean View",
      "Free Wi-Fi",
      "Mini Bar",
      "Room Service",
      "Air Conditioning"
    ],
    capacity: 2,
    rating: 4.8,
    reviews: 24
  };

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative h-96">
              <img
                src={room.images[0]}
                alt={room.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-8">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">{room.name}</h1>
                  <p className="mt-2 text-gray-500">{room.type}</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-blue-600">${room.price}</p>
                  <p className="text-gray-500">per night</p>
                </div>
              </div>

              <p className="mt-4 text-gray-600">{room.description}</p>

              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-900">Amenities</h3>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  {room.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center text-gray-600">
                      <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {amenity}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <button
                  onClick={() => navigate(`/booking/create?roomId=${id}`)}
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RoomDetails;