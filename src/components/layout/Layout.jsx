import React from 'react';
import styled from 'styled-components';
import NavBar from '../../components/NavBar';

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      {children}
      <NavBar />
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  height: 100%;
  width: 100%;
  background: #000;
  position: relative;
  overflow-y: auto;
`;

export default Layout; 