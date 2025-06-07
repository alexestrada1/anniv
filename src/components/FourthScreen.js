// components/FourthScreen.js
import React, { useState, useEffect, useRef } from 'react';
import img1 from '../assets/memories/img1.jpeg';
import img2 from '../assets/memories/img2.jpeg';
import img3 from '../assets/memories/img3.jpeg';
import img4 from '../assets/memories/img4.jpeg';
import img5 from '../assets/memories/img5.jpeg';
import img6 from '../assets/memories/img6.jpg';
import img7 from '../assets/memories/img7.jpeg';
import img8 from '../assets/memories/img8.jpeg';
import img9 from '../assets/memories/img9.jpeg';
import img10 from '../assets/memories/img10.jpg';



import '../css/FourthScreen.css'; // Assuming you have a CSS file for styling


const FourthScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const imagePaths = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10
  ];

  useEffect(() => {
    const startCarousel = () => {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % imagePaths.length);
      }, 3000);
    };

    startCarousel();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [imagePaths.length]);

  const startCarousel = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imagePaths.length);
    }, 3000);
  };

  const stopCarousel = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="container show">
      <h2 className="carousel-title">
        Our Memories
      </h2>
      
      <div 
        className="carousel-container"
        onMouseEnter={stopCarousel}
        onMouseLeave={startCarousel}
      >
        {imagePaths.map((path, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
          >
            <img
              src={path}
              alt={`Memory ${index + 1}`}
              className="carousel-image"
            />
          </div>
        ))}
        
        <div className="carousel-controls">
          {imagePaths.map((_, index) => (
            <div
              key={index}
              onClick={() => handleDotClick(index)}
              className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FourthScreen;