import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProfile } from '../utils/profileSlice';

const AdminDashboard = () => {
  const [newProfile, setNewProfile] = useState({ name: '', photo: '', description: '', address: '' });
  const dispatch = useDispatch();

  const handleAddProfile = () => {
    dispatch(addProfile({ ...newProfile, id: Date.now().toString() }));
    setNewProfile({ name: '', photo: '', description: '', address: '' });
  };

  return (
    <div className="admin-panel p-4">
      <h2 className="text-xl font-bold mb-4">Admin Panel</h2>
      <input
        type="text"
        placeholder="Name"
        value={newProfile.name}
        onChange={(e) => setNewProfile({ ...newProfile, name: e.target.value })}
        className="p-2 border rounded-md w-full mb-2"
      />
      <input
        type="text"
        placeholder="Photo URL"
        value={newProfile.photo}
        onChange={(e) => setNewProfile({ ...newProfile, photo: e.target.value })}
        className="p-2 border rounded-md w-full mb-2"
      />
      <textarea
        placeholder="Description"
        value={newProfile.description}
        onChange={(e) => setNewProfile({ ...newProfile, description: e.target.value })}
        className="p-2 border rounded-md w-full mb-2"
      ></textarea>
      <input
        type="text"
        placeholder="Address"
        value={newProfile.address}
        onChange={(e) => setNewProfile({ ...newProfile, address: e.target.value })}
        className="p-2 border rounded-md w-full mb-2"
      />
      <button
        onClick={handleAddProfile}
        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
      >
        Add Profile
      </button>
    </div>
  );
}

export default AdminDashboard;