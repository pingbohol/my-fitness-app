import React from 'react';
import styled from 'styled-components';
import { IoArrowBack } from 'react-icons/io5';
import { BsDroplet } from 'react-icons/bs';

const WorkoutProgress = () => {
  const players = [
    { id: 1, name: 'Cloe Dens', workouts: 8, kcal: 460, avatar: '/path-to-avatar1.jpg', color: '#95FF00' },
    { id: 2, name: 'Jhom Avocado', workouts: 5, kcal: 240, avatar: '/path-to-avatar2.jpg', color: '#8A6FFF' },
    { id: 3, name: 'Nikki Smith', workouts: 8, kcal: 500, avatar: '/path-to-avatar3.jpg', color: '#95FF00' },
  ];

  return (
    <Container>
      <Header>
        <BackButton>
          <IoArrowBack size={24} color="white" />
        </BackButton>
        <Title>Playing</Title>
      </Header>

      <ProgressSection>
        <CircularProgress>
          <svg width="240" height="240" viewBox="0 0 240 240">
            {/* Background circles */}
            <circle cx="120" cy="120" r="110" fill="none" stroke="#1A1A1A" strokeWidth="12" />
            
            {/* Progress circles */}
            <circle 
              cx="120" 
              cy="120" 
              r="110" 
              fill="none" 
              stroke="#95FF00" 
              strokeWidth="12" 
              strokeDasharray="691" 
              strokeDashoffset="172.75"
              transform="rotate(-90 120 120)"
            />
            <circle 
              cx="120" 
              cy="120" 
              r="90" 
              fill="none" 
              stroke="#8A6FFF" 
              strokeWidth="12" 
              strokeDasharray="565.48" 
              strokeDashoffset="424.11"
              transform="rotate(-90 120 120)"
            />
          </svg>
          <ProgressContent>
            <span>Today</span>
            <KcalCount>2100</KcalCount>
            <span>Kcal</span>
          </ProgressContent>
        </CircularProgress>
      </ProgressSection>

      <PlayersList>
        {players.map((player) => (
          <PlayerCard key={player.id} color={player.color}>
            <PlayerInfo>
              <PlayerAvatar src={player.avatar} alt={player.name} />
              <PlayerDetails>
                <PlayerName>{player.name}</PlayerName>
                <WorkoutCount>{player.workouts} workouts</WorkoutCount>
              </PlayerDetails>
            </PlayerInfo>
            <KcalInfo>
              <BsDroplet size={16} />
              <span>{player.kcal} Kcal</span>
            </KcalInfo>
          </PlayerCard>
        ))}
      </PlayersList>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #000000;
  max-width: 440px;
  margin: 0 auto;
  position: relative;
  font-family: 'Montserrat', sans-serif;
`;

const Header = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
`;

const Title = styled.h1`
  color: white;
  font-size: 24px;
  font-weight: 600;
  margin-left: 24px;
`;

const ProgressSection = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0 40px;
`;

const CircularProgress = styled.div`
  position: relative;
  width: 240px;
  height: 240px;
`;

const ProgressContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  text-align: center;

  span {
    font-size: 14px;
    opacity: 0.8;
  }
`;

const KcalCount = styled.div`
  font-size: 36px;
  font-weight: 600;
  margin: 8px 0;
`;

const PlayersList = styled.div`
  padding: 0 20px;
`;

const PlayerCard = styled.div`
  background-color: ${props => props.color};
  border-radius: 16px;
  padding: 16px;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PlayerInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const PlayerAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  object-fit: cover;
`;

const PlayerDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const PlayerName = styled.span`
  color: black;
  font-weight: 600;
  font-size: 16px;
`;

const WorkoutCount = styled.span`
  color: rgba(0, 0, 0, 0.7);
  font-size: 14px;
`;

const KcalInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: black;
  font-weight: 500;
`;

export default WorkoutProgress;
