import React, { useState } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const projects = [
    {
      title: 'Craftopia – Handcraft Marketplace Website',
      desc: 'An online platform connecting artisans and buyers, showcasing handmade crafts with seamless purchase options.',
      features: [
        'User-friendly product catalog',
        'Secure payment gateway integration',
        'Responsive design across devices',
      ],
    },
    {
      title: 'Deep Learning-Based Detection of Deepfake Images & Videos',
      desc: 'A smart system that detects deepfake media using advanced deep learning techniques to ensure content authenticity.',
      features: [
        'High accuracy detection',
        'Real-time video analysis',
        'User-friendly dashboard',
      ],
    },
  ];

  const skills = [
    'HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'MySQL', 'UI/UX Design', 'Java'
  ];

  return (
    <div className="profile-card">
      <nav className="nav-buttons">
        {['home', 'about', 'skills', 'projects', 'contact'].map((tab) => (
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
          <>
            <h2>Sushmitha H K</h2>
            <p className="home-info">🎓 Computer Science & Engineering</p>
            <p className="home-info">🏫 Malnad College of Engineering</p>
            <p className="home-info">📅 Batch 2023 - 2026</p>
          </>
        )}

        {activeTab === 'about' && (
          <>
            <h2>About Me</h2>
            <p className="about-text">
              I am an enthusiastic Computer Science student passionate about technology and innovation.<br />
              I enjoy creating practical projects and continuously learning new skills to grow both personally and professionally.
            </p>
          </>
        )}

        {activeTab === 'skills' && (
          <>
            <h2>Skills</h2>
            <div className="skills-list">
              {skills.map((skill) => (
                <span key={skill} className="skill-item">{skill}</span>
              ))}
            </div>

            <h2 style={{ marginTop: '2rem' }}>Hobbies</h2>
            <ul className="hobbies-list">
              <li>Singing</li>
              <li>Dancing</li>
            </ul>
          </>
        )}

        {activeTab === 'projects' && (
          <>
            <h2>Projects</h2>
            {projects.map((project) => (
              <div key={project.title} className="project-card">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
                <ul className="project-features">
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="project-card">
              <h3 className="project-title">Online Job Search System (Diploma Project)</h3>
              <p className="project-desc">
                A platform to help users find jobs online by searching and managing job listings efficiently.
              </p>
              <ul className="project-features">
                <li>User-friendly job search interface</li>
                <li>Job listing and filtering</li>
                <li>Resume upload and management</li>
              </ul>
            </div>
          </>
        )}

        {activeTab === 'contact' && (
          <section className="contact-section">
            <h2>Contact Me</h2>
            <div className="contact-icons">
              <a
                href="https://github.com/imasushmithaa"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="contact-link"
                title="GitHub"
              >
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                  <path d="M12 0C5.372 0 0 5.372 0 12c0 5.302 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.73.082-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.834 2.807 1.304 3.492.997.108-.776.418-1.305.76-1.606-2.665-.3-5.467-1.332-5.467-5.931 0-1.31.47-2.382 1.236-3.222-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.02.004 2.045.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.873.12 3.176.77.84 1.235 1.912 1.235 3.222 0 4.61-2.807 5.628-5.48 5.922.43.37.813 1.102.813 2.222 0 1.606-.015 2.898-.015 3.293 0 .32.216.694.825.576C20.565 21.796 24 17.298 24 12c0-6.628-5.372-12-12-12z"/>
                </svg>
              </a>

              <a
                href="mailto:iamsushmithahk@gmail.com"
                aria-label="Email"
                className="contact-link"
                title="Email"
              >
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4.99-8 5-8-5V6l8 5 8-5v2.99z"/>
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/sushmitha-h-k-1043ab352"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="contact-link"
                title="LinkedIn"
              >
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                  <path d="M20.447 20.452H16.9v-5.569c0-1.328-.027-3.039-1.852-3.039-1.854 0-2.137 1.447-2.137 2.94v5.668h-3.545V9h3.405v1.561h.047c.474-.9 1.633-1.852 3.36-1.852 3.594 0 4.256 2.366 4.256 5.444v6.299zM5.337 7.433a2.067 2.067 0 1 1 0-4.135 2.067 2.067 0 0 1 0 4.135zM7.12 20.452H3.554V9h3.566v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.543C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                </svg>
              </a>
            </div>
          </section>
        )}
      </section>
    </div>
  );
}

export default App;
