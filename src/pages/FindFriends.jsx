import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { IoArrowBack } from 'react-icons/io5';

const FindFriends = () => {
  const profiles = [
    { id: 1, image: '/path-to-profile1.jpg', position: { top: '20%', left: '20%' } },
    { id: 2, image: '/path-to-profile2.jpg', position: { top: '10%', left: '50%' } },
    { id: 3, image: '/path-to-profile3.jpg', position: { top: '30%', right: '20%' } },
    { id: 4, image: '/path-to-profile4.jpg', position: { bottom: '30%', left: '15%' } },
    { id: 5, image: '/path-to-profile5.jpg', position: { bottom: '20%', right: '25%' } },
    { id: 6, image: '/path-to-profile6.jpg', position: { bottom: '40%', left: '45%' } },
  ];

  return (
    <Container>
      <Header>
        <BackButton>
          <IoArrowBack size={24} color="white" />
        </BackButton>
        <Title>Find Friends</Title>
      </Header>

      <SearchArea>
        <CircleContainer>
          <OuterCircle />
          <InnerCircle />
          {profiles.map((profile) => (
            <ProfileBubble key={profile.id} position={profile.position}>
              <ProfileImage src={profile.image} alt="Profile" />
            </ProfileBubble>
          ))}
          <CenterProfile>
            <CenterProfileImage src="/path-to-main-profile.jpg" alt="Main Profile" />
          </CenterProfile>
        </CircleContainer>
      </SearchArea>

      <SearchingText>Buddy Searching....</SearchingText>
    </Container>
  );
};

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 440px;
  margin: 0 auto;
  position: relative;
`;

const Header = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  position: relative;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  padding: 8px;
  position: absolute;
  left: 16px;
  cursor: pointer;
`;

const Title = styled.h1`
  color: white;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  width: 100%;
`;

const SearchArea = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const CircleContainer = styled.div`
  width: 300px;
  height: 300px;
  position: relative;
`;

const OuterCircle = styled.div`
  width: 100%;
  height: 100%;
  border: 2px solid rgba(149, 255, 0, 0.3);
  border-radius: 50%;
  position: absolute;
  animation: ${rotate} 10s linear infinite;
`;

const InnerCircle = styled.div`
  width: 70%;
  height: 70%;
  border: 2px solid rgba(0, 119, 255, 0.3);
  border-radius: 50%;
  position: absolute;
  top: 15%;
  left: 15%;
  animation: ${rotate} 8s linear infinite reverse;
`;

const ProfileBubble = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  border: 2px solid rgba(255, 255, 255, 0.2);
  top: ${props => props.position.top};
  left: ${props => props.position.left};
  right: ${props => props.position.right};
  bottom: ${props => props.position.bottom};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CenterProfile = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  border: 2px solid rgba(255, 255, 255, 0.2);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  z-index: 2;
`;

const CenterProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const SearchingText = styled.p`
  color: white;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 40px;
`;

export default FindFriends;
