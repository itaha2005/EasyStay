'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface Booking {
  id: number;
  roomName: string;
  checkIn: string;
  checkOut: string;
  status: 'active' | 'completed' | 'cancelled';
  guests: number;
}

const BookingsList: React.FC = () => {
  // Mock bookings data
  const bookings: Booking[] = [
    {
      id: 1,
      roomName: "Deluxe Ocean View",
      checkIn: "2025-06-01",
      checkOut: "2025-06-05",
      status: "active",
      guests: 2
    },
    // Add more mock bookings as needed
  ];

  const getStatusColor = (status: Booking['status']) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'completed':
        return 'bg-gray-100 text-gray-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
    }
  };

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">My Bookings</h2>
          <Link
            to="/booking/create"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            New Booking
          </Link>
        </div>

        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            {bookings.map((booking) => (
              <motion.li
                key={booking.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="hover:bg-gray-50"
              >
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <h3 className="text-lg font-medium text-blue-600">
                        {booking.roomName}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {new Date(booking.checkIn).toLocaleDateString()} - {new Date(booking.checkOut).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(booking.status)}`}>
                        {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                      </span>
                      <Link
                        to={`/booking/edit/${booking.id}`}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        Edit
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BookingsList;