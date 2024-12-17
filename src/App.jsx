import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import Layout from './components/layout/Layout';
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

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/onboarding" replace />} />
          <Route path="/onboarding" element={<OnBoardingSlide />} />
          <Route path="/onboarding2" element={<OnBoardingSlide2 />} />
          <Route path="/onboarding3" element={<OnBoardingSlide3 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Layout><Homepage /></Layout>} />
          <Route path="/find-friends" element={<Layout><FindFriends /></Layout>} />
          <Route path="/play" element={<Layout><Play /></Layout>} />
          <Route path="/chats" element={<Layout><Chats /></Layout>} />
          <Route path="/settings" element={<Layout><Settings /></Layout>} />
          <Route path="/notifications" element={<Layout><Notifications /></Layout>} />
          <Route path="/edit-profile" element={<Layout><EditProfile /></Layout>} />
          <Route path="/complete-profile" element={<CompleteProfile />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
