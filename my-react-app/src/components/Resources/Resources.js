import React from 'react';
import ComputerSciencedept from '../../images/ComputerScience Dept.jpg';
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
        {resourceCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="resources-category">
            {category.title !== "Academic Resources" && (
              <h3 className="resources-category-title">{category.title}</h3>
            )}
            <div className="resources-category-items">
              {category.items.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="resources-card"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="resources-card-media">
                    <img
                      src={ComputerSciencedept}
                      alt={item.name}
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
          </div>
        ))}
      </div>
    </>
  );
}

export default Resources;