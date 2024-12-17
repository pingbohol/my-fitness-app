import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, PenSquare, Settings, Bell, User } from 'lucide-react';
import styled from 'styled-components';

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Header>
        <HeaderTop>
          <Title>
            <span>Hi,</span>
            <span>Sophie</span>
          </Title>
          <HeaderIcons>
            <IconButton>
              <Link to="/settings">
                <Settings size={20} color="#9FE870" />
              </Link>
            </IconButton>
            <IconButton>
              <Link to="/notifications">
                <Bell size={20} color="#FFD700" />
              </Link>
            </IconButton>
            <IconButton>
              <Link to="/edit-profile">
                <User size={20} color="#9370DB" />
              </Link>
            </IconButton>
          </HeaderIcons>
        </HeaderTop>
        <Subtitle>It's time to challenge your limits.</Subtitle>
      </Header>

      <QuickActions />

      <Section>
        <SectionTitle>Recommendations</SectionTitle>
        <WorkoutGrid>
          <WorkoutCard>
            <WorkoutImage src="/images/workouts/squat-exercise.jpg" alt="Squat Exercise" />
            <StarIcon>⭐</StarIcon>
            <PlayButton>▶</PlayButton>
            <WorkoutInfo>
              <WorkoutName>Squat Exercise</WorkoutName>
              <WorkoutStats>
                <Stat>⏱ 12 Minutes</Stat>
                <Stat>🔥 120 Kcal</Stat>
              </WorkoutStats>
            </WorkoutInfo>
          </WorkoutCard>
          <WorkoutCard>
            <WorkoutImage src="/images/workouts/full-body-stretching.jpg" alt="Full Body Stretching" />
            <StarIcon>⭐</StarIcon>
            <PlayButton>▶</PlayButton>
            <WorkoutInfo>
              <WorkoutName>Full Body Stretching</WorkoutName>
              <WorkoutStats>
                <Stat>⏱ 12 Minutes</Stat>
                <Stat> 120 Kcal</Stat>
              </WorkoutStats>
            </WorkoutInfo>
          </WorkoutCard>
        </WorkoutGrid>
      </Section>

      <Section>
        <WeeklyChallenge>
          <ChallengeContent>
            <ChallengeTitle>Weekly Challenge</ChallengeTitle>
            <ChallengeText>Plank With Hip Twist</ChallengeText>
          </ChallengeContent>
          <ChallengeImage src="/images/workouts/plank-challenge.jpg" alt="Plank Challenge" />
        </WeeklyChallenge>
      </Section>

      <Section>
        <SectionTitle>Articles & Tips</SectionTitle>
        <ArticleGrid>
          <ArticleCard>
            <ArticleImage src="/images/articles/supplement-guide.jpg" alt="Supplement Guide" />
            <StarIcon>⭐</StarIcon>
            <ArticleTitle>Supplement Guide...</ArticleTitle>
          </ArticleCard>
          <ArticleCard>
            <ArticleImage src="/images/articles/daily-routines.jpg" alt="Daily Routines" />
            <ArticleTitle>15 Quick & Effective Daily Routines...</ArticleTitle>
          </ArticleCard>
        </ArticleGrid>
      </Section>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  color: white;
  background: #000000;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`;

const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
`;

const Title = styled.div`
  & > span {
    display: block;
    font-size: 36px;
    font-weight: 600;
    line-height: 1.2;
  }
`;

const HeaderIcons = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 8px;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
`;

const QuickActions = () => {
  return (
    <QuickActionsContainer>
      <ActionItem>
        <ActionIcon>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path d="M4 10v4M20 10v4M6 12h12M2 12h2M20 12h2" 
              stroke="#9FE870" 
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </ActionIcon>
        <ActionText>Workout</ActionText>
      </ActionItem>
      <ActionItem>
        <ActionIcon>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <rect x="6" y="4" width="12" height="16" rx="2" 
              stroke="#fff" 
              strokeWidth="1.5"
            />
            <path d="M9 8h6M9 12h6M9 16h6" 
              stroke="#fff" 
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </ActionIcon>
        <ActionText>Progress{'\n'}Tracking</ActionText>
      </ActionItem>
      <ActionItem>
        <ActionIcon>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path d="M12 6c-1.5 0-3 1-3 3s1.5 3 3 3 3-1 3-3-1.5-3-3-3z" 
              stroke="#fff" 
              strokeWidth="1.5"
            />
            <path d="M12 10v4" 
              stroke="#fff" 
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </ActionIcon>
        <ActionText>Nutrition</ActionText>
      </ActionItem>
      <ActionItem>
        <ActionIcon>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="8" r="4" 
              stroke="#fff" 
              strokeWidth="1.5"
            />
            <path d="M4 20v-2a8 8 0 0116 0v2" 
              stroke="#fff" 
              strokeWidth="1.5"
            />
          </svg>
        </ActionIcon>
        <ActionText>Community</ActionText>
      </ActionItem>
    </QuickActionsContainer>
  );
};

const QuickActionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px 0;
  padding: 0 20px;
`;

const ActionItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  position: relative;
  
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    right: -20px;
    top: 50%;
    transform: translateY(-50%);
    width: 1px;
    height: 24px;
    background: rgba(255, 255, 255, 0.1);
  }
`;

const ActionIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ActionText = styled.span`
  color: #9FE870;
  font-size: 13px;
  text-align: center;
  white-space: pre-line;
`;

const Section = styled.div`
  margin-bottom: 30px;
`;

const SectionTitle = styled.h2`
  color: #9FE870;
  font-size: 26px;
  margin-bottom: 20px;
  font-weight: 600;
`;

const WorkoutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-bottom: 24px;
`;

const WorkoutCard = styled.div`
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  background: #1A1A1A;
`;

const WorkoutImage = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
`;

const StarIcon = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
  font-size: 16px;
`;

const PlayButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #9FE870;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-size: 14px;
`;

const WorkoutInfo = styled.div`
  padding: 12px;
`;

const WorkoutName = styled.h3`
  font-size: 14px;
  margin-bottom: 8px;
`;

const WorkoutStats = styled.div`
  display: flex;
  gap: 12px;
`;

const Stat = styled.span`
  color: #666;
  font-size: 12px;
`;

const WeeklyChallenge = styled.div`
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  background: #1A1A1A;
  height: 120px;
  margin-bottom: 24px;
`;

const ChallengeContent = styled.div`
  position: absolute;
  padding: 16px;
  z-index: 1;
`;

const ChallengeTitle = styled.h3`
  color: #9FE870;
  font-size: 24px;
  margin-bottom: 8px;
`;

const ChallengeText = styled.p`
  font-size: 14px;
`;

const ChallengeImage = styled.img`
  position: absolute;
  right: 0;
  top: 0;
  width: 50%;
  height: 100%;
  object-fit: cover;
`;

const ArticleGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
`;

const ArticleCard = styled.div`
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  background: #1A1A1A;
`;

const ArticleImage = styled.img`
  width: 100%;
  height: 100px;
  object-fit: cover;
`;

const ArticleTitle = styled.h3`
  font-size: 12px;
  padding: 12px;
`;

const Subtitle = styled.p`
  color: #666;
  font-size: 14px;
  line-height: 1.4;
  max-width: 200px;
`;

export default Homepage;

