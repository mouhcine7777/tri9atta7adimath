import React, { useState } from 'react';
import './Slider.css'; // For styling

const Slider = () => {
  const images = [
    '../EQ_01.png',
    '../EQ_02.png',
    '../EQ_03.png',
    '../EQ_04.png',
    '../EQ_05.png',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
      <button className="arrow left" onClick={prevSlide}>
        &#8592;
      </button>
      <button className="arrow right" onClick={nextSlide}>
        &#8594;
      </button>
    </div>
  );
};

export default Slider;
