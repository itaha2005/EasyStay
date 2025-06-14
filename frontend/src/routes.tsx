'use client';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/home';
import Login from './components/auth/login/page';
import Register from './components/auth/register/page';
import Dashboard from './components/Dashboard/Dashboard';
import RoomsList from './components/rooms/RoomsList';
import RoomDetails from './components/rooms/RoomDetails';
import CreateBooking from './components/bookings/CreateBooking';
import BookingsList from './components/bookings/BookingsList';
import Profile from './components/profile/Profile';
import Notifications from './components/notifications/Notifications';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="rooms" element={<RoomsList />} />
        <Route path="rooms/:id" element={<RoomDetails />} />
        <Route path="booking/create" element={<CreateBooking />} />
        <Route path="bookings" element={<BookingsList />} />
        <Route path="profile" element={<Profile />} />
        <Route path="notifications" element={<Notifications />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;