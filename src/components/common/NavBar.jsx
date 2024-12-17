import React from 'react';
import styled from 'styled-components';
import { Home, Circle, Play, MessageSquare } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();
  
  return (
    <NavigationWrapper>
      <Navigation>
        <NavItem as={Link} to="/home" active={location.pathname === "/home"}>
          <IconWrapper isActive={location.pathname === "/home"}>
            <Home strokeWidth={1.5} size={28} />
          </IconWrapper>
        </NavItem>
        <NavItem as={Link} to="/find-friends" active={location.pathname === "/find-friends"}>
          <IconWrapper isActive={location.pathname === "/find-friends"}>
            <Circle strokeWidth={1.5} size={28} />
          </IconWrapper>
        </NavItem>
        <NavItem as={Link} to="/play" active={location.pathname === "/play"}>
          <IconWrapper isActive={location.pathname === "/play"}>
            <Play strokeWidth={1.5} size={28} />
          </IconWrapper>
        </NavItem>
        <NavItem as={Link} to="/chats" active={location.pathname === "/chats"}>
          <IconWrapper isActive={location.pathname === "/chats"}>
            <MessageSquare strokeWidth={1.5} size={28} />
          </IconWrapper>
        </NavItem>
      </Navigation>
    </NavigationWrapper>
  );
};

const NavigationWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #000000;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 8px 0;
  z-index: 1000;
`;

const Navigation = styled.nav`
  max-width: 375px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const NavItem = styled(Link)`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 8px;
  transition: all 0.2s ease;
`;

const IconWrapper = styled.div`
  color: ${props => props.isActive ? '#9FE870' : 'rgba(255, 255, 255, 0.4)'};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s ease;

  ${NavItem}:hover & {
    color: ${props => props.isActive ? '#9FE870' : 'rgba(255, 255, 255, 0.6)'};
  }
`;

export default NavBar;
