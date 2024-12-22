import React, { useState } from 'react';
import styled from 'styled-components';
import { ArrowLeft, Send } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

const PersonalChat = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [message, setMessage] = useState('');
  
  // Mock data - you would typically fetch this from your backend
  const chatData = {
    jhomarie: { name: 'Jhomarie Avocado', avatar: 'J' },
    nikki: { name: 'Nikki Minajnos', avatar: 'N' }
  };

  const handleBack = () => {
    navigate('/chats');
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (message.trim()) {
      // Here you would typically send the message to your backend
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  return (
    <Container>
      <Header>
        <BackButton onClick={handleBack}>
          <ArrowLeft size={24} color="white" />
        </BackButton>
        <Avatar>{chatData[userId]?.avatar}</Avatar>
        <UserInfo>
          <Name>{chatData[userId]?.name}</Name>
        </UserInfo>
      </Header>

      <ChatArea>
        {/* Messages would be displayed here */}
      </ChatArea>

      <MessageForm onSubmit={handleSend}>
        <MessageInput 
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <SendButton type="submit">
          <Send size={20} color={message.trim() ? '#9FE870' : '#666'} />
        </SendButton>
      </MessageForm>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  background: #000000;
  color: white;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const BackButton = styled.button`
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  background: #1A1A1A;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: #9FE870;
`;

const UserInfo = styled.div`
  flex: 1;
`;

const Name = styled.div`
  font-weight: 500;
`;

const ChatArea = styled.div`
  flex: 1;
  padding: 16px;
  overflow-y: auto;
`;

const MessageForm = styled.form`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const MessageInput = styled.input`
  flex: 1;
  background: #1A1A1A;
  border: none;
  border-radius: 24px;
  padding: 12px 16px;
  color: white;
  font-size: 16px;

  &::placeholder {
    color: #666;
  }

  &:focus {
    outline: none;
  }
`;

const SendButton = styled.button`
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default PersonalChat; 