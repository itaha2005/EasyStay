'use client';
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate
import { motion } from 'framer-motion';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();
  const navigate = useNavigate(); // Initialize useNavigate

  const menuItems = [
    // { title: 'Home', path: '/', icon: '🏠' },
    { title: 'Dashboard', path: '/dashboard', icon: '📊' },
    { title: 'All Rooms', path: '/rooms', icon: '🛏️' },
    { title: 'My Bookings', path: '/bookings', icon: '📅' },
    { title: 'Profile', path: '/profile', icon: '👤' },
    { title: 'Notifications', path: '/notifications', icon: '🔔' },
  ];

  const handleLogout = () => {
    // Add any logout logic here (e.g., clearing tokens, user state)
    navigate('/'); // Navigate to the home page
    onClose(); // Close the sidebar if it's open on mobile
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-20" 
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: isOpen ? 0 : -300 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`fixed left-0 top-0 h-full w-64 bg-white shadow-lg z-30 
                   transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
                   md:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        <div className="p-4 space-y-6 mt-[2rem]">
          <div className="flex items-center justify-between md:hidden">
            <h2 className="text-xl font-bold text-blue-600">Menu</h2>
            <button onClick={onClose} className="p-2 rounded-lg hover:bg-gray-100">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="space-y-1 mt-4">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`flex items-center space-x-3 p-3 rounded-lg transition-colors
                          ${location.pathname === item.path 
                            ? 'bg-blue-50 text-blue-600' 
                            : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'}`}
                onClick={onClose} // Close sidebar on navigation for mobile
              >
                <span className="text-xl">{item.icon}</span>
                <span>{item.title}</span>
              </Link>
            ))}
            
            <button
              onClick={handleLogout} // Updated onClick handler
              className="flex items-center space-x-3 p-3 rounded-lg w-full text-red-600 hover:bg-red-50"
            >
              <span className="text-xl">🚪</span>
              <span>Logout</span>
            </button>
          </nav>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;