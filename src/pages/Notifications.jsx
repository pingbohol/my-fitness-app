import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Bell } from 'lucide-react';

const Notifications = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <button onClick={() => navigate(-1)} className="text-white">
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-white text-xl font-medium">Notifications</h1>
        </div>
        <Bell size={20} className="text-[#9FE870]" />
      </div>

      {/* Filter Button */}
      <div className="flex mb-6">
        <button className="bg-[#9FE870] px-4 py-2 rounded-full text-black">
          Reminders
        </button>
      </div>

      {/* Notifications List */}
      <div className="flex flex-col space-y-4">
        {/* Today Section */}
        <div>
          <h2 className="text-[#9FE870] text-sm mb-3">Today</h2>
          <div className="flex flex-col space-y-3">
            <NotificationItem 
              icon="🏋️"
              title="New Workout Is Available"
              time="June 10 - 10:00 AM"
            />
            <NotificationItem 
              icon="💧"
              title="Don't Forget To Drink Water"
              time="June 10 - 8:00 AM"
            />
          </div>
        </div>

        {/* Yesterday Section */}
        <div className="mt-6">
          <h2 className="text-[#9FE870] text-sm mb-3">Yesterday</h2>
          <div className="flex flex-col space-y-3">
            <NotificationItem 
              icon="💪"
              title="Upper Body Workout Completed!"
              time="June 09 - 6:00 PM"
            />
            <NotificationItem 
              icon="⏰"
              title="Remember Your Exercise Session"
              time="June 09 - 3:00 PM"
            />
            <NotificationItem 
              icon="📝"
              title="New Article & Tip Posted!"
              time="June 09 - 11:00 AM"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Notification Item Component
const NotificationItem = ({ icon, title, time }) => (
  <div className="flex items-center gap-3 bg-gray-600/50 p-4 rounded-xl">
    <div className="w-8 h-8 bg-[#9FE870] rounded-full flex items-center justify-center">
      <span className="text-lg">{icon}</span>
    </div>
    <div className="flex-1">
      <h3 className="text-white text-sm font-medium">{title}</h3>
      <p className="text-gray-400 text-xs">{time}</p>
    </div>
  </div>
);

export default Notifications;
