import React, { useRef, useState } from 'react';

export const PremiumCard = ({ children, className = '', style = {}, featured = false }) => {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return;
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
    setIsHovered(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
    setIsHovered(false);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`premium-card ${featured ? 'featured' : ''} ${className}`}
      style={style}
    >
      {/* Blue Spotlight (Default Ambient Glow) */}
      <div 
        className="spotlight"
        style={{
          opacity: isHovered ? 0 : opacity,
          transition: 'opacity 0.6s cubic-bezier(0.25, 1, 0.5, 1)',
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(45, 127, 249, 0.15), transparent 40%)`
        }}
      />
      
      {/* Red Spotlight (Hover Ambient Glow) */}
      <div 
        className="spotlight"
        style={{
          opacity: isHovered ? opacity : 0,
          transition: 'opacity 0.6s cubic-bezier(0.25, 1, 0.5, 1)',
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(229, 57, 80, 0.15), transparent 40%)`
        }}
      />
      
      <div className="card-content">
        {children}
      </div>
    </div>
  );
};
