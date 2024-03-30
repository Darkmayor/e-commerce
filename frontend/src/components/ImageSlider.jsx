import React, { useState, useEffect } from 'react';
 

const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    const intervalId = setInterval(() => nextSlide(), 4000); 

    return () => {
      clearInterval(intervalId); 
    };
  }, [nextSlide]);

  return (
    <div className="slider mt-2">
      <button className="prev" onClick={prevSlide}>&#10094;</button>
      {images.map((image, index) => (
        <div key={index} className={index === currentImageIndex ? "slide active" : "slide"}>
          <img src={image} alt={`slide-${index}`} className="image" />
        </div>
      ))}
      <button className="next" onClick={nextSlide}>&#10095;</button>
    </div>
  );
};

export default ImageSlider;
