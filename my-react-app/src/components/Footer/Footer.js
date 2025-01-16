// Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer>
      {/* Main Footer */}
      <div className="footer-main">
        <div className="footer-container">
          {/* Left Column */}
          <div className="footer-brand">
            <div className="bgsu-logo">BGSU</div>
            <div className="university-info">
              <p>Bowling Green State University</p>
              <p>Bowling Green, Ohio</p>
              <p>43403-0001</p>
              <a href="tel:419-372-2531" className="phone-link">419-372-2531</a>
            </div>
            <a href="/make-a-gift" className="make-gift-link">Make A Gift 🎁</a>
          </div>

          {/* Middle Column */}
          <div className="footer-links">
            <div className="links-column">
              <a href="/accessibility">Accessibility including events</a>
              <a href="/academics">Academics</a>
              <a href="/a-z">A-Z Links</a>
              <a href="/directory">Campus Directory</a>
              <a href="/consumer">Consumer Information</a>
            </div>
            <div className="links-column">
              <a href="/employment">Employment</a>
              <a href="/faculty">Faculty/Staff</a>
              <a href="/firelands">Firelands</a>
              <a href="/libraries">Libraries</a>
              <a href="/media">Media Resources</a>
            </div>
            <div className="links-column">
              <a href="/nondiscrimination">Nondiscrimination</a>
              <a href="/parents">Parents and Families</a>
              <a href="/students">Students</a>
              <a href="/tech">Technology Support</a>
              <a href="/title-ix">Title IX Resources</a>
            </div>
          </div>

          {/* Toggle Button */}
          <div className="contrast-toggle">
            <button className="toggle-btn">
              <span className="toggle-icon">🌓</span>
              Toggle High Contrast
            </button>
          </div>
        </div>
      </div>

      {/* Report Section */}
      <div className="footer-report">
        <div className="report-container">
          <div className="report-content">
            <h3>SEE IT. HEAR IT. REPORT IT.</h3>
            <p>It is the responsibility of each person within the university community to take action when an issue or concern arises.</p>
          </div>
          <a href="/report" className="report-button">
            Report concerns or information of alleged misconduct
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;