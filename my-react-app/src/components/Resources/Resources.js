import React, { useState } from 'react';
import backgroundImage from '../../images/CODE4hermentors-web.jpg';

function Resources() {
  const [activeCategory, setActiveCategory] = useState(0);

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
    <section className="resources-accordion">
      <h2>Explore Our Resources</h2>
      {resourceCategories.map((category, index) => (
        <div key={index} className="accordion-category">
          <div 
            className={`category-header ${activeCategory === index ? 'active' : ''}`}
            onClick={() => setActiveCategory(activeCategory === index ? null : index)}
          >
          </div>
          {activeCategory === index && (
            <div className="category-links">
              {category.items.map((item, itemIndex) => (
                <a 
                  key={itemIndex} 
                  href={item.link} 
                  className="resource-link"
                  style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="link-content">
                    <h4>{item.name}</h4>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </section>
  );
}

export default Resources;