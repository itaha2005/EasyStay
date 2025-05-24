'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface Notification {
  id: number;
  title: string;
  message: string;
  timestamp: string;
  isRead: boolean;
}

const Notifications: React.FC = () => {
  const [notifications, setNotifications] = React.useState<Notification[]>([
    {
      id: 1,
      title: 'Booking Confirmed',
      message: 'Your booking for Deluxe Ocean View has been confirmed.',
      timestamp: '2025-05-24T10:00:00',
      isRead: false
    },
    {
      id: 2,
      title: 'Check-in Reminder',
      message: 'Your check-in is scheduled for tomorrow.',
      timestamp: '2025-05-23T15:30:00',
      isRead: true
    }
  ]);

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, isRead: true } : notif
    ));
  };

  return (
    <div className="py-6">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Notifications</h2>
        <div className="bg-white shadow rounded-lg divide-y divide-gray-200">
          {notifications.map((notification) => (
            <motion.div
              key={notification.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`p-4 ${notification.isRead ? 'bg-gray-50' : 'bg-white'}`}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-900">
                    {notification.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {notification.message}
                  </p>
                  <p className="mt-2 text-xs text-gray-400">
                    {new Date(notification.timestamp).toLocaleString()}
                  </p>
                </div>
                {!notification.isRead && (
                  <button
                    onClick={() => markAsRead(notification.id)}
                    className="ml-4 px-3 py-1 text-xs text-blue-600 hover:text-blue-800"
                  >
                    Mark as read
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications;