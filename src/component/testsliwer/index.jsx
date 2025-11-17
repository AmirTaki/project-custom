import React, { useState, useRef, useEffect } from "react";

import "./styles.css";
import { DataSlider } from "./initial";

const CustomSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  const startX = useRef(0);
  const currentX = useRef(0);
  const isDragging = useRef(false);

  // autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % DataSlider.SliderGroup.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prev) =>
        (prev - 1 + DataSlider.SliderGroup.length) % DataSlider.SliderGroup.length
    );
  };

const handleStart = (x) => {
  isDragging.current = true;
  startX.current = x;
  currentX.current = x;
};

const handleMove = (x) => {
  if (!isDragging.current) return;
  currentX.current = x;
  const diff = currentX.current - startX.current;
  setDragOffset(diff); // مقدار کشیدن ذخیره می‌شود
};

const handleEnd = () => {
  if (!isDragging.current) return;
  const diff = currentX.current - startX.current;

  if (diff > 100) {
    prevSlide();
  } else if (diff < -100) {
    nextSlide();
  }
  setDragOffset(0); // ریست کردن
  isDragging.current = false;
};


  return (
    <div
      className="custom-slider w-[400px] pt-[50px] pb-[50px] relative overflow-hidden"
      onMouseDown={(e) => handleStart(e.clientX)}
      onMouseMove={(e) => handleMove(e.clientX)}
      onMouseUp={handleEnd}
      onTouchStart={(e) => handleStart(e.touches[0].clientX)}
      onTouchMove={(e) => handleMove(e.touches[0].clientX)}
      onTouchEnd={handleEnd}
    >
      <div className="slides flex justify-center items-center relative">
        {DataSlider.SliderGroup.map((item, index) => {
          const offset = index - activeIndex;

          // cube-effect
      let transformStyle = `translateX(${offset * 320 + dragOffset}px) 
                      rotateY(${offset * 90}deg) 
                      scale(${index === activeIndex ? 1 : 0.8})`;
          return (
            <div
              key={index}
              className={`slide absolute transition-all duration-700 ease-in-out w-[320px] bg-[#d1ebff] shadow-[0_15px_50px_rgba(0,0,0,.2)] rounded-[10px]`}
              style={{
                transform: transformStyle,
                opacity: index === activeIndex ? 1 : 0.5,
                zIndex: index === activeIndex ? 10 : 1,
              }}
            >
              <div className="relative w-full p-[40px] pt-[90px] text-[#999]">
                <img
                  className="absolute bottom-[5px] right-[3px] opacity-20"
                  src={item.img}
                  alt=""
                />
                <div>
                  <p>{item.content}</p>
                  <div className="flex items-center mt-[20px]">
                    <div className="relative w-[60px] h-[60px] rounded-full overflow-hidden mr-[10px]">
                      <img
                        className="absolute top-0 left-0 w-full h-full object-center"
                        src={item.imgDetails}
                        alt=""
                      />
                    </div>
                    <h3 className="text-[16px] font-[400] tracking-[1px] text-[#2196f3] leading-[1.1em]">
                      {item.title}
                      <br />
                      <span className="text-[#666] text-[12px]">{item.job}</span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination */}
      <div className="pagination flex justify-center mt-[20px]">
        {DataSlider.SliderGroup.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-[10px] h-[10px] rounded-full mx-[5px] ${
              index === activeIndex ? "bg-[#2196f3]" : "bg-[#ccc]"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default CustomSlider;
