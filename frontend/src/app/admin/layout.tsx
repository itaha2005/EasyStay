'use client';
import React from 'react';
import AdminDashboard from './AdminDashboard';


export default function AdminSectionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AdminDashboard>
      {children}
    </AdminDashboard>
  );
}