
//https://www.youtube.com/watch?v=CCPZ6SsJVT8&t=4s
// https://swiperjs.com/demos#scrollbar
import React, { useState, useEffect, useRef } from 'react';
import './CubeSlider.css';

const images = [
  'https://swiperjs.com/demos/images/nature-1.jpg',
  'https://swiperjs.com/demos/images/nature-2.jpg',
  'https://swiperjs.com/demos/images/nature-3.jpg',
  'https://swiperjs.com/demos/images/nature-4.jpg',
];

export default function CubeTestOne() {
  const [index, setIndex] = useState(0);
  const startX = useRef(null);
  const endX = useRef(null);

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Mouse & touch gesture
  const handleStart = (x) => {
    startX.current = x;
  };

  const handleEnd = (x) => {
    endX.current = x;
    const distance = startX.current - endX.current;
    if (distance > 50) {
      setIndex((prev) => (prev + 1) % images.length); // swipe left
    } else if (distance < -50) {
      setIndex((prev) => (prev - 1 + images.length) % images.length); // swipe right
    }
  };

  return (
    <div
      className="cube-slider"
      onTouchStart={(e) => handleStart(e.touches[0].clientX)}
      onTouchEnd={(e) => handleEnd(e.changedTouches[0].clientX)}
      onMouseDown={(e) => handleStart(e.clientX)}
      onMouseUp={(e) => handleEnd(e.clientX)}
    >
      <div className="slider-wrapper" style={{ transform: `rotateY(-${index * 90}deg)` }}>
        {images.map((src, i) => (
          <div key={i} className="slide" style={{ backgroundImage: `url(${src})` }} />
        ))}
      </div>
      <button className="nav left" onClick={() => setIndex((prev) => (prev - 1 + images.length) % images.length)}>‹</button>
      <button className="nav right" onClick={() => setIndex((prev) => (prev + 1) % images.length)}>›</button>
    </div>
  );
}