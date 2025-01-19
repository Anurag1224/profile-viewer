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
    <div className="profile-list-container flex flex-col bg-gradient-to-br from-blue-400 via-indigo-300 to-purple-200 min-h-screen">
      <div className="sticky top-0 left-0 z-20 bg-gradient-to-lr from-blue-400 via-indigo-300 shadow-lg w-screen py-4 flex justify-center">
        <input
          type="text"
          placeholder="Search profiles..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-bar px-6 border rounded-full w-[250px] md:w-[600px] shadow-lg h-12 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-300"
        />
      </div>
      <div className="flex flex-wrap justify-evenly px-4 py-8">
        {filteredProfiles.length > 0 ? (
          filteredProfiles.map((profile) => (
            <ProfileCard key={profile.id} user={profile} />
          ))
        ) : (
          <div className="text-center text-gray-600 text-lg mt-16">
            No profiles found. Try searching for a different name.
          </div>
        )}
      </div>
    </div>
  );
  

};

export default ProfileList;