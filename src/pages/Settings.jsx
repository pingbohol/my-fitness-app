import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Settings = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add logout logic here
  };

  const handleDeleteAccount = () => {
    // Add delete account logic here
  };

  return (
    <div className="min-h-screen bg-black p-6">
      {/* Back button */}
      <button 
        onClick={() => navigate(-1)} 
        className="text-white mb-8"
      >
        <ArrowLeft size={24} />
      </button>

      {/* Settings options */}
      <div className="flex flex-col space-y-6 mb-12">
        <button className="w-full bg-gray-600/50 text-white py-4 px-6 rounded-xl text-lg font-normal text-left">
          Notifications
        </button>
        
        <button className="w-full bg-gray-600/50 text-white py-4 px-6 rounded-xl text-lg font-normal text-left">
          Put yourself first in search
        </button>
        
        <button className="w-full bg-gray-600/50 text-white py-4 px-6 rounded-xl text-lg font-normal text-left">
          Set my location & distance
        </button>
      </div>

      {/* Action buttons */}
      <div className="flex flex-col space-y-4 mt-auto">
        <button 
          onClick={handleLogout}
          className="w-full bg-[#9FE870] text-black py-4 px-4 rounded-xl text-lg font-medium text-center"
        >
          Logout
        </button>
        
        <button 
          onClick={handleDeleteAccount}
          className="w-full bg-[#9FE870] text-black py-4 px-4 rounded-xl text-lg font-medium text-center"
        >
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default Settings;
