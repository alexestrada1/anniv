// components/SecondScreen.js
import React, { useEffect, useRef } from 'react';
import '../css/SecondScreen.css'; // Assuming you have a CSS file for styling
import train from '../assets/Train.webp'
import dog from '../assets/dog.jpg';

const SecondScreen = () => {
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      startAnimation();
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const startAnimation = () => {
    const img1 = img1Ref.current;
    const img2 = img2Ref.current;
    const container = containerRef.current;

    if (!img1 || !img2 || !container) return;

    const collisionX = () => {
      const containerWidth = container.clientWidth;
      const img2CenterX = containerWidth / 2;
      return img2CenterX - img1.clientWidth;
    };

    let posX = 0;
    const speed = 1;

    const animate = () => {
      if (posX < collisionX()) {
        posX += speed;
        if (posX > collisionX()) posX = collisionX();
        img1.style.left = posX + "px";
        requestAnimationFrame(animate);
      } else {
        img2.classList.add('tumble');
      }
    };

    animate();
  };

  return (
    <div className="second-screen show">
      <div ref={containerRef} className="animation-area">
        <img 
          ref={img1Ref}
          src={train} 
          alt="Train" 
          className="img1"
        />
        <img 
          ref={img2Ref}
          src={dog} 
          alt="Target" 
          className="img2"
        />
      </div>
      <p className="love-text">How hard your beauty hit me</p>
    </div>
  );
};

export default SecondScreen;