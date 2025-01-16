// ActivityCarousel.js
import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './ActivityCarousel.css';

function ActivityCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [clickCount, setClickCount] = useState(0);
 

  const activities = [
    {
      title: 'Summer Camp',
      description: 'Join our intensive summer cybersecurity program',
      link: '/summer-camp',
      image: '/images/CODE4hermentors-web.jpg'
    },
    {
      title: 'Spring Camp',
      description: 'Explore cybersecurity during spring break',
      link: '/spring-camp',
      image: '/images/Julia-Grummel-web.jpg'
    },
    {
      title: 'Workshops',
      description: 'Participate in focused cybersecurity workshops',
      link: '/workshops',
      image: '/images/Sankardas-Roy.jpg'
    }
  ];

  const maxClicks = activities.length - 1; 

  const getPosition = useCallback((index) => {
    const diff = index - currentSlide;
    const length = activities.length;
    
    // Handle wrapping for cyclic behavior
    if (diff > length / 2) return diff - length;
    if (diff < -length / 2) return diff + length;
    return diff;
  }, [currentSlide, activities.length]);

  const nextSlide = useCallback(() => {
    if (clickCount < maxClicks) {
      setCurrentSlide((prev) => (prev + 1) % activities.length);
      setClickCount(prev => prev + 1);
    }
  }, [clickCount, maxClicks, activities.length]);

  const prevSlide = useCallback(() => {
    if (clickCount < maxClicks) {
        setCurrentSlide((prev) => (prev - 1 + activities.length) % activities.length);
        setClickCount(prev => prev + 1);
      }
  }, [clickCount, maxClicks, activities.length]);

  const isDisabled = clickCount >= maxClicks;

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [prevSlide, nextSlide]);

  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {activities.map((activity, index) => {
          const position = getPosition(index);
          
          return (
            <div
              key={index}
              className={`carousel-slide ${position === 0 ? 'active' : ''}`}
              style={{
                '--position': position,
                zIndex: position === 0 ? 3 : 1
              }}
            >
              <img
                src={activity.image}
                alt={activity.title}
                className="carousel-image"
              />
              <div className="carousel-content">
                <h3 className="carousel-title">{activity.title}</h3>
                <p className="carousel-description">{activity.description}</p>
                <Link to={activity.link} className="carousel-button">
                  Learn More
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      <button 
        className={`carousel-nav prev ${isDisabled ? 'disabled' : ''}`} 
        onClick={prevSlide}
        disabled={isDisabled}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button 
        className={`carousel-nav next ${isDisabled ? 'disabled' : ''}`} 
        onClick={nextSlide}
        disabled={isDisabled}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      {isDisabled && (
        <div className="carousel-message">
          Please use the "Learn More" button to explore the content
        </div>
      )}
    </div>
  );
}

export default ActivityCarousel;