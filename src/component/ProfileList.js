import React, { useState } from 'react'
import ProfileCard from './ProfileCard';
import { useSelector } from 'react-redux';


const ProfileList = () => {
  
  const profiles = useSelector((store) => store.profiles.data || []);
  const [searchQuery, setSearchQuery] = useState('');
 

  const filteredProfiles = profiles.filter((profile) =>
    profile.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (!profiles) {
    return <div>No profile found</div>;
  }


  return (
    <div className="profile-list-container flex flex-col">
      <div className='flex flex-wrap justify-center mt-8 fixed w-[100%] h-1/6 -top-2'>
      <input
        type="text"
        placeholder="Search profiles..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-bar px-6 border rounded-full w-1/3 mb-4 shadow-lg h-12 focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
      </div>
      <div className="flex flex-wrap justify-evenly bg-gradient-to-br from-blue-200 via-indigo-200 to-purple-200 mt-16 ">
        {filteredProfiles.map((profile) => (
          <ProfileCard key={profile.id} user={profile} />
        ))}
      </div>
    </div>
  );

};

export default ProfileList;