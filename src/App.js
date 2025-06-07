// App.js
import React, { useState, useRef } from 'react';
import song from './assets/song.mp3';
import FirstScreen from './components/FirstScreen';
import SecondScreen from './components/SecondScreen';
import ThirdScreen from './components/ThirdScreen';
import FourthScreen from './components/FourthScreen';
import FinalScreen from './components/FinalScreen';
import NavigationArrow from './components/NavigationArrow';
import './App.css';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const totalScreens = 5;

  const handleNext = () => {
    if (currentScreen < totalScreens - 1) {
      setCurrentScreen(prev => prev + 1);
    }
  };

  const handleRestart = () => {
    setCurrentScreen(0);
  };

  // Start music when moving from first screen
  const handleStartMusic = () => {
    if (audioRef.current && !isPlaying) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((error) => {
        console.log('Audio play failed:', error);
        // Modern browsers require user interaction before playing audio
      });
    }
    handleNext();
  };

  // Toggle music on/off
  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch((error) => {
          console.log('Audio play failed:', error);
        });
      }
    }
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 0:
        return <FirstScreen onNext={handleStartMusic} />;
      case 1:
        return <SecondScreen />;
      case 2:
        return <ThirdScreen />;
      case 3:
        return <FourthScreen />;
      case 4:
        return <FinalScreen onRestart={handleRestart} />;
      default:
        return <FirstScreen onNext={handleStartMusic} />;
    }
  };

  return (
    <div className="app-container">
      {renderScreen()}
      
      {/* Navigation Arrow - only show after first screen and not on last screen */}
      {currentScreen > 0 && currentScreen < totalScreens - 1 && (
        <NavigationArrow 
          onClick={handleNext}
          disabled={false}
        />
      )}
      
      {/* Music Control Button - show after first screen */}
      {currentScreen > 0 && (
        <button 
          onClick={toggleMusic}
          style={{
            position: 'fixed',
            top: '20px',
            right: '20px',
            background: 'rgba(233, 30, 99, 0.8)',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            cursor: 'pointer',
            fontSize: '20px',
            zIndex: 1000
          }}
        >
          {isPlaying ? '🔊' : '🔇'}
        </button>
      )}
      
      {/* Background Music */}
      <audio 
        ref={audioRef}
        loop 
        preload="auto"
        style={{ display: 'none' }}
      >
        <source src={song} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default App;