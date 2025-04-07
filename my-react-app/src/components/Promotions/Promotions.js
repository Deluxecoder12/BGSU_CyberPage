import React,{useState, useEffect} from 'react';
import './Promotions.css';
import CyberGuardians from '../../images/Cyberguardians.jpg';
import Educyberworkshop from '../../images/Edu cyber workshop.jpg';
import Cyberedconnect from '../../images/Cybered connect works.jpg'
import CyberFuture from '../../images/CyberFuture.jpg'
import CyberFuture2 from '../../images/CyberFuture 2.jpg'
import CyberGuardiansImage1 from '../../images/Cyber guardian Image1.jpg';
import CyberGuardiansImage2 from '../../images/Cyber guardian Image2.jpg';
import CyberGuardiansImage3 from '../../images/Cyber guardian Image3.jpg';
import CyberGuardiansImage4 from '../../images/Cyber guardian Image4.jpg';
import CyberGuardiansImage5 from '../../images/Cyber guardian Image5.jpg';
import CyberGuardiansImage6 from '../../images/Cyber guardian Image6.jpg';
import EducyberImage1 from '../../images/Educyber Image1.jpg'
import EducyberImage2 from '../../images/Educyber Image2.jpg'
import EducyberImage3 from '../../images/Educyber Image3.jpg'
import EducyberImage4 from '../../images/Educyber Image4.jpg'
import EducyberImage5 from '../../images/Educyber Image5.jpg'
import EducyberImage6 from '../../images/Educyber Image6.jpg'
import CyberedImage1 from '../../images/Cybered Image1.jpg'
import CyberedImage2 from '../../images/Cybered Image2.jpg'
import CyberedImage3 from '../../images/Cybered Image3.jpg'
import CyberedImage4 from '../../images/Cybered Image4.jpg'
import Modal from '../Modal/Modal.js'


const Promotions = () => {

  const[openModal, setOpenModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      id:1,
      name:'BG CyberGuardians',
      image:CyberGuardians,
      date:'June 2024',
      alt:'Cyberguardians image',
      description: '5-day Cybersecurity summer camp for 8-10 graders',
      carouselImages: [CyberGuardiansImage2, CyberGuardiansImage1, CyberGuardiansImage3, CyberGuardiansImage4,
        CyberGuardiansImage5, CyberGuardiansImage6
      ]
    },
    {
      id:2,
      name:'EduCyber Workshop',
      image:Educyberworkshop,
      date:'June 2024',
      alt:'Educyber workshop image',
      description: 'one-day workshop to train high school teachers with cybersecurity materials to use in their classroom',
      carouselImages: [EducyberImage1, EducyberImage2, EducyberImage3,
        EducyberImage4, EducyberImage5, EducyberImage6
      ]
    },
    {
      id:3,
      name:'CyberEd Connect Workshop',
      image:Cyberedconnect,
      date:'February 2025',
      alt:'Cybered connect works image',
      description: 'Cybersecurity education workshop that bridges the State of Ohio, Local industry leaders and Cybersecurity educators',
      carouselImages: [CyberedImage1, CyberedImage2, CyberedImage3,
        CyberedImage4
      ]
    },
    {
      id:4,
      name:'CyberFuture Spring Camp',
      image:CyberFuture,
      date:'March 2025',
      alt:'CyberFuture spring camp image',
      description: '4 half-day Cybersecurity spring camp for 5-7 graders',
      carouselImages:[CyberFuture, CyberFuture2]
    }
  ]

  const handleEventClick = (event) => {
    setSelectedEvent(event); 
    setOpenModal(true); 
  };


  useEffect(() => {
    // Disable scrolling when modal is open
    if (openModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Cleanup function to reset body overflow when component unmounts or modal closes
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [openModal]);
  

  return (
    <div className="promotions-container">
    <h2 className="Promotions-section-title">Events</h2>
    <div className="event-grid">
      {events.map((event) => (
        <div key={event.id} className="event-box" onClick={ () => handleEventClick(event)}>
          <img src={event.image}  alt={event.alt} className="event-image" />

          <div className="event-overlay">
            <div className="overlay-content">
              <h3 className="event-name">{event.name}</h3>
              <p className="event-description">
                {event.description || "Learn more about this exciting event by clicking!"}
              </p>
            </div>
          </div>
          
          <div className="university-news-badge">{event.date}</div>
    
        </div>
      ))}
       
    </div>
    {openModal && <Modal event={selectedEvent} closeModal= {() => setOpenModal(false)}/>}
  </div>
  )
};

export default Promotions;