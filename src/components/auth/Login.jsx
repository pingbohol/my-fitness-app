import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', formData);
    navigate('/home');
  };

  return (
    <LoginContainer>
      <ContentWrapper>
        <Title>Let's Get Moving!</Title>
        <Subtitle>Log in to Find Your Fitness Buddy.</Subtitle>
        
        <LoginForm onSubmit={handleSubmit}>
          <InputWrapper>
            <InputField
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </InputWrapper>

          <InputWrapper>
            <InputField
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <PasswordToggle 
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </PasswordToggle>
          </InputWrapper>

          <LoginButton type="submit">LOGIN</LoginButton>
          
          <OrDivider>
            <span>or</span>
          </OrDivider>

          <PhoneSignInButton>
            Sign in with phone
          </PhoneSignInButton>
          
          <GoogleSignInButton>
            Sign in with Google
          </GoogleSignInButton>

          <SignUpText>
            Don't have an account? <SignUpLink onClick={() => navigate('/signup')}>Sign up</SignUpLink>
          </SignUpText>

          <TermsText>
            By clicking on sign up, Sign in with Apple or sign in with Google, you agree to our{' '}
            <TermsLink>terms and conditions</TermsLink>
          </TermsText>
        </LoginForm>
      </ContentWrapper>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  height: 100vh;
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url('/path-to-your-gym-image.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  padding: 0 24px;
`;

const Title = styled.h1`
  color: white;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const Subtitle = styled.p`
  color: #E0E0E0;
  font-size: 16px;
  margin-bottom: 32px;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const InputWrapper = styled.div`
  position: relative;
`;

const InputField = styled.input`
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  border: none;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 16px;
  backdrop-filter: blur(10px);

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
`;

const PasswordToggle = styled.button`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: white;
  cursor: pointer;
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  border: none;
  background: #9FE870;
  color: black;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background: #8CD962;
  }
`;

const OrDivider = styled.div`
  text-align: center;
  color: white;
  position: relative;
  margin: 16px 0;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    width: 45%;
    height: 1px;
    background: rgba(255, 255, 255, 0.3);
  }

  &::before { left: 0; }
  &::after { right: 0; }

  span {
    background: transparent;
    padding: 0 10px;
  }
`;

const PhoneSignInButton = styled.button`
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  border: none;
  background: #1a237e;
  color: white;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
`;

const GoogleSignInButton = styled(PhoneSignInButton)`
  background: #673ab7;
`;

const SignUpText = styled.p`
  text-align: center;
  color: white;
  margin-top: 16px;
`;

const SignUpLink = styled.span`
  color: #9FE870;
  cursor: pointer;
`;

const TermsText = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 12px;
  text-align: center;
  margin-top: 16px;
`;

const TermsLink = styled.span`
  color: #9FE870;
  cursor: pointer;
`;

export default Login; 