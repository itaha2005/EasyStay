"use client";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

interface NavbarProps {
  onMenuClick?: () => void;
  refs?: {
    aboutRef: React.RefObject<HTMLElement>;
    featuresRef: React.RefObject<HTMLElement>;
    roomsRef: React.RefObject<HTMLElement>;
    contactRef: React.RefObject<HTMLElement>;
  };
}

const Navbar: React.FC<NavbarProps> = ({ onMenuClick, refs }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  const scrollToSection = (ref: React.RefObject<HTMLElement> | undefined) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };
  const handleLogout = () => {
    // Add any logout logic here (e.g., clearing tokens, user state)
    navigate("/"); // Navigate to the home page
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {!isHomePage && (
              <button
                className="p-2 rounded-md md:hidden"
                onClick={onMenuClick}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            )}
            <Link to="/" className="flex-shrink-0 flex items-center ml-4">
              <span className="text-blue-600 text-2xl font-bold">EasyStay</span>
            </Link>
          </div>

          {isHomePage ? (
            <>
              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-8">
                <button
                  onClick={() => scrollToSection(refs?.aboutRef)}
                  className="text-gray-600 hover:text-blue-600"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection(refs?.featuresRef)}
                  className="text-gray-600 hover:text-blue-600"
                >
                  Features
                </button>
                <button
                  onClick={() => scrollToSection(refs?.roomsRef)}
                  className="text-gray-600 hover:text-blue-600"
                >
                  {/* Rooms
                </button>
                <button
                  onClick={() => scrollToSection(refs?.contactRef)}
                  className="text-gray-600 hover:text-blue-600"
                > */}
                  Contact
                </button>
                <Link
                  to="/login"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  Register
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="p-2 rounded-md text-gray-600 hover:text-blue-600"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </>
          ) : (
            <div className="flex items-center space-x-4">
              <button
                className="p-2 rounded-full hover:bg-gray-100"
                onClick={() => navigate("/notifications")}
              >
                <span className="text-xl">🔔</span>
              </button>
              <div className="relative">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-100"
                >
                  <span className="text-xl">👤</span>
                </button>
                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Profile
                    </Link>
                    <Link
                      to="/bookings"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      My Bookings
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Mobile Menu */}
        {isHomePage && isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection(refs?.aboutRef)}
                className="block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-600"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection(refs?.featuresRef)}
                className="block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-600"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection(refs?.roomsRef)}
                className="block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-600"
              >
                Rooms
              </button>
              <button
                onClick={() => scrollToSection(refs?.contactRef)}
                className="block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-600"
              >
                Contact
              </button>
              <Link
                to="/login"
                className="block px-3 py-2 text-blue-600 hover:text-blue-700"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="block px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Register
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
