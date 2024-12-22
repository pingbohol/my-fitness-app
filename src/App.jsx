import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import OnBoardingSlide from './pages/OnBoardingSlide';
import OnBoardingSlide2 from './pages/OnBoardingSlide2';
import OnBoardingSlide3 from './pages/OnBoardingSlide3';
import Homepage from './pages/Homepage';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import FindFriends from './pages/FindFriends';
import Play from './pages/Play';
import Chats from './pages/Chats';
import Settings from './pages/Settings';
import Notifications from './pages/Notifications';
import EditProfile from './pages/EditProfile';
import CompleteProfile from './pages/CompleteProfile';
import PhoneFrame from './components/common/PhoneFrame';
import PersonalChat from './pages/PersonalChat';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <PhoneFrame>
          <Routes>
            <Route path="/" element={<Navigate to="/onboarding" replace />} />
            <Route path="/onboarding" element={<OnBoardingSlide />} />
            <Route path="/onboarding2" element={<OnBoardingSlide2 />} />
            <Route path="/onboarding3" element={<OnBoardingSlide3 />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<Homepage />} />
            <Route path="/find-friends" element={<FindFriends />} />
            <Route path="/play" element={<Play />} />
            <Route path="/chats" element={<Chats />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/edit-profile" element={<EditProfile />} />
            <Route path="/complete-profile" element={<CompleteProfile />} />
            <Route path="/chat/:userId" element={<PersonalChat />} />
          </Routes>
        </PhoneFrame>
      </Router>
    </>
  );
};

export default App;
