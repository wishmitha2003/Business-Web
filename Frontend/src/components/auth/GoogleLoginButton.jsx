import React from 'react';
import { useAuth } from '../../context/AuthContext';

const GoogleLoginButton = ({ onClick, className = 'google-btn' }) => {
  return (
    <button className={className} onClick={onClick}>
      <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google" />
      Continue with Google
    </button>
  );
};

export default GoogleLoginButton;
