import React from 'react';
import './SponserSection.css';
import nistLogo from '../../images/nist-logo.png';


function Sponsors() {
    return (
      <div className="sponsors-tech-section">
        <h3 className='sponsor-title'>SPONSOR</h3>
        <div className="sponsors-tech-grid">
          <div className="sponsor-tech-item">
            <div className="sponsor-tech-logo">
                <img src={nistLogo} alt="NIST" />
            </div>
            <div className="sponsor-tech-overlay">
                <a href="https://www.nist.gov" target="_blank" rel="noopener noreferrer" className="sponsor-link-icon">
                    <h4>NIST🔗</h4>
                </a>
                
            </div>
          </div>
          
        </div>
      </div>
    );
}

export default Sponsors;