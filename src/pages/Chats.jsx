import React from 'react';
import styled from 'styled-components';
import { IoArrowBack } from 'react-icons/io5';
import { BiSearch, BiDumbbell, BiMap, BiMessageSquare } from 'react-icons/bi';

const Chats = () => {
  const chatList = [
    {
      id: 1,
      name: 'Jhomarie Avocado',
      lastMessage: 'Gym tonight',
      time: '9:45 pm',
      avatar: '/path-to-avatar1.jpg'
    },
    {
      id: 2,
      name: 'Nikki Minajnos',
      lastMessage: 'See you there!',
      time: '9:10 pm',
      avatar: '/path-to-avatar2.jpg'
    }
  ];

  return (
    <Container>
      <Header>
        <BackButton>
          <IoArrowBack size={24} color="white" />
        </BackButton>
        <Title>Chats</Title>
      </Header>

      <SearchBar>
        <BiSearch size={20} color="#666" />
        <SearchInput placeholder="Search" />
      </SearchBar>

      <ChatList>
        {chatList.map((chat) => (
          <ChatItem key={chat.id}>
            <Avatar src={chat.avatar} alt={chat.name} />
            <ChatInfo>
              <ChatName>{chat.name}</ChatName>
              <LastMessage>{chat.lastMessage}</LastMessage>
            </ChatInfo>
            <ChatTime>{chat.time}</ChatTime>
          </ChatItem>
        ))}
      </ChatList>

      <BottomNav>
        <NavItem>
          <BiDumbbell size={24} color="white" />
        </NavItem>
        <NavItem>
          <BiMap size={24} color="white" />
        </NavItem>
        <NavItem>
          <BiMessageSquare size={24} color="#95FF00" />
        </NavItem>
      </BottomNav>
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
  position: relative;
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

const SearchBar = styled.div`
  margin: 0 20px 20px;
  background-color: #333;
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
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
  padding: 0 20px;
`;

const ChatItem = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  object-fit: cover;
`;

const ChatInfo = styled.div`
  flex: 1;
  margin-left: 16px;
`;

const ChatName = styled.h2`
  color: white;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 4px;
`;

const LastMessage = styled.p`
  color: #888;
  font-size: 14px;
`;

const ChatTime = styled.span`
  color: #666;
  font-size: 12px;
`;

const BottomNav = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: #1A1A1A;
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 440px;
  margin: 0 auto;
`;

const NavItem = styled.button`
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
`;

export default Chats;
