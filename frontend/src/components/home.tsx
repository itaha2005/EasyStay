'use client';
import React from 'react';
import Image from 'next/image';
import { Link, useLocation, useNavigate } from 'react-router-dom';

interface HomeRefs {
  aboutRef: React.RefObject<HTMLElement>;
  featuresRef: React.RefObject<HTMLElement>;
  roomsRef: React.RefObject<HTMLElement>;
  contactRef: React.RefObject<HTMLElement>;
}

const HomePage: React.FC<{ refs?: HomeRefs }> = ({ refs }) => (
  <div>
    {/* Welcome/Hero Section */}
    <section className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-background.jpg"
          alt="Luxury Hotel Welcome"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Welcome to <span className="text-blue-400">Easy Stay</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Experience luxury and comfort at its finest
        </p>
        <button 
          onClick={() => refs?.aboutRef.current?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
        >
          Explore More
        </button>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          className="w-6 h-6 text-white"
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>

    {/* Existing About Section */}
    <section 
      ref={refs?.aboutRef} 
      id="about" 
      className="py-[5rem] relative h-[100vh]"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/hotel-exterior.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '500px'
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">About Us</h2>
        <p className="text-center text-gray-200 mb-4 max-w-2xl mx-auto">
          We are dedicated to providing you with the best hospitality experience.
          With over 15 years of excellence in hospitality, we've served more than
          100,000 happy guests from around the world.
        </p>
        <p className="text-center text-gray-200 max-w-2xl mx-auto">
          Our team is committed to ensuring your stay is comfortable and enjoyable.
        </p>

        {/* Benchmark Comparison */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/90 p-6 rounded-lg text-center">
            <h3 className="text-xl font-bold text-blue-600 mb-2">Our Hotel</h3>
            <ul className="text-gray-800">
              <li>⭐ 4.8/5 Rating</li>
              <li>💲 Best Value</li>
              <li>🏆 Award Winning</li>
            </ul>
          </div>
          <div className="bg-white/80 p-6 rounded-lg text-center">
            <h3 className="text-xl font-bold text-gray-600 mb-2">Industry Average</h3>
            <ul className="text-gray-800">
              <li>⭐ 4.2/5 Rating</li>
              <li>💲💲 Higher Prices</li>
              <li>📊 Standard Service</li>
            </ul>
          </div>
          <div className="bg-white/80 p-6 rounded-lg text-center">
            <h3 className="text-xl font-bold text-gray-600 mb-2">Competitors</h3>
            <ul className="text-gray-800">
              <li>⭐ 4.0/5 Rating</li>
              <li>💲💲💲 Premium Prices</li>
              <li>📈 Variable Quality</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section ref={refs?.featuresRef} id="features" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="text-blue-600 text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section ref={refs?.roomsRef} id="rooms" className="py-16">
      {/* <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Rooms</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={room.image}
                  alt={room.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{room.name}</h3>
                <p className="text-gray-600 mb-4">{room.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">${room.price}</span>
                  <Link to="/login" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                    Book Now
                  </Link>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {room.amenities.map((amenity, i) => (
                    <span key={i} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </section>

    <section ref={refs?.contactRef} id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <form className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              rows={4}
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  </div>
);

const features = [
  {
    icon: "🏠",
    title: "Comfortable Rooms",
    description: "Luxurious and comfortable rooms designed for your relaxation"
  },
  {
    icon: "🔒",
    title: "Secure Booking",
    description: "Safe and secure booking process with instant confirmation"
  },
  {
    icon: "💫",
    title: "24/7 Service",
    description: "Round the clock customer service to assist you anytime"
  }
];

const rooms = [
  {
    name: "Luxury Suite",
    description: "Spacious suite with panoramic city views and premium amenities",
    price: 299,
    image: "/rooms/luxury-suite.jpg",
    amenities: ["King Bed", "City View", "Mini Bar", "Spa Bath"]
  },
  {
    name: "Deluxe Room",
    description: "Comfortable room with modern furnishings and garden view",
    price: 199,
    image: "/rooms/deluxe-room.jpg",
    amenities: ["Queen Bed", "Garden View", "Work Desk", "Rain Shower"]
  },
  {
    name: "Family Suite",
    description: "Perfect for families with separate living area and kitchenette",
    price: 399,
    image: "/rooms/family-suite.jpg",
    amenities: ["2 Bedrooms", "Kitchenette", "Living Area", "Children's Play Area"]
  }
];

export default HomePage;