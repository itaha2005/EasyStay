// filepath: e:\EasyStay\frontend\src\app\admin\AdminDashboard.tsx
'use client';
import React from 'react';
import AdminSidebar from '../../components/admin/AdminSidebar';

const AdminDashboard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSidebar />
      {/* Wrap children in a main tag with margin-left to account for the sidebar width */}
      <main className="flex-1 ml-64 p-8 overflow-auto">
        {children}
      </main>
    </div>
  );
};

export default AdminDashboard;