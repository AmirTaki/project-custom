import React, { useRef, useState } from 'react';
import './styles.css'; // وارد کردن فایل استایل

const CustomHorizontalScroll = () => {
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // 1. شروع عملیات کشیدن (فشردن کلیک موس)
  const handleMouseDown = (e) => {
    setIsDragging(true);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.cursor = 'grabbing';
      setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
      setScrollLeft(scrollContainerRef.current.scrollLeft);
    }
  };

  // 2. پایان عملیات کشیدن (رها کردن کلیک موس یا خروج موس)
  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.cursor = 'grab';
    }
   
  };

  // 3. حرکت موس در حین کشیدن
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault(); // جلوگیری از رفتارهای پیش‌فرض مرورگر

    if (scrollContainerRef.current) {
      const x = e.pageX - scrollContainerRef.current.offsetLeft;
      const walk = (   x - startX) * 1.5; // ضریب 1.5 سرعت حرکت را بیشتر می‌کند
      scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  return (
    <div className='w-[90vw]'>
      <h3>اسکرول افقی بومی با قابلیت کشیدن ماوس</h3>

      <div
        className="scroll-container"
        ref={scrollContainerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
      >
        {/* محتوای شما در اینجا قرار می‌گیرد */}
        <div className="scroll-item">آیتم ۱</div>
        <div className="scroll-item">آیتم ۲</div>
        <div className="scroll-item">آیتم ۳</div>
        <div className="scroll-item">آیتم ۴</div>
        <div className="scroll-item">آیتم ۵</div>
        <div className="scroll-item">آیتم ۶</div>
        <div className="scroll-item">آیتم ۷</div>
        <div className="scroll-item">آیتم ۸</div>
      </div>
    </div>
  );
};

export default CustomHorizontalScroll;