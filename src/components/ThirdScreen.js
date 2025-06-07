// components/ThirdScreen.js
import React, { useState, useEffect } from 'react';
import oso from '../assets/oso.gif'
import melt from '../assets/melt.gif';
import '../css/ThirdScreen.css'; // Assuming you have a CSS file for styling

const ThirdScreen = () => {
  const [showTitle, setShowTitle] = useState(false);
  const [showReasons, setShowReasons] = useState(false);

  useEffect(() => {
    const titleTimer = setTimeout(() => setShowTitle(true), 300);
    const reasonsTimer = setTimeout(() => setShowReasons(true), 1000);

    return () => {
      clearTimeout(titleTimer);
      clearTimeout(reasonsTimer);
    };
  }, []);

  const reasons = [
    "Your silly little jokes and your little giggles paired with your smile is so perfect",
    "How you can always make me smile by just being you", 
    "Everytime I see you, I feel myself inside start warming up and feel like im glowing",
    "Your love for your family and animals is so beautiful",
    "Allowing me to be myself and not judging me for it",
  ];

  return (
    <div className="container show">
      <h1 className={`text title ${showTitle ? 'show-title' : ''}`}>
        Reasons I love you
      </h1>
      
      <div className="love-wrapper">
        <img 
          src={melt} 
          alt="Left Heart" 
          className="side-img"
        />
        
        <ul className="love-list">
          {reasons.map((reason, index) => (
            <li 
              key={index}
              className={showReasons ? 'show-reason' : ''}
              style={{ 
                animationDelay: showReasons ? `${index * 0.4 + 0.8}s` : '0s'
              }}
            >
              {reason}
            </li>
          ))}
        </ul>
        
        <img 
          src={oso} 
          alt="Right Heart" 
          className="side-img"
        />
      </div>
    </div>
  );
};

export default ThirdScreen;