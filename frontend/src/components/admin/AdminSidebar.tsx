'use client';
import React from 'react';
import { FiHome, FiUsers, FiBook, FiLayout, FiLogOut } from 'react-icons/fi';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const AdminSidebar: React.FC = () => {
  const currentPath = usePathname();
  
  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <FiHome size={20} />, path: '/admin' },
    { id: 'rooms', label: 'Manage Rooms', icon: <FiLayout size={20} />, path: '/admin/rooms' },
    { id: 'users', label: 'Manage Users', icon: <FiUsers size={20} />, path: '/admin/users' },
    { id: 'bookings', label: 'Bookings', icon: <FiBook size={20} />, path: '/admin/bookings' },
  ];

  return (
    <div className="w-64 bg-white shadow-lg flex flex-col h-screen fixed">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800">Admin Panel</h1>
      </div>
      <nav className="flex flex-col flex-1">
        {sidebarItems.map((item) => (
          <Link 
            href={item.path}
            key={item.id}
            className={`flex items-center px-6 py-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200
              ${currentPath === item.path ? 'bg-blue-50 text-blue-600 border-r-4 border-blue-600' : ''}`}
          >
            <span className="mr-3">{item.icon}</span>
            {item.label}
          </Link>
        ))}
        <div className="mt-auto">
          <Link 
            href="/"
            className="flex items-center px-6 py-4 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200"
          >
            <span className="mr-3"><FiLogOut size={20} /></span>
            Logout
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default AdminSidebar;