import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, ChevronLeft, UserCircle, Plus } from 'lucide-react';
import '@fontsource/montserrat/400.css'
import '@fontsource/montserrat/600.css'
import '@fontsource/montserrat/700.css'
import backgroundImage from '../../assets/gym-background4.png';

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f7;
`;

const PhoneFrame = styled.div`
  width: 380px;
  height: 800px;
  background: #000;
  border-radius: 45px;
  position: relative;
  overflow: hidden;
  box-shadow: 
    0 0 0 12px #1a1a1a,
    0 0 0 14px #000,
    0 20px 40px rgba(0, 0, 0, 0.4);
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${backgroundImage});
  background-size: cover;
  background-position: center;
`;

const Content = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  padding: 24px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 8px;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  margin-top: 60px;
`;

const Subtitle = styled.p`
  font-size: 15px;
  color: rgba(255, 255, 255, 0.9);
  text-align: center;
  margin-bottom: 40px;
  font-family: 'Montserrat', sans-serif;
`;

const BackButton = styled.button`
  position: absolute;
  top: 24px;
  left: 24px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
`;

const AccountCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 8px;
  margin: 24px 0;
  width: 100%;
`;

const AccountOption = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  gap: 12px;
  cursor: pointer;
  transition: background-color 0.2s;
  border-radius: 8px;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const AccountText = styled.span`
  color: #333;
  font-size: 14px;
  font-family: 'Montserrat', sans-serif;
`;

const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: auto;
`;

const SignInButton = styled.button`
  width: 100%;
  padding: 16px;
  border-radius: 12px;
  border: none;
  font-weight: 500;
  cursor: pointer;
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  background-color: ${props => props.phone ? '#1a237e' : '#673ab7'};
`;

const SignUpText = styled.div`
  text-align: center;
  color: white;
  font-size: 14px;
  font-family: 'Montserrat', sans-serif;
  margin-top: 8px;
  margin-bottom: 40px;
`;

const SignUpLink = styled.span`
  color: #9FE870;
  cursor: pointer;
  font-weight: 500;
`;

const InputWrapper = styled.div`
  width: 100%;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 16px;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const Input = styled.input`
  background: none;
  border: none;
  color: white;
  font-size: 14px;
  width: 100%;
  margin-left: 12px;
  font-family: 'Montserrat', sans-serif;

  &::placeholder {
    color: rgba(255, 255, 255, 0.8);
  }

  &:focus {
    outline: none;
  }
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 16px;
  background-color: #9FE870;
  border: none;
  border-radius: 12px;
  color: white;
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 16px;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
`;

const OrText = styled.p`
  color: white;
  text-align: center;
  margin: 16px 0;
  font-family: 'Montserrat', sans-serif;
`;

const TermsText = styled.p`
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  font-size: 12px;
  font-family: 'Montserrat', sans-serif;
  padding: 0 24px;
  margin-bottom: 24px;
`;

const Login = () => {
  const navigate = useNavigate();
  const [showGoogleSignIn, setShowGoogleSignIn] = useState(false);

  const handleGoogleSignIn = () => {
    setShowGoogleSignIn(true);
  };

  const handleAccountSelect = () => {
    navigate('/complete-profile');
  };

  return (
    <Container>
      <PhoneFrame>
        <BackgroundImage />
        {!showGoogleSignIn ? (
          <Content>
            <Title>Let's Get Moving!</Title>
            <Subtitle>Log in to Find Your Fitness Buddy.</Subtitle>
            
            <InputWrapper>
              <Mail size={20} color="white" />
              <Input type="email" placeholder="Email" />
            </InputWrapper>
            
            <InputWrapper>
              <Lock size={20} color="white" />
              <Input type="password" placeholder="Password" />
            </InputWrapper>
            
            <LoginButton>LOGIN</LoginButton>
            <OrText>Or</OrText>
            
            <ButtonGroup>
              <SignInButton phone>Sign in with phone</SignInButton>
              <SignInButton google onClick={handleGoogleSignIn}>
                Sign in with Google
              </SignInButton>
              <SignUpText>
                Don't have an account? <SignUpLink>Sign up</SignUpLink>
              </SignUpText>
              <TermsText>
                By clicking on sign up, Sign in with Apple or sign in with Google, you agree to our{' '}
                <SignUpLink>terms and conditions</SignUpLink>
              </TermsText>
            </ButtonGroup>
          </Content>
        ) : (
          <Content>
            <BackButton onClick={() => setShowGoogleSignIn(false)}>
              <ChevronLeft size={24} color="white" />
            </BackButton>
            <Title>Let's Get Moving!</Title>
            <Subtitle>Log in to Find Your Fitness Buddy.</Subtitle>
            
            <AccountCard>
              <AccountOption onClick={handleAccountSelect}>
                <UserCircle size={20} color="#666" />
                <AccountText>sophiebohol05@gmail.com</AccountText>
              </AccountOption>
              <AccountOption>
                <Plus size={20} color="#666" />
                <AccountText>Add another account</AccountText>
              </AccountOption>
            </AccountCard>

            <ButtonGroup>
              <SignInButton phone>Sign in with phone</SignInButton>
              <SignInButton google>Sign in with Google</SignInButton>
              <SignUpText>
                Don't have an account? <SignUpLink>Sign up</SignUpLink>
              </SignUpText>
              <TermsText>
                By clicking on sign up, Sign in with Apple or sign in with Google, you agree to our{' '}
                <SignUpLink>terms and conditions</SignUpLink>
              </TermsText>
            </ButtonGroup>
          </Content>
        )}
      </PhoneFrame>
    </Container>
  );
};

export default Login;
