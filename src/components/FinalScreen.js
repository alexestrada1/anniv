import React, { useState, useEffect } from 'react';
import '../css/FinalScreen.css';

const FinalScreen = ({ onRestart }) => {
  const [timeData, setTimeData] = useState({
    years: 0,
    months: 0, 
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
  // Trigger entrance animation
  const animationTimer = setTimeout(() => {
    setShowContent(true);
  }, 200);

  // Set the reference date to June 11, 2024 at 8:00 AM
  const anniversaryDate = new Date("2024-06-11T08:00:00");

  const updateCounter = () => {
    const now = new Date();
    const diff = now - anniversaryDate;

    // Calculate time components
    const totalSeconds = Math.floor(diff / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);
    const totalDays = Math.floor(totalHours / 24);

    const years = Math.floor(totalDays / 365);
    const remainingDaysAfterYears = totalDays % 365;
    const months = Math.floor(remainingDaysAfterYears / 30);
    const days = remainingDaysAfterYears % 30;
    const hours = totalHours % 24;
    const minutes = totalMinutes % 60;
    const seconds = totalSeconds % 60;

    setTimeData({ years, months, days, hours, minutes, seconds });
  };

  // Call immediately and then every second
  updateCounter();
  const interval = setInterval(updateCounter, 1000);

  return () => {
    clearTimeout(animationTimer);
    clearInterval(interval);
  };
}, []);


  return (
    <div className="container show">
      <div className={`final-card ${showContent ? 'show' : ''}`}>
        <h1 className="final-title">
          Happy One Year, My Love ❤️
        </h1>
        
        <p className="final-message">
          Every moment with you has been a blessing. Here's to many more years filled with love, laughter, and endless joy together.
        </p>
        
        <div className="counter-container">
          <div className="counter-label">
            Time We've Spent Together:
          </div>
          
          <div className="counter-value">
            {Object.entries(timeData).map(([unit, value], index) => (
              <div 
                key={unit} 
                className={`counter-unit ${showContent ? 'show-counter' : ''}`}
                style={{ 
                  animationDelay: showContent ? `${index * 0.1 + 0.5}s` : '0s'
                }}
              >
                <div className="counter-number">
                  {value.toString().padStart(2, '0')}
                </div>
                <div className="counter-text">
                  {unit.charAt(0).toUpperCase() + unit.slice(1)}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <button
          onClick={onRestart}
          className={`reset-button ${showContent ? 'show-button' : ''}`}
        >
          🔄 Start Again
        </button>
      </div>
    </div>
  );
};

export default FinalScreen;