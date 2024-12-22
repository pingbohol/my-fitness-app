import React from 'react';
import styled from 'styled-components';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ProfileCircle1 from '../assets/ProfileCircle1.jpg';
import ProfileCircle2 from '../assets/ProfileCircle2.jpg';
import ProfileCircle3 from '../assets/ProfileCircle3.jpg';

const Play = () => {
  const navigate = useNavigate();

  const workouts = [
    { name: 'Cloe Dens', workouts: 8, kcal: 460, color: '#A0E234', image: ProfileCircle1 },
    { name: 'Jham Avocado', workouts: 5, kcal: 240, color: '#9370DB', image: ProfileCircle2 },
    { name: 'Nikki Smith', workouts: 3, kcal: 500, color: '#A0E234', image: ProfileCircle3 }
  ];

  return (
    <Container>
      <Header>
        <BackButton onClick={() => navigate(-1)}>
          <ArrowLeft color="white" size={24} />
        </BackButton>
        <Title>Playing</Title>
      </Header>

      <Content>
        <CalorieCircle>
          <CircleProgress>
            <InnerCircle>
              <CircleText>
                <span>Today</span>
                <KcalNumber>2100</KcalNumber>
                <span>Kcal</span>
              </CircleText>
            </InnerCircle>
          </CircleProgress>
        </CalorieCircle>

        <WorkoutList>
          {workouts.map((workout, index) => (
            <WorkoutCard key={index} color={workout.color}>
              <WorkoutAvatar image={workout.image} />
              <WorkoutInfo>
                <WorkoutName>{workout.name}</WorkoutName>
                <WorkoutStats>{workout.workouts} workouts</WorkoutStats>
              </WorkoutInfo>
              <WorkoutKcal>
                <KcalIcon>💧</KcalIcon>
                {workout.kcal} Kcal
              </WorkoutKcal>
            </WorkoutCard>
          ))}
        </WorkoutList>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  background: #000000;
  min-height: 100vh;
  max-width: 360px;
  margin: 0 auto;
  padding: 16px;
  color: white;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 60px;
  padding-top: 8px;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 500;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const CalorieCircle = styled.div`
  position: relative;
  width: 240px;
  height: 240px;
  margin: 20px auto;
`;

const CircleProgress = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: conic-gradient(
      #A0E234 0% 60%,
      #9370DB 60% 75%,
      #333 75% 100%
    );
  }
`;

const InnerCircle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 80%;
  background: #000;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CircleText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: white;
  
  span {
    opacity: 0.7;
  }
`;

const KcalNumber = styled.div`
  font-size: 32px;
  font-weight: bold;
`;

const WorkoutList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const WorkoutCard = styled.div`
  background: ${props => props.color};
  border-radius: 16px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
  height: 60px;
`;

const WorkoutAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${props => props.image ? `url(${props.image}) center/cover` : 'rgba(255, 255, 255, 0.2)'};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const WorkoutInfo = styled.div`
  flex: 1;
`;

const WorkoutName = styled.div`
  font-weight: 500;
  margin-bottom: 4px;
`;

const WorkoutStats = styled.div`
  font-size: 14px;
  opacity: 0.8;
`;

const WorkoutKcal = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const KcalIcon = styled.span`
  font-size: 16px;
`;

export default Play;
