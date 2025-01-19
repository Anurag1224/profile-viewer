import React from 'react';
import { useSelector } from 'react-redux';
import MapComponent from './MapComponent';
import { UserProfile } from './ProfileCard';

const ProfileDetails = () => {

  const profile = useSelector((state) => state.profiles.data);
  const currentProfileStatus = useSelector((state) => state.profiles.currentProfile);

  if (currentProfileStatus == null) {
    return (
      
    <div>
      <div>!! No profile found !!</div>
      Go Back And Please Select The Profile First
    </div>
  );
  }

  return (
    <div className='flex flex-wrap'>
      <div>
        <UserProfile user={profile[currentProfileStatus]}/>
        
      </div>
      <div className='w-[700px]'>
      <MapComponent address = {profile[currentProfileStatus].address}/>
    </div>
    </div>
  );
}

export default ProfileDetails;