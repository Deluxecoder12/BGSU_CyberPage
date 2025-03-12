import React, {useState} from 'react';
import './Collaborator.css';

const  TestCollaborator= () =>{
    const[expandedSection, setExpandedSection] = useState(null);


    const collaborators ={
        "State Government": {
      icon: "🏛️",
      count: 1,
      preview: "Ohio Deputy CISO",
      bgClass: "government-section",
      partners: ["Kevin Wohlever (Ohio Deputy CISO)"],

    },
    "Industry Partners": {
      icon: "🏢",
      count: 7,
      preview: "Interhack Corporation, Marathon Petroleum, and more",
      bgClass: "industry-section",
      partners: [
        "Interhack Corporation",
        "Nationwide Mutual Insurance",
        "Marathon Petroleum",
        "Hyland Software",
        "Western Reserve Group",
        "Owens Corning",
        "On Technology Partners Inc.",
      ],
    },
    "Education Partners": {
      icon: "🎓",
      count: 12,
      preview: "BGSU Firelands,University of Toledo, and more",
      bgClass: "education-section",
      partners: [
        "Terra State Community College",
        "University of Toledo",
        "Baldwin Wallace University",
        "BGSU Firelands",
        "Tiffin Columbian High School",
        "St. Francis De Sales School",
        "Ottawa Hills High School",
        "Bowling Green High School",
        "Perrysburg High School",
        "Toledo Public Schools",
        "Port Clinton High School",
        "EHOVE Career Center",
      ],
    },
    };

    const toggleSection = (section) =>{
        setExpandedSection(expandedSection === section ? null : section )
    }

    return(
        <div className="Collaborator-container" >
          <h2 className='Collaborator-section-title'>Our Collaborators</h2>
          <div className='partners-container'> 
        {Object.entries(collaborators).map(([section,details])=>(
            <div key={section} onClick={() => toggleSection(section)} className={`tsection-container ${details.bgClass}`}>
                <div className="tsection-header">
                    <span className="tsection-title">{details.icon} {section}</span>
                    <span className="chevron">{expandedSection === section ? "▼" : "▶"}</span>
                </div>
                
                {expandedSection === section && (
            <ul className="partner-list">
              {details.partners.map((partner, index) => (
                <li key={index}>{partner}</li>
              ))}
            </ul>
          )}
            </div>
        ))}
        </div>
        </div>
    )
}

export default TestCollaborator;