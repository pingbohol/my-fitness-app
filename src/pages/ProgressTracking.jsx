import React from 'react';
import styled from 'styled-components';
import NavBar from '../components/common/NavBar';

const ProgressTracking = () => {
  return (
    <MobileFrame>
      <Container>
        <Header>
          <HeaderText>
            <Title>Progress Tracking</Title>
            <Subtitle>Monitor your fitness journey</Subtitle>
          </HeaderText>
          <HeaderIcons>
            <IconButton>⚙️</IconButton>
            <IconButton></IconButton>
            <IconButton>👤</IconButton>
          </HeaderIcons>
        </Header>
        
        {/* Add your progress tracking content here */}
        
      </Container>
      <NavBar />
    </MobileFrame>
  );
};

const MobileFrame = styled.div`
  max-width: 375px;
  margin: 0 auto;
  min-height: 100vh;
  position: relative;
  background-color: #000000;
`;

const Container = styled.div`
  background-color: #000000;
  min-height: 100vh;
  color: white;
  padding: 14px;
  padding-bottom: 70px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 24px;
`;

const HeaderText = styled.div``;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 4px;
`;

const Subtitle = styled.p`
  color: #888;
  font-size: 14px;
`;

const HeaderIcons = styled.div`
  display: flex;
  gap: 12px;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

export default ProgressTracking; 