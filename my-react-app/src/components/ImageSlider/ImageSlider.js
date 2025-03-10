import React, {useState, useEffect} from 'react';
import './imageSlider.css';
import summerCampImg from '../../images/CODE4hermentors-web.jpg';
import springCampImg from '../../images/Julia-Grummel-web.jpg';
import workshopsImg from '../../images/Sankardas-Roy.jpg';

const ImageSlider = ({slides}) =>{
  
    const[currentIndex,setCurrentIndex] = useState(0);
    

   const showSlide = (index) =>{
      let newIndex;
      if(index >= slides.length){
       newIndex=0;
      }
      else if(index < 0){
        newIndex = slides.length - 1;
      }
      else{
        newIndex = index;
      }
      setCurrentIndex(newIndex);
   }

   const goToNext = () => {
    showSlide(currentIndex + 1);
  }

  const goToPrevious = () => {
    showSlide(currentIndex - 1);
  };


    useEffect(()=>{
       const intervalId = setInterval(()=>{
        showSlide(currentIndex +1)
       },2000)

       return () => clearInterval(intervalId);
    },[currentIndex,showSlide])


    return(
        <div className='slider-container'>

<button className="slider-arrow prev-arrow" onClick={goToPrevious}>
        &#10094;
      </button>

        <div 
  className="slider" 
  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
>
{slides.map((slide,index) => (
  <div className='slide' key={index}>
    <img src={slide} alt="Image1"></img>
    </div>
))}

</div>

<button className="slider-arrow next-arrow" onClick={goToNext}>
        &#10095;
      </button>

<div className='slider-dots'>
    {slides.map((_,index) => (
        <span key={index} onClick={()=> showSlide(index)} className={`dot ${currentIndex === index ? 'active' : ''}`}></span>
    ))}
</div>
        </div>
    )
}


export default ImageSlider;

