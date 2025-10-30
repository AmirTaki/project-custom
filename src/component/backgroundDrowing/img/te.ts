import React, { useState, useRef, useEffect, useCallback } from 'react';

interface ImageSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

const SliderIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
  </svg>
);

export const ImageSlider: React.FC<ImageSliderProps> = ({ beforeImage, afterImage, beforeLabel = 'Before', afterLabel = 'After' }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const sliderContainerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!isDragging || !sliderContainerRef.current) return;

    const rect = sliderContainerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    
    setSliderPosition(percent);
  }, [isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
  };

  const handleEndDrag = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    handleMove(e.clientX);
  }, [handleMove]);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  }, [handleMove]);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('mouseup', handleEndDrag);
      window.addEventListener('touchend', handleEndDrag);
      
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('touchmove', handleTouchMove);
        window.removeEventListener('mouseup', handleEndDrag);
        window.removeEventListener('touchend', handleEndDrag);
      };
    }
  }, [isDragging, handleMouseMove, handleTouchMove, handleEndDrag]);

  return (
    <div
      ref={sliderContainerRef}
      className="relative w-full max-w-4xl aspect-[1.5/1] overflow-hidden select-none cursor-ew-resize rounded-lg shadow-2xl bg-slate-900"
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      {/* After Image (Bottom Layer) */}
      <img
        src={afterImage}
        alt="After"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        draggable={false}
      />
      <div className="absolute top-2 right-2 bg-black bg-opacity-60 text-white text-xs sm:text-sm px-2 py-1 rounded-md pointer-events-none">
        {afterLabel}
      </div>

      {/* Before Image (Top Layer, clipped) */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={beforeImage}
          alt="Before"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          draggable={false}
        />
        <div className="absolute top-2 left-2 bg-black bg-opacity-60 text-white text-xs sm:text-sm px-2 py-1 rounded-md pointer-events-none">
          {beforeLabel}
        </div>
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white/80 backdrop-blur-sm cursor-ew-resize pointer-events-none"
        style={{ left: `calc(${sliderPosition}% - 1px)` }}
      >
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-10 w-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transition-transform duration-200 hover:scale-110 pointer-events-auto"
        >
          <SliderIcon className="w-6 h-6 text-slate-700" />
        </div>
      </div>
    </div>
  );
};
