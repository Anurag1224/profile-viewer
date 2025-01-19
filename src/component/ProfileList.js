import React, { useState } from 'react'
import ProfileCard from './ProfileCard';
import { useSelector } from 'react-redux';


const ProfileList = () => {
  
  const profiles = useSelector((store) => store.profiles.data);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProfiles = profiles.filter((profile) =>
    profile.login.toUpperCase().includes(searchQuery.toUpperCase())
  );

  console.log(filteredProfiles);

  if (!profiles) {
    return <div>No profile found</div>;
  }

  return (
    <div className="profile-list-container">
      <div className='flex flex-wrap justify-center mt-8 relative w-[100%] '>
      <input
        type="text"
        placeholder="Search profiles..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-bar px-6 border rounded-full w-1/3 mb-4 shadow-lg h-12 focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
      </div>
      <div className="flex flex-wrap justify-evenly bg-gradient-to-br from-blue-200 via-indigo-200 to-purple-200">
        {filteredProfiles.map((profile) => (
          <ProfileCard key={profile.id} user={profile} />
        ))}
      </div>
    </div>
  );

};

export default ProfileList;