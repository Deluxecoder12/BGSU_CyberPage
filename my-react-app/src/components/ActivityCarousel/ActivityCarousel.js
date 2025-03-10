import React, { useState, useEffect, useCallback, useRef } from 'react';
import './ActivityCarousel.css';
import EvaluatingCybersecurity from '../../images/cybersecurity_workforce.jpg';
import BuildingCybersecurity from '../../images/building_cybersecurity.jpg';
import Streamliningworkforce from '../../images/streamlining_workforce.jpg';
import Boostingcybersecurity from '../../images/boosting_cybersecurity.jpg';

const initiatives = [
    {
        title: 'Evaluating Cybersecurity Talent',
        description: 'Assess cybersecurity skills with stakeholders to identify gaps and improve education for future workforce needs.',
        link: '/talent-evaluation',
        image: EvaluatingCybersecurity
    },
    {
        title: 'Building Cybersecurity Pathways',
        description: 'Workshops, modules, and a summer camp with support for diversity and Accessibility Services for students.',
        link: '/pathways',
        image: BuildingCybersecurity
    },
    {
        title: 'Streamlining Workforce Resources',
        description: 'Collaborating with local institutions, sharing cybersecurity resources via websites, materials, and workshops.',
        link: '/resources',
        image: Streamliningworkforce
    },
    {
        title: 'Boosting Cybersecurity Workforce Retention',
        description: 'Aligning with NICE framework, incorporating virtual labs, and creating job fairs for internships.',
        link: '/retention',
        image: Boostingcybersecurity
    }
];

function ActivityCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [dragOffset, setDragOffset] = useState(0);
    const carouselTrackRef = useRef(null);
    const intervalRef = useRef(null);

    const getPosition = useCallback((index) => {
        const diff = index - currentSlide;
        const length = initiatives.length;
        if (diff > length / 2) return diff - length;
        if (diff < -length / 2) return diff + length;
        return diff;
    }, [currentSlide]);

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % initiatives.length);
        setDragOffset(0);
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev - 1 + initiatives.length) % initiatives.length);
        setDragOffset(0);
    }, []);

    const startAutoSlide = useCallback(() => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(nextSlide, 5000);
    }, [nextSlide]);

    const stopAutoSlide = useCallback(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    }, []);

    const handleMouseDown = useCallback((e) => {
        if (!carouselTrackRef.current) return;
        stopAutoSlide();
        setIsDragging(true);
        setStartX(e.clientX - carouselTrackRef.current.offsetLeft);
        e.preventDefault();
    }, [stopAutoSlide]);

    const handleMouseMove = useCallback((e) => {
        if (!isDragging || !carouselTrackRef.current) return;
        const currentX = e.clientX - carouselTrackRef.current.offsetLeft;
        const walk = (currentX - startX) * 1.5;
        setDragOffset(walk);
    }, [isDragging, startX]);

    const handleMouseUp = useCallback(() => {
        if (!isDragging) return;
        setIsDragging(false);
        const threshold = carouselTrackRef.current ? carouselTrackRef.current.offsetWidth * 0.2 : 100;
        
        if (dragOffset > threshold) {
            prevSlide();
        } else if (dragOffset < -threshold) {
            nextSlide();
        }
        setDragOffset(0);
        startAutoSlide();
    }, [isDragging, dragOffset, nextSlide, prevSlide, startAutoSlide]);

    const handleMouseLeave = useCallback(() => {
        if (isDragging) {
            setIsDragging(false);
            setDragOffset(0);
            startAutoSlide();
        }
    }, [isDragging, startAutoSlide]);

    useEffect(() => {
        startAutoSlide();
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [startAutoSlide]);

    useEffect(() => {
        const track = carouselTrackRef.current;
        if (track) {
            track.addEventListener('mousemove', handleMouseMove);
            track.addEventListener('mouseleave', handleMouseLeave);
            document.addEventListener('mouseup', handleMouseUp);
            
            return () => {
                track.removeEventListener('mousemove', handleMouseMove);
                track.removeEventListener('mouseleave', handleMouseLeave);
                document.removeEventListener('mouseup', handleMouseUp);
            };
        }
    }, [handleMouseMove, handleMouseUp, handleMouseLeave]);

    return (
        <div className="carousel-container" onDragStart={(e) => e.preventDefault()}>
            <h2 className="Activity-section-title">Our Cybersecurity Initiatives</h2>
            <div 
                ref={carouselTrackRef}
                className="carousel-track"
                onMouseDown={handleMouseDown}
                style={{
                    transform: `translateX(${dragOffset}px)`,
                    transition: isDragging ? 'none' : 'transform 0.3s ease'
                }}
            >
                {initiatives.map((initiative, index) => (
                    <div
                        key={index}
                        className={`carousel-slide ${getPosition(index) === 0 ? 'active' : ''}`}
                        style={{
                            '--position': getPosition(index),
                            zIndex: getPosition(index) === 0 ? 3 : 1
                        }}
                    >
                        <img
                            src={initiative.image}
                            alt={initiative.title}
                            className="carousel-image"
                            draggable="false"
                        />
                        <div className="carousel-content">
                            <h3 className="carousel-title">{initiative.title}</h3>
                            <p className="carousel-description">{initiative.description}</p>
                           
                        </div>
                    </div>
                ))}
            </div>

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