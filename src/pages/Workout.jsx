import React from 'react';
import styled from 'styled-components';
import NavBar from '../components/common/NavBar';

const Workout = () => {
  return (
    <MobileFrame>
      <Container>
        <Header>
          <HeaderText>
            <Title>Workout</Title>
            <Subtitle>Choose your workout plan</Subtitle>
          </HeaderText>
          <HeaderIcons>
            <IconButton>⚙️</IconButton>
            <IconButton>🔔</IconButton>
            <IconButton>👤</IconButton>
          </HeaderIcons>
        </Header>

        {/* Add your workout content here */}
        <ComingSoon>
          Workout Page Coming Soon...
        </ComingSoon>
        
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

const ComingSoon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  color: #9FE870;
  font-size: 18px;
`;

export default Workout; 