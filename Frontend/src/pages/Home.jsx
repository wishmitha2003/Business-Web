import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
// Add <Header /> and <Footer /> to your JSX


const Home = () => {
  const { user, loginWithGoogle } = useAuth();

  return (
    <div className="home-page">
      <header className="hero-section">
        <h1>DEVZ - Professional Development Solutions</h1>
        <p>Custom software solutions for your business growth</p>
        {user ? (
          <Link to="/dashboard" className="btn-primary">Dashboard</Link>
        ) : (
          <button onClick={loginWithGoogle} className="google-btn">
            Get Started with Google
          </button>
        )}
      </header>
      
      <section className="features">
        <div className="feature-card">
          <h3>Web Development</h3>
          <p>React, Node.js, scalable architectures</p>
        </div>
        <div className="feature-card">
          <h3>Mobile Apps</h3>
          <p>React Native cross-platform solutions</p>
        </div>
        <div className="feature-card">
          <h3>Cloud Services</h3>
          <p>AWS, Azure, DevOps automation</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
