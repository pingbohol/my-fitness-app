import React, { useState } from 'react';
import styled from 'styled-components';
import { ArrowLeft, PencilLine } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import DisplayPhoto from '../assets/DisplayPhoto.jpg';

const EditProfile = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: 'Sophie Bohol',
    email: 'sophiebohol05@gmail.com',
    phone: '+63',
    gender: '',
    dateOfBirth: '',
    aboutMe: ''
  });

  const handleBack = () => {
    navigate('/home');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <ScrollWrapper>
      <Container>
        <Header>
          <BackButton onClick={handleBack}>
            <ArrowLeft size={24} color="white" />
          </BackButton>
        </Header>

        <ProfileSection>
          <ProfileImageContainer>
            <ProfileImage src={DisplayPhoto} alt="Profile" />
            <EditIconButton>
              <PencilLine size={20} color="white" />
            </EditIconButton>
          </ProfileImageContainer>
        </ProfileSection>

        <Form onSubmit={handleSubmit}>
          <FormField>
            <Label>Name</Label>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </FormField>

          <FormField>
            <Label>Email</Label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </FormField>

          <FormField>
            <Label>Phone</Label>
            <Input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </FormField>

          <FormField>
            <Label>Gender</Label>
            <Input
              type="text"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              placeholder="Select gender"
            />
          </FormField>

          <FormField>
            <Label>Date of birth</Label>
            <Input
              type="text"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              placeholder="Select date"
            />
          </FormField>

          <FormField>
            <Label>About me</Label>
            <TextArea
              name="aboutMe"
              value={formData.aboutMe}
              onChange={handleChange}
              placeholder="Write something about yourself"
            />
          </FormField>
        </Form>

        <InterestSection>
          <Label>Interest</Label>
          <InterestTags>
            <InterestTag>Fitness</InterestTag>
            <InterestTag>Make Friends</InterestTag>
          </InterestTags>
        </InterestSection>
      </Container>
    </ScrollWrapper>
  );
};

const ScrollWrapper = styled.div`
  height: 100vh;
  overflow-y: auto;
  background: #000000;

  /* Custom scrollbar styling */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #1A1A1A;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #333;
    border-radius: 4px;
    
    &:hover {
      background: #444;
    }
  }
`;

const Container = styled.div`
  padding: 20px;
  padding-bottom: 40px;
  background: #000000;
  color: white;
  min-height: 100%;
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProfileSection = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
`;

const ProfileImageContainer = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

const EditIconButton = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #9FE870;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-size: 16px;
  color: white;
`;

const Input = styled.input`
  background: #1A1A1A;
  border: none;
  border-radius: 12px;
  padding: 16px;
  color: white;
  font-size: 16px;
  width: 100%;

  &::placeholder {
    color: #666;
  }
`;

const TextArea = styled.textarea`
  background: #1A1A1A;
  border: none;
  border-radius: 12px;
  padding: 16px;
  color: white;
  font-size: 16px;
  width: 100%;
  min-height: 100px;
  resize: vertical;

  &::placeholder {
    color: #666;
  }
`;

const InterestSection = styled.div`
  margin-top: 24px;
`;

const InterestTags = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 12px;
`;

const InterestTag = styled.div`
  background: #1A1A1A;
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
`;

export default EditProfile;