import React from 'react';
import styled from 'styled-components';
import { User, Mail, Phone, Users, Calendar, FileText } from 'lucide-react';
import '@fontsource/montserrat/400.css'
import '@fontsource/montserrat/600.css'
import '@fontsource/montserrat/700.css'
import backgroundImage from '../assets/gym-background5.png';

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f7;
`;

const PhoneFrame = styled.div`
  width: 380px;
  height: 800px;
  background: #000;
  border-radius: 45px;
  position: relative;
  overflow: hidden;
  box-shadow: 
    0 0 0 12px #1a1a1a,
    0 0 0 14px #000,
    0 20px 40px rgba(0, 0, 0, 0.4);
`;

const Content = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  padding: 24px;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 16px;
  z-index: 1;
`;

const BackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.85),  // Darker overlay at top
    rgba(0, 0, 0, 0.75)   // Slightly lighter at bottom
  ),
  url(${backgroundImage});
  background-size: cover;
  background-position: center;
  z-index: 0;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 16px;
  font-family: 'Montserrat', sans-serif;
  margin-top: 20px;
`;

const InputWrapper = styled.div`
  width: 100%;
  background: rgba(26, 26, 26, 0.8);  // Semi-transparent dark background
  border-radius: 12px;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  backdrop-filter: blur(10px);
  z-index: 2;
`;

const Input = styled.input`
  background: none;
  border: none;
  color: white;
  font-size: 14px;
  width: 100%;
  font-family: 'Montserrat', sans-serif;

  &::placeholder {
    color: rgba(255, 255, 255, 0.8);
  }

  &:focus {
    outline: none;
  }
`;

const InterestSection = styled.div`
  margin-top: 12px;
`;

const InterestLabel = styled.p`
  font-size: 14px;
  color: white;
  margin-bottom: 12px;
  font-family: 'Montserrat', sans-serif;
`;

const InterestButtons = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const InterestButton = styled.button`
  padding: 10px 20px;
  border-radius: 24px;
  border: none;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  background-color: ${props => props.active ? '#3B82F6' : 'rgba(255, 255, 255, 0.15)'};
  color: white;
`;

const CompleteButton = styled.button`
  width: 100%;
  padding: 16px;
  background-color: #9FE870;
  border: none;
  border-radius: 12px;
  color: white;
  font-weight: 600;
  font-size: 16px;
  margin-top: auto;
  margin-bottom: 24px;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
`;

const CompleteProfile = () => {
  return (
    <Container>
      <PhoneFrame>
        <BackgroundOverlay />
        <Content>
          <Title>Complete your profile</Title>
          
          <InputWrapper>
            <User size={20} color="white" />
            <Input type="text" placeholder="Name" />
          </InputWrapper>

          <InputWrapper>
            <Mail size={20} color="white" />
            <Input type="email" placeholder="Email" />
          </InputWrapper>

          <InputWrapper>
            <Phone size={20} color="white" />
            <Input type="tel" placeholder="+63" />
          </InputWrapper>

          <InputWrapper>
            <Users size={20} color="white" />
            <Input type="text" placeholder="Gender" />
          </InputWrapper>

          <InputWrapper>
            <Calendar size={20} color="white" />
            <Input type="text" placeholder="Date of birth" />
          </InputWrapper>

          <InputWrapper>
            <FileText size={20} color="white" />
            <Input type="text" placeholder="About me" />
          </InputWrapper>

          <InterestSection>
            <InterestLabel>Interest</InterestLabel>
            <InterestButtons>
              <InterestButton>Fitness</InterestButton>
              <InterestButton active>Make Friends</InterestButton>
              <InterestButton>Cardio</InterestButton>
            </InterestButtons>
          </InterestSection>

          <CompleteButton>Complete My Profile</CompleteButton>
        </Content>
      </PhoneFrame>
    </Container>
  );
};

export default CompleteProfile;
