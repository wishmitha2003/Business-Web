import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import BillingSection from '../components/business/BillingSection';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch user projects from API
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await fetch('/api/users/projects', {
        headers: { Authorization: `Bearer ${user.token}` }
      });
      const data = await res.json();
      setProjects(data);
    } catch (error) {
      console.error('Fetch projects error:', error);
    }
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
        <div className="user-info">
          <span>Welcome, {user?.name}</span>
          <button onClick={logout} className="btn-secondary">Logout</button>
        </div>
      </header>

      <div className="dashboard-grid">
        <section className="projects-section">
          <h2>Your Projects</h2>
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <h3>{project.name}</h3>
              <p>{project.status}</p>
            </div>
          ))}
        </section>

        <BillingSection />
      </div>
    </div>
  );
};

export default Dashboard;
