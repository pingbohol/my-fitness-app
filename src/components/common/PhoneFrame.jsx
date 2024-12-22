import React from 'react';
import styled from 'styled-components';

const PhoneFrame = ({ children }) => {
  return (
    <PhoneFrameContainer>
      <PhoneContainer>
        {children}
      </PhoneContainer>
    </PhoneFrameContainer>
  );
};

const PhoneFrameContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
`;

const PhoneContainer = styled.div`
  width: 380px;
  height: 800px;
  background: #000;
  position: relative;
  border-radius: 45px;
  box-shadow: 
    0 0 0 12px #1a1a1a,
    0 0 0 14px #000,
    0 20px 40px rgba(0, 0, 0, 0.4);
  overflow: hidden;
`;

export default PhoneFrame; 