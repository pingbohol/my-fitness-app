import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail, User, Eye, EyeOff } from 'lucide-react';
import './Signup.css';
import gymBackground from '../../assets/gym-background6.png';

const SignUp = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const inputGroupStyle = {
    backgroundColor: 'rgba(151, 151, 151, 0.5)',
    borderRadius: '12px',
    padding: '16px',
    marginBottom: '12px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  };

  const inputStyle = {
    background: 'transparent',
    border: 'none',
    color: '#FFFFFF',
    width: '100%',
    fontSize: '16px',
    outline: 'none',
  };

  const inputRules = `
    input::placeholder {
      color: rgba(255, 255, 255, 0.8);
    }
  `;

  const iconStyle = {
    color: '#FFFFFF',
    strokeWidth: 1.5
  };

  return (
    <div className="device-container">
      <div className="phone-frame">
        <div className="dynamic-island"></div>
        <div className="login-container" style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${gymBackground})`,
          padding: '24px'
        }}>
          <h1 style={{ 
            fontSize: '32px', 
            color: 'white', 
            marginBottom: '8px' 
          }}>
            Ready to Make<br />Fitness Fun?
          </h1>
          <p style={{ 
            color: 'white', 
            marginBottom: '24px',
            opacity: 0.8 
          }}>
            Sign Up and Find Your Perfect Workout Partner!
          </p>
          
          <div className="form-container">
            <div style={inputGroupStyle}>
              <User 
                size={20} 
                style={iconStyle}
              />
              <input
                type="text"
                placeholder="Name"
                style={inputStyle}
              />
            </div>

            <div style={inputGroupStyle}>
              <Mail 
                size={20} 
                style={iconStyle}
              />
              <input
                type="email"
                placeholder="Email"
                style={inputStyle}
              />
            </div>

            <div style={inputGroupStyle}>
              <Lock 
                size={20} 
                style={iconStyle}
              />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                style={inputStyle}
              />
              <span onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? 
                  <Eye size={20} style={iconStyle} /> : 
                  <EyeOff size={20} style={iconStyle} />
                }
              </span>
            </div>

            <div style={inputGroupStyle}>
              <Lock 
                size={20} 
                style={iconStyle}
              />
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                style={inputStyle}
              />
              <span onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                {showConfirmPassword ? 
                  <Eye size={20} style={iconStyle} /> : 
                  <EyeOff size={20} style={iconStyle} />
                }
              </span>
            </div>

            <button style={{
              backgroundColor: '#A0E234',
              border: 'none',
              borderRadius: '12px',
              padding: '16px',
              width: '100%',
              fontSize: '16px',
              fontWeight: 'bold',
              marginTop: '24px'
            }}>
              SIGN IN
            </button>

            <p style={{ 
              textAlign: 'center', 
              marginTop: '16px', 
              color: 'white' 
            }}>
              Already have an account? <span 
                onClick={() => navigate('/login')} 
                style={{ cursor: 'pointer', color: '#A5FF32' }}
              >
                Login
              </span>
            </p>
          </div>
        </div>
      </div>
      <style>{inputRules}</style>
    </div>
  );
};

export default SignUp;
