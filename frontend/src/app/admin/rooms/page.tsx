'use client';
import React, { useState } from 'react';
import { FiEdit, FiTrash2, FiPlus } from 'react-icons/fi';

interface Room {
  id: number;
  number: string;
  type: string;
  price: number;
  status: string;
}

const ManageRooms = () => {
  const [rooms, setRooms] = useState<Room[]>([
    { id: 1, number: '101', type: 'Deluxe', price: 200, status: 'Available' },
    { id: 2, number: '102', type: 'Suite', price: 350, status: 'Occupied' },
  ]);
  const [editingRoom, setEditingRoom] = useState<Room | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = (id: number) => {
    if (window.confirm('Are you sure you want to delete this room?')) {
      setRooms(rooms.filter(room => room.id !== id));
    }
  };

  const handleEdit = (room: Room) => {
    setEditingRoom(room);
    setIsModalOpen(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingRoom) {
      setRooms(rooms.map(room => 
        room.id === editingRoom.id ? editingRoom : room
      ));
      setIsModalOpen(false);
      setEditingRoom(null);
    }
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Manage Rooms</h2>
        <button 
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700"
          onClick={() => setIsModalOpen(true)}
        >
          <FiPlus /> Add Room
        </button>
      </div>

      {/* Room List */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Room No</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {rooms.map(room => (
              <tr key={room.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">{room.number}</td>
                <td className="px-6 py-4">{room.type}</td>
                <td className="px-6 py-4">${room.price}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    room.status === 'Available' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {room.status}
                  </span>
                </td>
                <td className="px-6 py-4 space-x-2">
                  <button 
                    className="text-blue-600 hover:text-blue-800"
                    onClick={() => handleEdit(room)}
                  >
                    <span className="inline mr-1">
                      <FiEdit size={16} />
                    </span>
                    Edit
                  </button>
                  <button 
                    className="text-red-600 hover:text-red-800"
                    onClick={() => handleDelete(room.id)}
                  >
                    <span className="inline mr-1">
                      <FiTrash2 size={16} />
                    </span>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit/Add Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-96">
            <h3 className="text-xl font-bold mb-4">
              {editingRoom ? 'Edit Room' : 'Add New Room'}
            </h3>
            <form onSubmit={handleSave}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Room Number</label>
                  <input
                    type="text"
                    value={editingRoom?.number || ''}
                    onChange={e => setEditingRoom(prev => ({...prev!, number: e.target.value}))}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Type</label>
                  <select
                    value={editingRoom?.type || ''}
                    onChange={e => setEditingRoom(prev => ({...prev!, type: e.target.value}))}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="Deluxe">Deluxe</option>
                    <option value="Suite">Suite</option>
                    <option value="Standard">Standard</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Price</label>
                  <input
                    type="number"
                    value={editingRoom?.price || ''}
                    onChange={e => setEditingRoom(prev => ({...prev!, price: Number(e.target.value)}))}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Status</label>
                  <select
                    value={editingRoom?.status || ''}
                    onChange={e => setEditingRoom(prev => ({...prev!, status: e.target.value}))}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="Available">Available</option>
                    <option value="Occupied">Occupied</option>
                  </select>
                </div>
              </div>
              <div className="mt-6 flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => {
                    setIsModalOpen(false);
                    setEditingRoom(null);
                  }}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageRooms;