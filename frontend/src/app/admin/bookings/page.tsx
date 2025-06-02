'use client';
import React, { useState } from 'react';
import { FiCalendar, FiCheck, FiX } from 'react-icons/fi';

interface Booking {
  id: number;
  roomNumber: string;
  guestName: string;
  checkIn: string;
  checkOut: string;
  status: 'Confirmed' | 'Pending' | 'Cancelled';
}

const ManageBookings = () => {
  const [bookings, setBookings] = useState<Booking[]>([
    {
      id: 1,
      roomNumber: '101',
      guestName: 'John Doe',
      checkIn: '2025-06-10',
      checkOut: '2025-06-15',
      status: 'Confirmed'
    },
    {
      id: 2,
      roomNumber: '102',
      guestName: 'Jane Smith',
      checkIn: '2025-06-12',
      checkOut: '2025-06-14',
      status: 'Pending'
    }
  ]);

  const handleStatusChange = (id: number, newStatus: 'Confirmed' | 'Pending' | 'Cancelled') => {
    setBookings(bookings.map(booking => 
      booking.id === id ? {...booking, status: newStatus} : booking
    ));
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Confirmed': return 'bg-green-100 text-green-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Manage Bookings</h2>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Room</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Guest</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Check In</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Check Out</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {bookings.map(booking => (
              <tr key={booking.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <span className="mr-2">
                      <FiCalendar size={16} />
                    </span>
                    Room {booking.roomNumber}
                  </div>
                </td>
                <td className="px-6 py-4">{booking.guestName}</td>
                <td className="px-6 py-4">{booking.checkIn}</td>
                <td className="px-6 py-4">{booking.checkOut}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(booking.status)}`}>
                    {booking.status}
                  </span>
                </td>
                <td className="px-6 py-4 space-x-2">
                  {booking.status === 'Pending' && (
                    <>
                      <button
                        onClick={() => handleStatusChange(booking.id, 'Confirmed')}
                        className="text-green-600 hover:text-green-800 inline-flex items-center"
                      >
                        <span className="mr-1">
                          <FiCheck size={16} />
                        </span>
                        Confirm
                      </button>
                      <button
                        onClick={() => handleStatusChange(booking.id, 'Cancelled')}
                        className="text-red-600 hover:text-red-800 inline-flex items-center"
                      >
                        <span className="mr-1">
                          <FiX size={16} />
                        </span>
                        Cancel
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageBookings;