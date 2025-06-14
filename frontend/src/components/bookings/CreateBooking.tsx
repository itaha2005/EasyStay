'use client';
import React, { useState, useEffect } from 'react'; // Added useEffect
import { useNavigate, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';

// Assuming Booking interface is similar to the one in BookingsList
interface Booking {
  id: number;
  roomName: string;
  checkIn: string;
  checkOut: string;
  status: 'active' | 'completed' | 'cancelled';
  guests: number;
}

const dummyRoomNames = [
  "Deluxe Suite",
  "Double Suite",
  "Single Room",
  "Ocean View Balcony",
  "Penthouse Apartment"
];

const CreateBooking: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const roomIdFromParams = searchParams.get('roomId'); // Renamed to avoid conflict

  const [bookingData, setBookingData] = useState({
    roomName: dummyRoomNames[0], // Default to the first dummy room name
    checkIn: '',
    checkOut: '',
    guests: 1,
    specialRequests: ''
  });

  // Effect to set roomName if roomId is in URL params
  useEffect(() => {
    if (roomIdFromParams) {
      // You might want to fetch actual room details here in a real app
      // For now, we'll just use the ID as part of the name if it exists
      setBookingData(prevData => ({
        ...prevData,
        roomName: `Room ID: ${roomIdFromParams}`
      }));
    }
  }, [roomIdFromParams]);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create a new booking object
    const newBooking: Booking = {
      id: Date.now(), // Simple unique ID for session-only booking
      roomName: bookingData.roomName, // Use selected room name
      checkIn: bookingData.checkIn,
      checkOut: bookingData.checkOut,
      guests: bookingData.guests,
      status: 'active', // Default status for new bookings
      // specialRequests: bookingData.specialRequests, // If you add this to Booking interface
    };

    // Navigate to bookings list and pass the new booking in state
    navigate('/bookings', { state: { newBooking } });
  };

  return (
    <div className="py-6">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-lg p-6"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Book Your Stay {roomIdFromParams ? `for Room ${roomIdFromParams}` : ''}</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {!roomIdFromParams && ( // Only show dropdown if roomId is not in params
              <div>
                <label htmlFor="roomName" className="block text-sm font-medium text-gray-700">
                  Room Type
                </label>
                <select
                  id="roomName"
                  name="roomName"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  value={bookingData.roomName}
                  onChange={(e) => setBookingData({ ...bookingData, roomName: e.target.value })}
                >
                  {dummyRoomNames.map(name => (
                    <option key={name} value={name}>{name}</option>
                  ))}
                </select>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Check-in Date
                </label>
                <input
                  type="date"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  value={bookingData.checkIn}
                  onChange={(e) => setBookingData({ ...bookingData, checkIn: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Check-out Date
                </label>
                <input
                  type="date"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  value={bookingData.checkOut}
                  onChange={(e) => setBookingData({ ...bookingData, checkOut: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Number of Guests
              </label>
              <select
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                value={bookingData.guests}
                onChange={(e) => setBookingData({ ...bookingData, guests: Number(e.target.value) })}
              >
                {[1, 2, 3, 4].map(num => (
                  <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Special Requests
              </label>
              <textarea
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                rows={4}
                value={bookingData.specialRequests}
                onChange={(e) => setBookingData({ ...bookingData, specialRequests: e.target.value })}
              />
            </div>

            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Confirm Booking
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default CreateBooking;