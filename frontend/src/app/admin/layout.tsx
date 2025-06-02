'use client';
import React from 'react';


export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 ml-64">
        {children}
      </div>
    </div>
  );
}