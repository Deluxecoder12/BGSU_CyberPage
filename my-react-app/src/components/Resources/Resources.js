// Resources.jsx
import React from 'react';
import backgroundImage from '../../images/CODE4hermentors-web.jpg';
import './Resources.css';

function Resources() {

  const resourceCategories = [
    {
      title: "Academic Resources",
      items: [
        { 
          name: "BGSU Computer Science Department", 
          link: "https://www.bgsu.edu/cs",
          description: "Explore the core academic foundation of our cybersecurity program"
        }
      ]
    }
  ];

  return (
    <>
      <h2 className="resources-heading">Explore Our Resources</h2>
      <div className="resources-cards">
        {resourceCategories[0].items.map((item, index) => (
          <a 
            key={index}
            href={item.link}
            className="resources-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="resources-card-media">
              <img 
                src={backgroundImage} 
                alt=""
                className="resources-card-img"
              />
            </div>
            <div className="resources-card-content">
              <h3 className="resources-card-title">{item.name}</h3>
              <p className="resources-card-desc">{item.description}</p>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}

export default Resources;