import React from 'react';
import './Modal.css';
import ImageSlider from '../ImageSlider/ImageSlider';

const Modal = ({ closeModal, event }) => {

    
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <button className="closeModalbtn" onClick={closeModal}>X</button>
       
        <ImageSlider slides={event.carouselImages} />
        
      </div>
    </div>
  );
};

export default Modal;
