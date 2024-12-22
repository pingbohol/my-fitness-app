import React from 'react';
import styled from 'styled-components';
import { Search, ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ProfileCircle1 from '../assets/ProfileCircle1.jpg';
import ProfileCircle2 from '../assets/ProfileCircle2.jpg';
import ProfileCircle3 from '../assets/ProfileCircle3.jpg';
import ProfileCircle4 from '../assets/ProfileCircle4.jpg';
import ProfileCircle5 from '../assets/ProfileCircle5.jpg';
import ProfileCircle6 from '../assets/ProfileCircle6.jpg';
import CenterProfile from '../assets/CenterProfile.jpg';

const FindFriends = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Header>
        <BackButton onClick={() => navigate(-1)}>
          <ChevronLeft color="white" size={24} />
        </BackButton>
        <Title>Find Friends</Title>
      </Header>
      
      <SearchCircleContainer>
        <OrbitalCircle color="#9FE870" duration="3s" size="280px" />
        <OrbitalCircle color="#4A90E2" duration="2s" size="200px" direction="reverse" />
        
        <ProfileCircle 
          style={{ top: '10%', left: '40%' }} 
          image={ProfileCircle1}
        />
        <ProfileCircle 
          style={{ top: '30%', left: '70%' }} 
          image={ProfileCircle2}
        />
        <ProfileCircle 
          style={{ top: '50%', left: '60%' }} 
          image={ProfileCircle3}
        />
        <ProfileCircle 
          style={{ top: '70%', left: '40%' }} 
          image={ProfileCircle4}
        />
        <ProfileCircle 
          style={{ top: '50%', left: '20%' }} 
          image={ProfileCircle5}
        />
        <ProfileCircle 
          style={{ top: '30%', left: '30%' }} 
          image={ProfileCircle6}
        />
        
        <CenterProfileCircle image={CenterProfile} />
      </SearchCircleContainer>

      <SearchingText>Buddy Searching....</SearchingText>
    </Container>
  );
};

const Container = styled.div`
  padding: 0;
  background: #000000;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  position: relative;
`;

const BackButton = styled.button`
  position: absolute;
  left: 16px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.8;
  }
`;

const Title = styled.h1`
  color: white;
  margin: 0 auto;
  font-size: 20px;
`;

const SearchCircleContainer = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  margin: 40px 0;
`;

const ProfileCircle = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${props => props.image ? `url(${props.image})` : '#333'};
  background-size: cover;
  background-position: center top;
  border: 2px solid #9FE870;
  box-shadow: 0 0 10px rgba(159, 232, 112, 0.3);
  animation: pulse 2s ease-in-out infinite;
  overflow: hidden;
  
  @keyframes pulse {
    0% {
      box-shadow: 0 0 10px rgba(159, 232, 112, 0.3);
    }
    50% {
      box-shadow: 0 0 20px rgba(159, 232, 112, 0.6);
    }
    100% {
      box-shadow: 0 0 10px rgba(159, 232, 112, 0.3);
    }
  }
`;

const CenterProfileCircle = styled(ProfileCircle)`
  width: 80px;
  height: 80px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid #4A90E2;
  animation: centerPulse 2s ease-in-out infinite;
  z-index: 2;

  @keyframes centerPulse {
    0% {
      box-shadow: 0 0 15px rgba(74, 144, 226, 0.3);
    }
    50% {
      box-shadow: 0 0 30px rgba(74, 144, 226, 0.6);
    }
    100% {
      box-shadow: 0 0 15px rgba(74, 144, 226, 0.3);
    }
  }
`;

const OrbitalCircle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  width: ${props => props.size || '220px'};
  height: ${props => props.size * 0.8 || '176px'};

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 1px solid ${props => props.color || '#9FE870'};
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      ${props => props.color || '#9FE870'}80 50%,
      transparent 100%
    );
    transform-origin: left;
    animation: scan ${props => props.duration || '4s'} linear infinite;
    animation-direction: ${props => props.direction || 'normal'};
    filter: blur(5px);
  }

  @keyframes scan {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const SearchingText = styled.div`
  color: white;
  font-size: 18px;
  margin-top: 20px;
`;

export default FindFriends;
