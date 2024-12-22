import React from 'react';
import styled from 'styled-components';
import { ArrowLeft, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import avatar1 from '../assets/avatar1.jpg';
import avatar2 from '../assets/avatar2.jpg';

const Chats = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/home');
  };

  const handleChatClick = (userId) => {
    navigate(`/chat/${userId}`);
  };

  return (
    <Container>
      <Header>
        <BackButton onClick={handleBack}>
          <ArrowLeft size={24} color="white" />
        </BackButton>
        <Title>Chats</Title>
      </Header>

      <SearchBar>
        <Search size={20} color="#666" />
        <SearchInput placeholder="Search" />
      </SearchBar>

      <ChatList>
        <ChatItem onClick={() => handleChatClick('jhomarie')}>
          <Avatar>
            <AvatarImage src={avatar1} alt="Jhomarie" />
          </Avatar>
          <ChatInfo>
            <Name>Jhomarie Avocado</Name>
            <LastMessage>Gym tonight</LastMessage>
          </ChatInfo>
          <TimeStamp>9:45 pm</TimeStamp>
        </ChatItem>

        <ChatItem onClick={() => handleChatClick('nikki')}>
          <Avatar>
            <AvatarImage src={avatar2} alt="Nikki" />
          </Avatar>
          <ChatInfo>
            <Name>Nikki Minajnos</Name>
            <LastMessage>See you there!</LastMessage>
          </ChatInfo>
          <TimeStamp>9:10 pm</TimeStamp>
        </ChatItem>
      </ChatList>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  background: #000000;
  color: white;
  height: 100vh;
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
`;

const SearchBar = styled.div`
  background: #1A1A1A;
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
`;

const SearchInput = styled.input`
  background: none;
  border: none;
  color: white;
  font-size: 16px;
  width: 100%;
  outline: none;

  &::placeholder {
    color: #666;
  }
`;

const ChatList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ChatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  cursor: pointer;
  border-radius: 12px;
  transition: background-color 0.2s;

  &:hover {
    background: #1A1A1A;
  }
`;

const Avatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
  background: #333;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ChatInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

const Name = styled.div`
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 4px;
`;

const LastMessage = styled.div`
  color: #999;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TimeStamp = styled.div`
  color: #666;
  font-size: 12px;
  white-space: nowrap;
`;

export default Chats;