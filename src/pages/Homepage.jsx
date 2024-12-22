import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Settings, Bell, User, Home, Search, Play, MessageSquare, Star } from 'lucide-react';
import styled from 'styled-components';
import plankImage from '../assets/PlankWithHipTwist.jpg';

const stretchingVideoUrl = '/videos/FullBodyStretching.mp4';
const squatVideoUrl = '/videos/SquatExercise.mp4';

const Homepage = () => {
  const navigate = useNavigate();
  const stretchingVideoRef = useRef(null);
  const squatVideoRef = useRef(null);
  
  const toggleStretchingVideo = () => {
    if (stretchingVideoRef.current.paused) {
      stretchingVideoRef.current.play();
    } else {
      stretchingVideoRef.current.pause();
    }
  };

  const toggleSquatVideo = () => {
    if (squatVideoRef.current.paused) {
      squatVideoRef.current.play();
    } else {
      squatVideoRef.current.pause();
    }
  };

  const handleVideoClick = (videoUrl) => {
    navigate(`/play?video=${encodeURIComponent(videoUrl)}`);
  };

  return (
    <Container>
      <Header>
        <HeaderTop>
          <Title>
            <span>Hi,</span>
            <span>Sophie</span>
          </Title>
          <HeaderIcons>
            <IconButton onClick={() => navigate('/settings')}>
              <Settings size={20} color="#9FE870" />
            </IconButton>
            <IconButton onClick={() => navigate('/notifications')}>
              <Bell size={20} color="#FFD700" />
            </IconButton>
            <IconButton onClick={() => navigate('/edit-profile')}>
              <User size={20} color="#9370DB" />
            </IconButton>
          </HeaderIcons>
        </HeaderTop>
        <Subtitle>It's time to challenge your limits.</Subtitle>
      </Header>

      <ActionGrid>
        <ActionButton onClick={() => navigate('/workout')}>
          <ActionIconWrapper>
            <Home size={24} color="#9FE870" />
          </ActionIconWrapper>
          <ActionText>Workout</ActionText>
        </ActionButton>
        <ActionButton onClick={() => navigate('/progress')}>
          <ActionIconWrapper>
            <Search size={24} color="#9FE870" />
          </ActionIconWrapper>
          <ActionText>Progress Tracking</ActionText>
        </ActionButton>
        <ActionButton onClick={() => navigate('/nutrition')}>
          <ActionIconWrapper>
            <Play size={24} color="#9FE870" />
          </ActionIconWrapper>
          <ActionText>Nutrition</ActionText>
        </ActionButton>
        <ActionButton onClick={() => navigate('/community')}>
          <ActionIconWrapper>
            <MessageSquare size={24} color="#9FE870" />
          </ActionIconWrapper>
          <ActionText>Community</ActionText>
        </ActionButton>
      </ActionGrid>

      <Section>
        <SectionHeading>Recommendations</SectionHeading>
        <WorkoutGrid>
          <WorkoutCard>
            <WorkoutImageContainer>
              <StarBadge>
                <Star size={16} color="#FFD700" />
              </StarBadge>
              <WorkoutVideo
                ref={squatVideoRef}
                src={squatVideoUrl}
                muted
                loop
              />
              <PlayOverlay onClick={() => handleVideoClick('/videos/SquatExercise.mp4')}>
                <Play size={16} color="#FFFFFF" />
              </PlayOverlay>
            </WorkoutImageContainer>
            <WorkoutDetails>
              <WorkoutName>Squat Exercise</WorkoutName>
              <WorkoutStats>
                <StatItem>⏱ 0:25</StatItem>
                <StatItem>🔥 120 Kcal</StatItem>
              </WorkoutStats>
            </WorkoutDetails>
          </WorkoutCard>

          <WorkoutCard>
            <WorkoutImageContainer>
              <StarBadge>
                <Star size={16} color="#FFD700" />
              </StarBadge>
              <WorkoutVideo
                ref={stretchingVideoRef}
                src={stretchingVideoUrl}
                muted
                loop
              />
              <PlayOverlay onClick={() => handleVideoClick('/videos/FullBodyStretching.mp4')}>
                <Play size={16} color="#FFFFFF" />
              </PlayOverlay>
            </WorkoutImageContainer>
            <WorkoutDetails>
              <WorkoutName>Full Body Stretching</WorkoutName>
              <WorkoutStats>
                <StatItem>⏱ 0:25</StatItem>
                <StatItem>🔥 120 Kcal</StatItem>
              </WorkoutStats>
            </WorkoutDetails>
          </WorkoutCard>
        </WorkoutGrid>

        <ChallengeCard>
          <ChallengeInfo>
            <ChallengeTitle>Weekly Challenge</ChallengeTitle>
            <ChallengeText>Plank With Hip Twist</ChallengeText>
          </ChallengeInfo>
          <ChallengeImage src={plankImage} alt="Plank With Hip Twist" />
        </ChallengeCard>
      </Section>

      <BottomNav>
        <NavButton active={true}>
          <Home size={24} />
        </NavButton>
        <NavButton onClick={() => navigate('/find-friends')}>
          <Search size={24} />
        </NavButton>
        <NavButton onClick={() => navigate('/play')}>
          <Play size={24} />
        </NavButton>
        <NavButton onClick={() => navigate('/chats')}>
          <MessageSquare size={24} />
        </NavButton>
      </BottomNav>
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  padding: 20px;
  padding-bottom: 80px;
  background: #000000;
  color: white;
  height: 800px;
  width: 380px;
  position: relative;
  border-radius: 45px;
  overflow: hidden;
`;

const Header = styled.header`
  margin-bottom: 32px;
`;

const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 8px;
`;

const Title = styled.h1`
  span {
    display: block;
    font-size: 32px;
    font-weight: 600;
  }
`;

const HeaderIcons = styled.div`
  display: flex;
  gap: 16px;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Subtitle = styled.p`
  color: #9FE870;
  font-size: 16px;
`;

const ActionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-bottom: 32px;
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  color: white;
`;

const ActionIconWrapper = styled.div`
  width: 48px;
  height: 48px;
  background: #1A1A1A;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ActionText = styled.span`
  font-size: 12px;
  text-align: center;
  color: #9FE870;
`;

const Section = styled.section`
  margin-bottom: 32px;
`;

const SectionHeading = styled.h2`
  font-size: 24px;
  margin-bottom: 16px;
  color: #9FE870;
`;

const WorkoutGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-bottom: 24px;
`;

const WorkoutCard = styled.div`
  background: #1A1A1A;
  border-radius: 16px;
  overflow: hidden;
`;

const WorkoutImageContainer = styled.div`
  position: relative;
  aspect-ratio: 16/9;
`;

const WorkoutVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StarBadge = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
  z-index: 2;
`;

const PlayOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`;

const WorkoutDetails = styled.div`
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

const StatItem = styled.span`
  font-size: 12px;
  color: #9FE870;
`;

const ChallengeCard = styled.div`
  background: #1A1A1A;
  border-radius: 16px;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
`;

const ChallengeInfo = styled.div`
  flex: 1;
`;

const ChallengeTitle = styled.h3`
  color: #9FE870;
  margin-bottom: 8px;
`;

const ChallengeText = styled.p`
  font-size: 18px;
  font-weight: 600;
`;

const ChallengeImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 12px;
`;

const BottomNav = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: #1A1A1A;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 20px;
  border-bottom-left-radius: 45px;
  border-bottom-right-radius: 45px;
`;

const NavButton = styled.button`
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  color: ${props => props.active ? '#9FE870' : '#FFFFFF'};

  &:hover {
    color: #9FE870;
  }
`;

export default Homepage;