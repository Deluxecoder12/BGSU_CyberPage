import React from 'react';
import {Link } from 'react-router-dom';
import './SummerCamp.css';
import summerbannerimg from '../../images/summer-academic-banner.jpg';

import Sidebar from './Sidebar.js';

function SummerCamp() {


  const dailySchedule =[
    {
      day:'Cybersecurity Kickoff & Icebreakers'
    },
    {
      day:'Ethical Hacking Workshop'
    },
    {
      day:'Network Defense & Group Projects'
    },
    {
      day:'Awareness Challenge & Presentations'
    },
    {
      day:'Closing Ceremony & Awards'
    }
  ]
  
  return (
    <div className='summerCamp'>
      
      <div className='banner-container'>
        <img  className="cpm-banner" src={summerbannerimg} alt="banner-image"  />
      </div>

      <div className='empty-container'>
        <div></div>
      </div>

      <div className="outercontainer">
        <div className='leftsidecontent'>
        <Sidebar />
        </div>
        <div className='content-container'>
         
            <div>
             <h1 className='page-title'>Welcome to the Cybersecurity Summer Camp!</h1>
      <p>Prepare to embark on an exciting journey into the world of cybersecurity. 
        This immersive summer camp, hosted by Bowling Green state university, is designed exclusively for high school students passionate 
        about technology and digital safety. Learn how to protect critical assets, safeguard privacy, and build skills 
        for one of the fastest-growing industries.</p>

      <p>Participants will experience hands-on activities, solve real-world 
        challenges, and gain insights from industry experts. Whether you're a beginner 
        or have some tech experience, our program is designed to expand your knowledge, 
        foster critical thinking, and ignite your passion for cybersecurity.</p>
              </div>

            <div className='wrapped-box'>
              <div className='wrapped-content'>
                <h2>Hands-On Skills for <em>Future Cyber Defenders</em> at BGSU</h2>
                <ul>
                  <li>
                    <strong>Ethical Hacking: </strong>
                    Cybersecurity professionals use controlled hacking techniques to identify system vulnerabilities. 
                    These methods simulate real-world attack scenarios to test network defenses. By understanding hacker methodologies, 
                    professionals can develop robust protective strategies and anticipate potential security breaches.
                  </li>
                  <li>
                    <strong>Network Security: </strong>
                    Networks form the critical infrastructure of digital communication and data exchange. Protecting these networks
                     involves implementing multi-layered defense mechanisms against unauthorized access and potential cyber intrusions. 
                  </li>
                  <li>
                    <strong>Network Security: </strong>
                    Understand how to identify and respond to common cyber risks. Recognizing potential digital threats requires comprehensive knowledge 
                    of social engineering tactics and technological vulnerabilities. Developing a proactive mindset helps individuals and organizations.
                  </li>
                  <li>
                    <strong> State-of-the-art facilities: </strong>
                    Our BGSU Digital Forensics and Cybersecurity Lab is equipped with industry-standard tools and technology. 
                    This advanced lab provides opportunities to engage in realistic cybersecurity scenarios – 
                   from forensic investigations to vulnerability assessments.
                  </li>
                  
                </ul>
              </div>
            </div>

            <div className="elgibility">
              <h4>Elgibility</h4>
              <ul>
                <li>High school students passionate about technology and digital safety.</li>
                <li>Future defenders eager to explore ethical hacking, network security, and digital defense techniques.</li>
                <li>Participants who want hands-on experience in state-of-the-art cybersecurity lab.</li>
              </ul>

              <h4>Highlights</h4>
              <ul>
                <li>Cybersecurity camp for everyone! No prior knowledge in coding or cybersecurity needed.</li>
                <li>Hands-on learning experience in the state of the art cybersecurity & digital forensics lab.</li>
                <li>Learn to be a cyberguardian in the digital world through games and other fun activities.</li>
              </ul>
            </div>

            <div className="mid-bar">
              <div className='container'>
                 <div className="mid-bar-heading">
                  <strong>Event <em>schedule</em></strong>
                 </div>
                 <div className='gridcontainer'>
                  {dailySchedule.map((schedule,index)=>{
                    return(
                      <div className='griditem' key={index}>
                       <div className="daytask">{schedule.day}</div>
                      </div>
                    )
                  })}
                 
                 </div>
              </div>
            </div>

            <div className='register'>
              <span className="btn"><a href="#">Register Now</a></span>
            </div>

            <div className="back-navigation">
        <Link to="/" className="back-link">← Back to Home</Link>
      </div>
      
     </div>

    
     
      
      </div>

      

    </div>
  );
}

export default SummerCamp;