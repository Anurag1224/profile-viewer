import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { currentProfileStatus } from '../utils/profileSlice';

const ProfileCard = ({user}) => {

  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handleViewDetails = () => {
    navigate(`/profile/'${user.id}`);
    dispatch(currentProfileStatus(user.id - 1));
  };

  return (
    <div className="profile-card bg-gray-200 shadow-lg rounded-lg p-4 pt-8 w-72 h-80 m-8 justify-items-center hover:scale-105 transition-all">
      <img src={user.photo} alt={user.name} className="w-24 object-cover rounded-full ring-8 ring-white shadow-lg shadow-slate-600" />
      <h3 className="text-lg font-semibold mt-3">{user.name}</h3>
      <p className="text-sm text-gray-600 text-center" >{user.description}</p>
      <button
        onClick={handleViewDetails}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 "
      >
        View Details
      </button>
    </div>

  );
}

export const UserProfile = ({user}) => {

  return (
    <div className="profile-card bg-gray-200 shadow-lg rounded-lg p-4 py-16 w-72 h-96 m-8 mt-0 justify-items-center">
      <img src={user.photo} alt={user.name} className="w-24 object-cover rounded-full ring-8 ring-white shadow-lg shadow-slate-600" />
      <h3 className="text-lg font-semibold mt-3">{user.name}</h3>
      <p className="text-sm text-gray-600 text-center" >{user.description}</p>
      <div className='text-lg font-semibold text-slate-500 mt-6 '>
            📍Address
            <p className="text-sm text-gray-600 text-center" >({user.address.lat}, {user.address.lng})</p>
            
        </div>      
      
      
    </div>

  );
}

export default ProfileCard;