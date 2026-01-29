import React from 'react';
import { useAuth } from '../context/AuthContext';
import { GoogleLoginButton } from '../components/auth';

const Login = () => {
  const { loginWithGoogle, error } = useAuth();

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Welcome to DEVZ</h2>
        <p>Sign in to access your dashboard</p>
        
        <GoogleLoginButton onClick={loginWithGoogle} />
        
        {error && <div className="error-message">{error}</div>}
        
        <div className="login-footer">
          <p>Secure Google Authentication</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
