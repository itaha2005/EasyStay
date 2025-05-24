'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface DashboardCard {
  title: string;
  value: string | number;
  icon: string;
  color: string;
}

const Dashboard: React.FC = () => {
  const dashboardCards: DashboardCard[] = [
    { title: 'Active Bookings', value: 2, icon: '📅', color: 'bg-blue-500' },
    { title: 'Total Spent', value: '$450', icon: '💰', color: 'bg-green-500' },
    { title: 'Upcoming Stays', value: 1, icon: '🏠', color: 'bg-purple-500' },
    { title: 'Reviews Given', value: 3, icon: '⭐', color: 'bg-yellow-500' },
  ];

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="py-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {dashboardCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`${card.color} rounded-lg shadow-lg overflow-hidden`}
              >
                <div className="px-4 py-5 sm:p-6 text-white">
                  <div className="flex items-center">
                    <div className="text-3xl mr-3">{card.icon}</div>
                    <div>
                      <div className="text-sm font-medium text-white opacity-75">
                        {card.title}
                      </div>
                      <div className="mt-1 text-3xl font-semibold">
                        {card.value}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Recent Bookings Section */}
          <div className="mt-8">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Bookings</h2>
            <div className="bg-white shadow overflow-hidden sm:rounded-md">
              <ul className="divide-y divide-gray-200">
                {[1, 2, 3].map((booking) => (
                  <li key={booking}>
                    <div className="px-4 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium text-blue-600 truncate">
                          Deluxe Room #{booking}
                        </div>
                        <div className="ml-2 flex-shrink-0 flex">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Active
                          </span>
                        </div>
                      </div>
                      <div className="mt-2 sm:flex sm:justify-between">
                        <div className="sm:flex">
                          <div className="text-sm text-gray-500">
                            Check-in: May {booking + 10}, 2025
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;