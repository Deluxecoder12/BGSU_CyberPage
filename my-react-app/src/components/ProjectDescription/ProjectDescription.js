import React from 'react';
import './ProjectDescription.css';
import projectImage from '../../images/Lab-Banner.jpeg';

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
              <h2>Building<br></br> Cybersecurity Workforce</h2>
              <div className="description-content">
                <p>
                BFP Cyber is dedicated to strengthening cybersecurity education and building a robust cybersecurity workforce through 
                collaboration with the Ohio government, local companies, higher education institutions, and K-12 schools. The project 
                aims to establish a cohesive and collaborative cybersecurity community, empowering future-ready professionals 
                to safeguard the digital realm and protect the nation's critical assets and privacy.
                </p>
              </div>
            </div>
          </div>
        </section>
      );
}

export default ProjectDescription;