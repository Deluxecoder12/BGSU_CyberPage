import React from 'react';
import './Promotions.css';
import PromotionalImage1 from '../../images/promotionalimg-1.jpg';
import PromotionalImage2 from '../../images/promotionalimg-2.jpg';
import PromotionalImage3 from '../../images/promotionalimg-3.jpg';
import PromotionalImage4 from '../../images/promotionalimg-4.jpg';
import PromotionalImage5 from '../../images/promotionalimg-5.jpg';
import PromotionalImage6 from '../../images/promotionalimg-6.jpg';
import PromotionalImage7 from '../../images/promotionalimg-7.jpg';
import PromotionalImage8 from '../../images/promotionalimg-8.jpg';
import PromotionalImage9 from '../../images/promotionalimg-9.jpg';
import PromotionalImage10 from '../../images/promotionalimg-10.jpg';

const Promotions = () => {
  const promotionalImages = [
    {
      id: 1,
      src: PromotionalImage1,
      alt: 'Winter Sledding Fun'
    },
    {
      id: 2,
      src: PromotionalImage2,
      alt: 'Campus Cafe'
    },
    {
      id: 3,
      src: PromotionalImage3,
      alt: 'Evening Gathering'
    },
    {
      id: 4,
      src: PromotionalImage4,
      alt: 'Snow Day'
    },
    {
      id: 5,
      src:PromotionalImage5,
      alt: 'BGSU Sign'
    },
    {
      id: 6,
      src: PromotionalImage6,
      alt: 'Winter Campus'
    },
    {
      id: 7,
      src: PromotionalImage7,
      alt: 'Dog Training'
    },
    {
      id: 8,
      src: PromotionalImage8,
      alt: 'Basketball Celebration'
    },
    {
      id: 9,
      src: PromotionalImage9,
      alt: PromotionalImage9
    },
    {
      id: 10,
      src: PromotionalImage10,
      alt: 'Mascot Event'
    }
  ];

  return (
   <div>
    <h2 className="Promotions-section-title">Activities</h2>
    <div className="promotions-container">
      {/* First row - 3 images */}
      <div className="row-three">
        {promotionalImages.map(image => (
          image.id <= 3 && (
            <div key={image.id} className="image-wrapper">
              <img
                src={image.src}
                alt={image.alt}
                className="promotion-image"
              />
            </div>
          )
        ))}
      </div>

      {/* Second row - 4 images */}
      <div className="row-four">
        {promotionalImages.map(image => (
          image.id >= 4 && image.id <= 7 && (
            <div key={image.id} className="image-wrapper">
              <img
                src={image.src}
                alt={image.alt}
                className="promotion-image"
              />
            </div>
          )
        ))}
      </div>

      {/* Third row - 3 images */}
      <div className="row-three">
        {promotionalImages.map(image => (
          image.id >= 8 && (
            <div key={image.id} className="image-wrapper">
              <img
                src={image.src}
                alt={image.alt}
                className="promotion-image"
              />
            </div>
          )
        ))}
      </div>
    </div>
    </div>
  );
};

export default Promotions;