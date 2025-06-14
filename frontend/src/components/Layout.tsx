'use client';

import React, { useState, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import HomePage from './home'; // Import your HomePage

const Layout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  // Add '/' to the noSidebarRoutes array
  const noSidebarRoutes = ['/', '/login', '/register'];

  // Define refs for home sections
  const aboutRef = useRef<HTMLElement>(null);
  const featuresRef = useRef<HTMLElement>(null);
  const roomsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  // Group refs for Navbar and HomePage
  const homeRefs = { aboutRef, featuresRef, roomsRef, contactRef };

  // Determine if the sidebar should be shown based on the current route
  const showSidebar = !noSidebarRoutes.includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar 
        onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} 
        refs={isHomePage ? homeRefs : undefined} 
      />
      {showSidebar && (
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      )}
      
      <main className={`flex-grow transition-all duration-300 pt-16 
        ${!isHomePage && isSidebarOpen ? 'md:ml-64' : ''}`}>
        <div className="max-w-7xl mx-auto p-4">
          {isHomePage ? (
            <HomePage refs={homeRefs} />
          ) : (
            <Outlet />
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
