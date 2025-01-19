import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProfile, editProfile, deleteProfile } from "../utils/profileSlice";

const AdminDashboard = () => {
  const [profileForm, setProfileForm] = useState({
    id: "",
    name: "",
    photo: "",
    description: "",
    address: { lat: "", lng: "" },
  });
  const [actionType, setActionType] = useState("add"); // "add", "edit", or "delete"
  const profiles = useSelector((state) => state.profiles.data);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (actionType === "add") {
      dispatch(addProfile({ ...profileForm, id: (profiles.length) }));
    } else if (actionType === "edit") {
      dispatch(editProfile(profileForm));
    } else if (actionType === "delete") {
      dispatch(deleteProfile(profileForm.id));
    }
    resetForm();
  };

  const resetForm = () => {
    setProfileForm({
      id: "",
      name: "",
      photo: "",
      description: "",
      address: { lat: "", lng: "" },
    });
    setActionType("add");
  };

  const handleSelectProfile = (id) => {
    const selectedProfile = profiles.find((profile) => profile.id === id);
    if (selectedProfile) {
      setProfileForm(selectedProfile);
      setActionType("edit");
    }
  };

  return (
    <div className="admin-panel p-4 max-w-4xl mx-auto">
      <h2 className="text-xl font-bold mb-4 text-center">Admin Panel</h2>

      <div className="action-buttons mb-4 flex justify-center gap-4">
        <button
          onClick={() => setActionType("add")}
          className={`px-4 py-2 rounded-md ${
            actionType === "add" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Add
        </button>
        <button
          onClick={() => setActionType("edit")}
          className={`px-4 py-2 rounded-md ${
            actionType === "edit" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Edit
        </button>
        <button
          onClick={() => setActionType("delete")}
          className={`px-4 py-2 rounded-md ${
            actionType === "delete" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Delete
        </button>
      </div>

      <div className="form-grid grid gap-4 grid-cols-1 sm:grid-cols-2">
        <input
          type="text"
          placeholder="ID (for edit/delete)"
          value={profileForm.id}
          onChange={(e) =>
            setProfileForm({ ...profileForm, id: e.target.value })
          }
          className="p-2 border rounded-md w-full"
          disabled={actionType === "add"}
        />

        <input
          type="text"
          placeholder="Name"
          value={profileForm.name}
          onChange={(e) =>
            setProfileForm({ ...profileForm, name: e.target.value })
          }
          className="p-2 border rounded-md w-full"
        />

        <input
          type="text"
          placeholder="Photo URL"
          value={profileForm.photo}
          onChange={(e) =>
            setProfileForm({ ...profileForm, photo: e.target.value })
          }
          className="p-2 border rounded-md w-full"
          disabled={actionType === "delete"}
        />

        <textarea
          placeholder="Description"
          value={profileForm.description}
          onChange={(e) =>
            setProfileForm({ ...profileForm, description: e.target.value })
          }
          className="p-2 border rounded-md w-full sm:col-span-2"
          disabled={actionType === "delete"}
        ></textarea>

        <input
          type="text"
          placeholder="Latitude"
          value={profileForm.address.lat}
          onChange={(e) =>
            setProfileForm({
              ...profileForm,
              address: { ...profileForm.address, lat: parseFloat(e.target.value )},
            })
          }
          className="p-2 border rounded-md w-full"
          disabled={actionType === "delete"}
        />

        <input
          type="text"
          placeholder="Longitude"
          value={profileForm.address.lng}
          onChange={(e) =>
            setProfileForm({
              ...profileForm,
              address: { ...profileForm.address, lng: parseFloat(e.target.value ) },
            })
          }
          className="p-2 border rounded-md w-full"
          disabled={actionType === "delete"}
        />
      </div>

      <div className="mt-4 flex justify-center">
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
        >
          {actionType === "add"
            ? "Add Profile"
            : actionType === "edit"
            ? "Update Profile"
            : "Delete Profile"}
        </button>
      </div>

      {actionType === "edit" && (
        <div className="profile-list mt-6">
          <h3 className="text-lg font-bold mb-2">Select a Profile to Edit:</h3>
          <select
            className="w-full p-2 border border-gray-300 rounded-lg"
            onChange={(e) => handleSelectProfile(e.target.value)}
          >
            <option value="" disabled selected>
              Choose a profile
            </option>
            {profiles.map((profile) => (
              <option key={profile.id} value={profile.id}>
                {profile.name}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
