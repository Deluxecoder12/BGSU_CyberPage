import React from 'react';
import './ProjectDescription.css';
import projectImage from '../../images/Lab-Banner.jpg';

function ProjectDescription() {
    return (
        <section className="project-description-section">
          <div className="project-description-image-container">
            <img 
              src={projectImage} 
              alt="BFP Cyber Project" 
              className="project-full-image"
            />
            <div className="image-overlay"></div>
            <div className="project-description-card">
              <h2>Revolutionizing Cybersecurity Education</h2>
              <div className="description-content">
                <p>
                  In a world where digital threats evolve at lightning speed, the BFP Cyber 
                  project stands as a beacon of innovation. We're not just teaching 
                  cybersecurity—we're building a diverse, empowered community of 
                  future-ready professionals who will safeguard our digital frontier.
                </p>
              </div>
            </div>
          </div>
        </section>
      );
}

export default ProjectDescription;