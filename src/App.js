import React, { useState } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const projects = [
    {
      title: 'Craftopia – Handcraft Marketplace Website',
      description: 'A platform for buying and selling unique handmade crafts.',
      features: [
        'User registration and login',
        'Product listing and search',
        'Secure payment gateway',
        'Order tracking system'
      ]
    },
    {
      title: 'Deep Learning-Based Detection of Deepfake Images & Videos',
      description: 'Detects and flags deepfake content using advanced neural networks.',
      features: [
        'Image and video analysis',
        'Real-time detection',
        'User-friendly interface',
        'Report generation'
      ]
    },
    {
      title: 'Online Job Search System',
      description: 'A comprehensive system to search and apply for jobs online.',
      features: [
        'Job listings with filters',
        'Resume upload',
        'Application tracking',
        'Employer dashboard'
      ]
    }
  ];

  const skills = [
    'HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Java', 'C', 'MySQL', 'UI/UX Design'
  ];

  return (
    <div className="profile-card">
      <nav className="nav-buttons">
        {['home', 'about', 'skills', 'projects', 'contact'].map(tab => (
          <button
            key={tab}
            className={activeTab === tab ? 'active' : ''}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </nav>

      <section className="content-section">
        {activeTab === 'home' && (
          <div className="home-content">
            
            <h2><i className="fas fa-user"></i> Sushmitha H K</h2>
            <p><i className="fas fa-laptop-code"></i> Computer Science & Engineering</p>
            <p><i className="fas fa-university"></i> Malnad College of Engineering</p>
            <p><i className="fas fa-calendar-alt"></i> Batch 2023 - 2026</p>
          </div>
        )}

        {activeTab === 'about' && (
          <div className="about-content">
            <p>
              I am an enthusiastic Computer Science student passionate about technology and innovation.<br />
              I enjoy creating practical projects and continuously learning new skills to grow both personally and professionally.
            </p>
          </div>
        )}

        {activeTab === 'skills' && (
          <>
            <h3>Technical Skills</h3>
            <div className="skills-list">
              {skills.map(skill => (
                <span key={skill} className="skill-item">{skill}</span>
              ))}
            </div>
          </>
        )}

        {activeTab === 'projects' && (
          <div>
            {projects.map(({ title, description, features }) => (
              <div className="project-card" key={title}>
                <h4 className="project-title">{title}</h4>
                <p className="project-desc">{description}</p>
                <ul className="project-features">
                  {features.map((f, i) => <li key={i}>{f}</li>)}
                </ul>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="contact-links">
            <a href="https://github.com/iamsushmithaa" target="_blank" rel="noreferrer" aria-label="GitHub">
              <i className="fab fa-github"></i> GitHub
            </a>
            <a href="mailto:iamsushmithahk@gmail.com" aria-label="Email">
              <i className="fas fa-envelope"></i> Gmail
            </a>
            <a href="https://www.linkedin.com/in/sushmitha-h-k-1043ab352" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
          </div>
        )}
      </section>
    </div>
  );
}

export default App;
