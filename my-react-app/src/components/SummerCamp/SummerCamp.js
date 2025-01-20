import React from 'react';
import { Link } from 'react-router-dom';
import './SummerCamp.css';
import summerbannerimg from '../../images/summer-academic-banner.jpg';
import cyberGuardian from '../../images/article-1-img.jpg';

function SummerCamp() {
  return (
    <div>
      
      <div className='banner-container'>
        <img  className="cpm-banner" src={summerbannerimg} alt="banner-image"  />
      </div>

      <div className='empty-container'>
        <div></div>
      </div>

      <div className="outercontainer">
        <div className='sidebar'>
         <ul>
          <li>
            <a href="#">Summer camps and programs</a>
          </li>
          <li>
            <a href="#">Application</a>
          </li>
         </ul>
        </div>
        <div className='content-container'>
      <h1 className='page-title'> Cybersecurity Summer Camp</h1>
      <p>Summer is the perfect time for students to dive into the exciting world of cybersecurity and technology. Our Cybersecurity 
        Summer Camp provides a unique opportunity to explore cutting-edge topics like ethical hacking, data protection, and digital forensics, 
        all while building essential skills for a future in the tech industry.</p>

      <p>Participants will experience hands-on activities, solve real-world 
        challenges, and gain insights from industry experts. Whether you're a beginner 
        or have some tech experience, our program is designed to expand your knowledge, 
        foster critical thinking, and ignite your passion for cybersecurity.</p>

        <h2 className='camp-offerings'>Summer camp offerings</h2>

        <div className="grid-container">

          <div className='o-row_col '>

            <div >
              <img className="article-1-img" src={cyberGuardian} alt="cyberguardian"></img>
            </div>

            <div className="card-content">2024</div>

          </div>


           <div className='o-row_col'>

            <div >
              <img className="article-1-img" src={cyberGuardian} alt="cyberguardian"></img>
            </div>

            <div className='card-content'> 2025</div>

          </div>

        </div>
     </div>
      
      </div>

      <div className="back-navigation">
        <Link to="/" className="back-link">← Back to Home</Link>
      </div>
     

    </div>
  );
}

export default SummerCamp;