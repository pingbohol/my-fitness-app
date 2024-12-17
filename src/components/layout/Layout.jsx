import React from 'react';
import styled from 'styled-components';
import NavBar from '../common/NavBar';

const Layout = ({ children }) => {
  return (
    <PageContainer>
      <IPhoneFrame>
        <StatusBar>
          <Time>10:45</Time>
          <StatusIcons>
            <Signal>●●●●</Signal>
            <Wifi></Wifi>
            <Battery>🔋</Battery>
          </StatusIcons>
        </StatusBar>
        <Content>
          {children}
        </Content>
        <NavBar />
      </IPhoneFrame>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 20px;
`;

const IPhoneFrame = styled.div`
  position: relative;
  width: 440px;
  height: 956px;
  background-color: #000000;
  border-radius: 55px;
  overflow: hidden;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.2);
  border: 14px solid #1a1a1a;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 40%;
    height: 35px;
    background-color: #1a1a1a;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    z-index: 100;
  }
`;

const StatusBar = styled.div`
  position: relative;
  height: 48px;
  padding: 0 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-size: 14px;
  z-index: 10;
`;

const Time = styled.div`
  font-weight: bold;
`;

const StatusIcons = styled.div`
  display: flex;
  gap: 8px;
`;

const Signal = styled.div`
  letter-spacing: -1px;
`;

const Wifi = styled.div``;

const Battery = styled.div``;

const Content = styled.div`
  height: calc(100% - 48px - 83px);
  overflow-y: auto;
  position: relative;
  
  /* Hide scrollbar but keep functionality */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export default Layout; 