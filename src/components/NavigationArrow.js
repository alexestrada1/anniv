// components/NavigationArrow.js
import React from 'react';
import '../css/NavigationArrow.css'; // Assuming you have a CSS file for styling

const NavigationArrow = ({ onClick, disabled }) => {
  return (
    <div
      onClick={disabled ? undefined : onClick}
      className={`next-arrow ${disabled ? 'disabled' : ''}`}
    >
      <span>→</span>
    </div>
  );
};

export default NavigationArrow;