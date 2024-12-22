import React from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Users, Play, MessageCircle, Settings } from 'lucide-react';

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <NavBarContainer>
      <NavItem onClick={() => navigate('/home')} active={isActive('/home')}>
        <Home size={24} />
      </NavItem>
      <NavItem onClick={() => navigate('/find-friends')} active={isActive('/find-friends')}>
        <Users size={24} />
      </NavItem>
      <NavItem onClick={() => navigate('/play')} active={isActive('/play')}>
        <Play size={24} fill={isActive('/play') ? "#007AFF" : "none"} />
      </NavItem>
      <NavItem onClick={() => navigate('/chats')} active={isActive('/chats')}>
        <MessageCircle size={24} />
      </NavItem>
      <NavItem onClick={() => navigate('/settings')} active={isActive('/settings')}>
        <Settings size={24} />
      </NavItem>
    </NavBarContainer>
  );
};

const NavBarContainer = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: #111;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid #333;
  max-width: 430px;
  margin: 0 auto;

  @media (min-width: 431px) {
    border-radius: 0 0 40px 40px;
  }
`;

const NavItem = styled.button`
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  color: ${props => props.active ? '#007AFF' : '#666'};
  transition: color 0.2s ease;

  &:hover {
    color: #007AFF;
  }
`;

export default NavBar; 