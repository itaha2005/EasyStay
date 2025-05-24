'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface UserProfile {
  fullName: string;
  email: string;
  phone: string;
  avatar: string;
  preferences: {
    notifications: boolean;
    newsletter: boolean;
  }
}

const Profile: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile>({
    fullName: "John Doe",
    email: "john@example.com",
    phone: "+1234567890",
    avatar: "https://ui-avatars.com/api/?name=John+Doe",
    preferences: {
      notifications: true,
      newsletter: false
    }
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(false);
    // Add profile update logic here
  };

  return (
    <div className="py-6">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white shadow rounded-lg"
        >
          {/* Profile Header */}
          <div className="px-4 py-5 sm:px-6 flex items-center justify-between">
            <div className="flex items-center">
              <img
                src={profile.avatar}
                alt={profile.fullName}
                className="h-16 w-16 rounded-full"
              />
              <div className="ml-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  {profile.fullName}
                </h2>
                <p className="text-sm text-gray-500">{profile.email}</p>
              </div>
            </div>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              {isEditing ? 'Cancel' : 'Edit Profile'}
            </button>
          </div>

          {/* Profile Form */}
          <div className="border-t border-gray-200">
            <form onSubmit={handleSubmit} className="px-4 py-5 sm:px-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  disabled={!isEditing}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 disabled:bg-gray-50"
                  value={profile.fullName}
                  onChange={(e) => setProfile({ ...profile, fullName: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  disabled={!isEditing}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 disabled:bg-gray-50"
                  value={profile.phone}
                  onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  disabled={!isEditing}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 disabled:bg-gray-50"
                  value={profile.email}
                  onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                />
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900">Preferences</h3>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="notifications"
                    disabled={!isEditing}
                    checked={profile.preferences.notifications}
                    onChange={(e) => setProfile({
                      ...profile,
                      preferences: { ...profile.preferences, notifications: e.target.checked }
                    })}
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                  />
                  <label htmlFor="notifications" className="ml-2 text-sm text-gray-700">
                    Receive booking notifications
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="newsletter"
                    disabled={!isEditing}
                    checked={profile.preferences.newsletter}
                    onChange={(e) => setProfile({
                      ...profile,
                      preferences: { ...profile.preferences, newsletter: e.target.checked }
                    })}
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                  />
                  <label htmlFor="newsletter" className="ml-2 text-sm text-gray-700">
                    Subscribe to newsletter
                  </label>
                </div>
              </div>

              {isEditing && (
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    Save Changes
                  </button>
                </div>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;