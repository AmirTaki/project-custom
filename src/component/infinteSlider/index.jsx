import React, { useEffect, useMemo, useRef, useState } from "react";

export function InfiniteLoopSlider({
  items,
  renderItem,
  slideWidth,
  transitionMs = 400,
  autoplay,
  draggable = true,
  keyboard = true,
  initialIndex = 0,
  ariaLabel = "Infinite loop slider",
}) {
  const hasItems = items.length > 0;
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  // Virtual items: [last, ...items, first]
  const virtualItems = useMemo(() => {
    if (!hasItems) return [];
    const first = items[0];
    const last = items[items.length - 1];
    return [last, ...items, first];
  }, [items, hasItems]);

  const [vIndex, setVIndex] = useState(() =>
    hasItems ? Math.min(Math.max(initialIndex, 0), items.length - 1) + 1 : 0
  );
  const [containerW, setContainerW] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPointerDown, setIsPointerDown] = useState(false);

  const startXRef = useRef(0);
  const translateRef = useRef(0);
  const autoplayRef = useRef(null);
  const hoverPauseRef = useRef(false);
  const interactionPauseRef = useRef(false);

  const perSlideW = slideWidth ?? containerW;
  const trackW = perSlideW * virtualItems.length;
  const baseTranslate = -vIndex * perSlideW;

  const applyTransform = (x, withTransition) => {
    const track = trackRef.current;
    if (!track) return;
    translateRef.current = x;
    track.style.transition = withTransition ? `transform ${transitionMs}ms ease` : "none";
    track.style.transform = `translate3d(${x}px,0,0)`;
  };

  // Resize observer
  useEffect(() => {
    if (slideWidth) return;
    const updateSize = () => {
      if (containerRef.current) setContainerW(containerRef.current.clientWidth);
    };
    updateSize();
    const r = new ResizeObserver(updateSize);
    if (containerRef.current) r.observe(containerRef.current);
    return () => r.disconnect();
  }, [slideWidth]);

  useEffect(() => {
    applyTransform(baseTranslate, false);
  }, [perSlideW, virtualItems.length]);

  const goToVIndex = (nextVIndex) => {
    if (!hasItems || isTransitioning) return;
    setIsTransitioning(true);
    setVIndex(nextVIndex);
    applyTransform(-nextVIndex * perSlideW, true);
  };

  const next = () => goToVIndex(vIndex + 1);
  const prev = () => goToVIndex(vIndex - 1);

  const onTransitionEnd = () => {
    setIsTransitioning(false);
    if (vIndex === virtualItems.length - 1) {
      setVIndex(1);
      applyTransform(-perSlideW, false);
    } else if (vIndex === 0) {
      setVIndex(virtualItems.length - 2);
      applyTransform(-(virtualItems.length - 2) * perSlideW, false);
    }
  };

  // Dragging
  useEffect(() => {
    if (!draggable) return;
    const container = containerRef.current;
    if (!container) return;

    const threshold = Math.max(30, perSlideW * 0.1);

    const onPointerDown = (e) => {
      if (isTransitioning) return;
      setIsPointerDown(true);
      interactionPauseRef.current = !!autoplay?.pauseOnInteraction;
      container.setPointerCapture(e.pointerId);
      startXRef.current = e.clientX;
      applyTransform(baseTranslate, false);
    };

    const onPointerMove = (e) => {
      if (!isPointerDown) return;
      const delta = e.clientX - startXRef.current;
      applyTransform(baseTranslate + delta, false);
    };

    const finishDrag = (e) => {
      if (!isPointerDown) return;
      setIsPointerDown(false);
      container.releasePointerCapture(e.pointerId);
      const delta = e.clientX - startXRef.current;
      if (Math.abs(delta) >= threshold) {
        delta < 0 ? next() : prev();
      } else {
        applyTransform(baseTranslate, true);
      }
    };

    container.addEventListener("pointerdown", onPointerDown);
    container.addEventListener("pointermove", onPointerMove);
    container.addEventListener("pointerup", finishDrag);
    container.addEventListener("pointercancel", finishDrag);

    return () => {
      container.removeEventListener("pointerdown", onPointerDown);
      container.removeEventListener("pointermove", onPointerMove);
      container.removeEventListener("pointerup", finishDrag);
      container.removeEventListener("pointercancel", finishDrag);
    };
  }, [draggable, baseTranslate, perSlideW, isTransitioning, vIndex, autoplay]);

  // Keyboard
  useEffect(() => {
    if (!keyboard) return;
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [keyboard, vIndex]);

  // Autoplay
  useEffect(() => {
    if (!autoplay) return;
    const start = () => {
      stop();
      autoplayRef.current = setInterval(() => {
        if (!hoverPauseRef.current && !interactionPauseRef.current) next();
      }, autoplay.delay);
    };
    const stop = () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
        autoplayRef.current = null;
      }
    };
    start();
    return () => stop();
  }, [autoplay, vIndex]);

  useEffect(() => {
    if (!autoplay?.pauseOnHover) return;
    const el = containerRef.current;
    if (!el) return;
    const onEnter = () => (hoverPauseRef.current = true);
    const onLeave = () => (hoverPauseRef.current = false);
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [autoplay?.pauseOnHover]);

  const realCount = items.length;
  const realActive = (() => {
    if (!hasItems) return 0;
    if (vIndex === 0) return realCount - 1;
    if (vIndex === virtualItems.length - 1) return 0;
    return vIndex - 1;
  })();

  return (
    <div
      ref={containerRef}
      role="region"
      aria-label={ariaLabel}
      style={{ position: "relative", width: "100%", overflow: "hidden" }}
    >
      <div
        ref={trackRef}
        onTransitionEnd={onTransitionEnd}
        style={{ display: "flex", width: `${trackW}px`, willChange: "transform" }}
      >
        {virtualItems.map((item, i) => (
          <div key={i} style={{ flex: "0 0 auto", width: `${perSlideW}px` }} aria-hidden={i !== vIndex}>
            {renderItem(item, i)}
          </div>
        ))}
      </div>

      <button onClick={prev} style={btnStyle("left")}>‹</button>
      <button onClick={next} style={btnStyle("right")}>›</button>

      <div style={paginationStyle}>
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => goToVIndex(i + 1)}
            style={{ ...bulletStyle, opacity: realActive === i ? 1 : 0.4 }}
          />
        ))}
      </div>
    </div>
  );
}

const btnStyle = (side) => ({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  [side]: "8px",
  background: "rgba(0,0,0,0.5)",
  color: "#fff",
  border: "none",
  borderRadius: "50%",
  width: "36px",
  height: "36px",
  cursor: "pointer",
});

const paginationStyle = {
  position: "absolute",
  left: 0,
  right: 0,
  bottom: 8,
  display: "flex",
  justifyContent: "center",
  gap: 8,
};

const bulletStyle = {
  width: 8,
  height: 8,
  borderRadius: "50%",
  border: "none",
  background: "#fff",
  cursor: "pointer",
};
