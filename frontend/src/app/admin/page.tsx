// filepath: e:\EasyStay\frontend\src\app\admin\page.tsx
'use client';
import React from 'react';

const AdminDashboardPage: React.FC = () => {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-gray-500 text-sm font-medium">Total Rooms</h3>
          <p className="text-3xl font-bold text-gray-800">120</p>
          <div className="mt-2 text-green-600 text-sm">+12% from last month</div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-gray-500 text-sm font-medium">Active Bookings</h3>
          <p className="text-3xl font-bold text-gray-800">78</p>
          <div className="mt-2 text-green-600 text-sm">+5% from last week</div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-gray-500 text-sm font-medium">Total Users</h3>
          <p className="text-3xl font-bold text-gray-800">35</p>
          <div className="mt-2 text-blue-600 text-sm">+3 new today</div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-gray-500 text-sm font-medium">Available Rooms</h3>
          <p className="text-3xl font-bold text-gray-800">42</p>
          <div className="mt-2 text-yellow-600 text-sm">-8% from yesterday</div>
        </div>
      </div>
      {/* You can add more dashboard-specific content here */}
    </div>
  );
};

export default AdminDashboardPage;