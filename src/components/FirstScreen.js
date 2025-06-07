import React, { useState, useEffect } from 'react';
import gatitio from '../assets/images.jpg';
import '../css/FirstScreen.css';

const FirstScreen = ({ onNext }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`container ${isLoaded ? 'show' : ''}`}>
      <p 
        style={{ fontFamily: 'UcapSyukur' }} 
        className="welcome-text"
      >
        Happy One Year Anniversary
      </p>
      <img 
        src={gatitio} 
        alt="gatitio" 
        className="welcome-image"
      />
      <button 
        onClick={onNext}
        className="play-button"
      >
        Play!
      </button>
    </div>
  );
};

export default FirstScreen;