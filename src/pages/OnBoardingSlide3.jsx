import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import gymBackground from '../assets/gym-background3.jpg'; // Update with your image

const OnBoardingSlide3 = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/login');
  };

  return (
    <Container>
      <PhoneFrame>
        <BackgroundImage>
          <img src={gymBackground} alt="Group exercise in gym" />
          <Overlay />
        </BackgroundImage>

        <Content>
          <Title>Have fun while staying fit</Title>
          <Subtitle>
            Don’t get bored working out alone when you can have fun working out with others.
          </Subtitle>
        </Content>

        <BottomSection>
          <Dots>
            <Dot />
            <Dot />
            <Dot active />
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
  height: 100%;
  padding-top: 25%;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 16px;
  text-align: left;
  font-family: 'Montserrat', sans-serif;
`;

const Subtitle = styled.p`
  font-size: 18px;
  line-height: 1.5;
  opacity: 0.9;
  text-align: left;
  max-width: 300px;
  font-family: 'Montserrat', sans-serif;
`;

const BottomSection = styled.div`
  position: absolute;
  bottom: 32px;
  left: 0;
  right: 0;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  z-index: 1;
`;

const Dots = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => props.active ? '#9FE870' : 'rgba(255,255,255,0.5)'};
`;

const NextButton = styled.button`
  width: 80%;
  padding: 16px;
  background-color: #A0E234;
  border: none;
  border-radius: 8px;
  color: white;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
  font-family: 'Montserrat', sans-serif;

  &:hover {
    background-color: #8FD860;
  }
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

export default OnBoardingSlide3; 