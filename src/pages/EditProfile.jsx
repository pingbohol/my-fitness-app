import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, PenSquare } from 'lucide-react';
import DisplayPhoto from '../assets/DisplayPhoto.jpg';
import styled from 'styled-components';

const EditProfile = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black p-6">
      {/* Back Button */}
      <button onClick={() => navigate(-1)} className="text-white mb-6">
        <ArrowLeft size={24} />
      </button>

      {/* Profile Picture Section */}
      <div className="flex justify-center mb-6 relative">
        <ProfileImageContainer>
          <ProfileImage src={DisplayPhoto} alt="Profile" />
        </ProfileImageContainer>
        <button className="absolute bottom-0 right-0 bg-[#9FE870] p-1 rounded-full">
          <PenSquare size={16} className="text-black" />
        </button>
      </div>

      {/* Form Fields */}
      <div className="flex flex-col space-y-4 mb-6">
        <div className="bg-gray-600/50 p-4 rounded-xl">
          <p className="text-white">Name: Sophie Bohol</p>
        </div>

        <div className="bg-gray-600/50 p-4 rounded-xl">
          <p className="text-white">Email: sophiebohol69@gmail.com</p>
        </div>

        <div className="bg-gray-600/50 p-4 rounded-xl">
          <p className="text-white">+63</p>
        </div>

        <div className="bg-gray-600/50 p-4 rounded-xl">
          <p className="text-white">Gender</p>
        </div>

        <div className="bg-gray-600/50 p-4 rounded-xl">
          <p className="text-white">Date of birth</p>
        </div>

        <div className="bg-gray-600/50 p-4 rounded-xl">
          <p className="text-white">About me</p>
        </div>
      </div>

      {/* Interest Section */}
      <div className="mb-6">
        <p className="text-white mb-3">Interest</p>
        <div className="flex flex-wrap gap-3">
          <span className="bg-gray-600/50 px-4 py-2 rounded-full text-white">
            Fitness
          </span>
          <span className="bg-gray-600/50 px-4 py-2 rounded-full text-white">
            Make Friends
          </span>
        </div>
      </div>

      {/* Update Button */}
      <button className="w-full bg-[#9FE870] text-black py-4 px-4 rounded-xl text-lg font-medium">
        Update My Profile
      </button>
    </div>
  );
};

const ProfileImageContainer = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto;
  margin-bottom: 20px;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default EditProfile; 