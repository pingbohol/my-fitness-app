import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import gymBackground from '../assets/gym-background1.jpg';
import '@fontsource/montserrat/400.css' // Regular
import '@fontsource/montserrat/700.css' // Bold
import '@fontsource/montserrat/600.css' // SemiBold

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

const OnBoardingSlide = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/onboarding2');
  };

  return (
    <Container>
      <PhoneFrame>
        <BackgroundImage>
          <img src={gymBackground} alt="Person working out with dumbbells" />
          <Overlay />
        </BackgroundImage>

        <Content>
          <Title>Do you find working out alone boring?</Title>
          <Subtitle>
            Meet up with new people who are passionate about keeping fit too.
          </Subtitle>
        </Content>

        <BottomSection>
          <Dots>
            <Dot active />
            <Dot />
            <Dot />
          </Dots>
          <NextButton onClick={handleNext}>NEXT</NextButton>
        </BottomSection>
      </PhoneFrame>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: white;
  overflow: hidden;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.9));
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  padding: 24px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 120px;
  height: 100%;
  font-family: 'Montserrat', sans-serif;
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
  text-align: left;
  line-height: 1.2;
  font-family: 'Montserrat', sans-serif;
`;

const Subtitle = styled.p`
  font-size: 18px;
  font-weight: regular;
  line-height: 1.4;
  opacity: 0.9;
  text-align: left;
  margin-bottom: 40px;
  max-width: 90%;
  font-family: 'Montserrat', sans-serif;
`;

const BottomSection = styled.div`
  position: absolute;
  bottom: 60px;
  left: 0;
  right: 0;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  z-index: 1;
`;

const Dots = styled.div`
  display: flex;
  gap: 8px;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => props.active ? '#9FE870' : 'rgba(255,255,255,0.3)'};
`;

const NextButton = styled.button`
  width: 80%;
  padding: 16px;
  background-color: #A0E234;
  border: none;
  border-radius: 12px;
  color: white;
  font-weight: 600;
  font-size: 20px;
  font-family: 'Montserrat', sans-serif;
  cursor: pointer;
  
  &:hover {
    background-color: #8FD860;
  }
`;

export default OnBoardingSlide;