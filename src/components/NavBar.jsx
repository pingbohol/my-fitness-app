import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Home, Search, Play, MessageSquare } from 'lucide-react';

const NavBar = () => {
  return (
    <NavigationWrapper>
      <Navigation>
        <NavButton>
          <Home size={24} />
        </NavButton>
        <NavButton>
          <Search size={24} />
        </NavButton>
        <NavButton>
          <Play size={24} />
        </NavButton>
        <NavButton>
          <MessageSquare size={24} />
        </NavButton>
      </Navigation>
    </NavigationWrapper>
  );
};

const NavigationWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 375px;
  background: #000000;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 8px 0;
  z-index: 1000;
`;

const Navigation = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const NavButton = styled.button`
  background: none;
  border: none;
  color: #666;
  cursor: pointer;
  padding: 8px;
  
  &:hover {
    color: #9FE870;
  }
`;

export default NavBar; 