import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import './ActivityCarousel.css';
import summerCampImg from '../../images/CODE4hermentors-web.jpg';
import springCampImg from '../../images/Julia-Grummel-web.jpg';
import workshopsImg from '../../images/Sankardas-Roy.jpg';

function ActivityCarousel() {
  // State to keep track of the currently displayed slide
  const [currentSlide, setCurrentSlide] = useState(0);

  // State for drag interaction
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  // Ref for the carousel track to get its dimensions
  const carouselTrackRef = useRef(null);

  // Ref to manage the automatic slide interval
  const intervalRef = useRef(null);

  // Array of activities to be displayed in the carousel
  const activities = [
    {
      title: 'Summer Camp',
      description: 'Join our intensive summer cybersecurity program',
      link: '/summer-camp',
      image: summerCampImg
    },
    {
      title: 'Spring Camp',
      description: 'Explore cybersecurity during spring break',
      link: '/spring-camp',
      image: springCampImg
    },
    {
      title: 'Workshops',
      description: 'Participate in focused cybersecurity workshops',
      link: '/workshops',
      image: workshopsImg
    }
  ];

  // Calculate the positioning of slides for a circular carousel effect
  const getPosition = useCallback((index) => {
    const diff = index - currentSlide;
    const length = activities.length;
    
    // Handle wrapping to create a seamless circular navigation
    // This ensures slides wrap around correctly when navigating
    if (diff > length / 2) return diff - length;
    if (diff < -length / 2) return diff + length;
    return diff;
  }, [currentSlide, activities.length]);

  // Move to the next slide, wrapping around to the first slide if at the end
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % activities.length);
    // Reset drag-related states
    setDragOffset(0);
  }, [activities.length]);

  // Move to the previous slide, wrapping around to the last slide if at the beginning
  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + activities.length) % activities.length);
    // Reset drag-related states
    setDragOffset(0);
  }, [activities.length]);

  const startAutoSlide = useCallback(() => {
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    // Start a new interval
    intervalRef.current = setInterval(nextSlide, 5000);
  }, [nextSlide]);

  // Stop the automatic sliding interval
  const stopAutoSlide = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  // Handle mouse down event to start dragging
  const handleMouseDown = useCallback((e) => {
    if (!carouselTrackRef.current) return;
    
    // Stop auto-sliding when drag starts
    stopAutoSlide();
    
    setIsDragging(true);
    setStartX(e.clientX - carouselTrackRef.current.offsetLeft);
    
    // Prevent text selection during drag
    e.preventDefault();
  }, [stopAutoSlide]);

  // Handle mouse move event during dragging
  const handleMouseMove = useCallback((e) => {
    if (!isDragging || !carouselTrackRef.current) return;
    
    const currentX = e.clientX - carouselTrackRef.current.offsetLeft;
    const walk = (currentX - startX) * 1.5; // Adjust sensitivity
    
    setDragOffset(walk);
  }, [isDragging, startX]);

  // Handle mouse up/leave events to complete drag interaction
  const handleMouseUp = useCallback(() => {
    if (!isDragging) return;
    
    setIsDragging(false);
    
    // Determine if slide should change based on drag distance
    const threshold = carouselTrackRef.current 
      ? carouselTrackRef.current.offsetWidth * 0.2 
      : 100; // 20% of width or 100px
    
    if (dragOffset > threshold) {
      prevSlide();
    } else if (dragOffset < -threshold) {
      nextSlide();
    }
    
    // Reset drag offset
    setDragOffset(0);
    
    // Restart auto-sliding
    startAutoSlide();
  }, [isDragging, dragOffset, nextSlide, prevSlide, startAutoSlide]);

  const handleMouseLeave = useCallback(() => {
    if (isDragging) {
      setIsDragging(false);
      setDragOffset(0);
      
      // Restart auto-sliding
      startAutoSlide();
    }
  }, [isDragging, startAutoSlide]);

  // Start auto-sliding when component mounts
  useEffect(() => {
    startAutoSlide();
    
    // Cleanup interval on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [startAutoSlide]);

  // Add event listeners for mouse interactions
  useEffect(() => {
    const track = carouselTrackRef.current;
    
    if (track) {
      track.addEventListener('mousemove', handleMouseMove);
      track.addEventListener('mouseleave', handleMouseLeave);
      document.addEventListener('mouseup', handleMouseUp);
      
      // Cleanup event listeners
      return () => {
        track.removeEventListener('mousemove', handleMouseMove);
        track.removeEventListener('mouseleave', handleMouseLeave);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [handleMouseMove, handleMouseUp, handleMouseLeave]);

  return (
    <div 
      className="carousel-container"
      // Prevent default drag behavior
      onDragStart={(e) => e.preventDefault()}
    >
      {/* Container for carousel slides */}
      <h2 className="Activity-section-title">Activities</h2>
      <div 
        ref={carouselTrackRef}
        className="carousel-track"
        onMouseDown={handleMouseDown}
        style={{
          // Apply drag offset for smooth dragging experience
          transform: `translateX(${dragOffset}px)`,
          transition: isDragging ? 'none' : 'transform 0.3s ease'
        }}
      >
        {activities.map((activity, index) => {
          // Calculate the position of each slide relative to the current slide
          const position = getPosition(index);
          
          return (
            <div
              key={index}
              // Apply active class to the current slide, set z-index for proper layering
              className={`carousel-slide ${position === 0 ? 'active' : ''}`}
              style={{
                // Use CSS variable for positioning
                '--position': position,
                // Ensure current slide is on top of others
                zIndex: position === 0 ? 3 : 1
              }}
            >
              {/* Activity image */}
              <img
                src={activity.image}
                alt={activity.title}
                className="carousel-image"
                // Prevent image dragging
                draggable="false"
              />
              {/* Slide content */}
              <div className="carousel-content">
                <h3 className="carousel-title">{activity.title}</h3>
                <p className="carousel-description">{activity.description}</p>
                {/* Link to more details about the activity */}
                <Link to={activity.link} className="carousel-button">
                  Learn More
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Previous slide navigation button */}
      <button 
        className="carousel-nav prev" 
        onClick={() => {
          stopAutoSlide();
          prevSlide();
          startAutoSlide();
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      {/* Next slide navigation button */}
      <button 
        className="carousel-nav next" 
        onClick={() => {
          stopAutoSlide();
          nextSlide();
          startAutoSlide();
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </div>
  );
}

export default ActivityCarousel;