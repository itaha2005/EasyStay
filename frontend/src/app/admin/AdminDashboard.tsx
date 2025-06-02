'use client';
import React, { useState } from 'react';
import { FiHome, FiUsers, FiBook, FiLayout, FiPlusSquare, FiLogOut } from 'react-icons/fi';
import Link from 'next/link';

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('AdminDashboard');

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <FiHome size={20} />, path: '/AdminDashboard' },
    { id: 'rooms', label: 'Manage Rooms', icon: <FiLayout size={20} />, path: '/admin/rooms' },
    // { id: 'add-room', label: 'Add Room', icon: <FiPlusSquare size={20} />, path: '/admin/add-room' },
    { id: 'users', label: 'Manage Users', icon: <FiUsers size={20} />, path: '/admin/users' },
    { id: 'bookings', label: 'Bookings', icon: <FiBook size={20} />, path: '/admin/bookings' },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg flex flex-col">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800">Admin Panel</h1>
        </div>
        <nav className="flex flex-col flex-1">
          {sidebarItems.map((item) => (
            <Link 
              href={item.path}
              key={item.id}
              className={`flex items-center px-6 py-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200
                ${activeTab === item.id ? 'bg-blue-50 text-blue-600 border-r-4 border-blue-600' : ''}`}
              onClick={() => setActiveTab(item.id)}
            >
              <span className="mr-3">{item.icon}</span>
              {item.label}
            </Link>
          ))}
          <div className="mt-auto">
            <Link 
              href="/logout"
              className="flex items-center px-6 py-4 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200"
            >
              <span className="mr-3"><FiLogOut size={20} /></span>
              Logout
            </Link>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
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
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;