import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Lock, Eye, EyeOff } from 'lucide-react';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const togglePasswordVisibility = (field) => {
    setShowPassword(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    console.log('Signup attempt:', formData);
    navigate('/complete-profile');
  };

  return (
    <SignupContainer>
      <ContentWrapper>
        <Title>Ready to Make Fitness Fun?</Title>
        <Subtitle>Sign Up and Find Your Perfect Workout Partner!</Subtitle>

        <SignupForm onSubmit={handleSubmit}>
          <InputWrapper>
            <InputIcon>
              <User size={20} />
            </InputIcon>
            <InputField
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </InputWrapper>

          <InputWrapper>
            <InputIcon>
              <Mail size={20} />
            </InputIcon>
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
            <InputIcon>
              <Lock size={20} />
            </InputIcon>
            <InputField
              type={showPassword.password ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <PasswordToggle 
              type="button"
              onClick={() => togglePasswordVisibility('password')}
            >
              {showPassword.password ? <EyeOff size={20} /> : <Eye size={20} />}
            </PasswordToggle>
          </InputWrapper>

          <InputWrapper>
            <InputIcon>
              <Lock size={20} />
            </InputIcon>
            <InputField
              type={showPassword.confirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <PasswordToggle 
              type="button"
              onClick={() => togglePasswordVisibility('confirmPassword')}
            >
              {showPassword.confirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </PasswordToggle>
          </InputWrapper>

          <SignupButton type="submit">SIGN IN</SignupButton>
        </SignupForm>

        <LoginLink>
          Already have an account? <Link onClick={() => navigate('/login')}>Login</Link>
        </LoginLink>
      </ContentWrapper>
    </SignupContainer>
  );
};

const SignupContainer = styled.div`
  height: 100vh;
  width: 100%;
  background: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 400px;
`;

const Title = styled.h1`
  color: white;
  font-size: 32px;
  margin-bottom: 8px;
  text-align: left;
`;

const Subtitle = styled.p`
  color: #666;
  font-size: 16px;
  margin-bottom: 32px;
  text-align: left;
`;

const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 16px;
`;

const InputIcon = styled.div`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
`;

const InputField = styled.input`
  width: 100%;
  padding: 16px;
  padding-left: 48px;
  padding-right: ${props => props.type === 'password' ? '48px' : '16px'};
  background: #1A1A1A;
  border: none;
  border-radius: 12px;
  color: white;
  font-size: 16px;

  &::placeholder {
    color: #666;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #9FE870;
  }
`;

const PasswordToggle = styled.button`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  color: #666;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #9FE870;
  }
`;

const SignupButton = styled.button`
  width: 100%;
  padding: 16px;
  background: #9FE870;
  border: none;
  border-radius: 12px;
  color: black;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 16px;

  &:hover {
    background: #8CD962;
  }
`;

const LoginLink = styled.p`
  color: #666;
  text-align: center;
  margin-top: 24px;
`;

const Link = styled.span`
  color: #9FE870;
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`;

export default Signup;