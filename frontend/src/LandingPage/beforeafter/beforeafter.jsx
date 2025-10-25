import React, { useState, useRef, useEffect } from "react";
import "./beforeafter.css";

const Beforeafter = () => {
  const [sliderPos, setSliderPos] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Restart animation every time
          setIsAnimating(true);
          setSliderPos(0); // Start from left
          setTimeout(() => {
            setSliderPos(50); // Move to center
          }, 50);

          setTimeout(() => {
            setIsAnimating(false);
          }, 1600);
        }
      },
      { threshold: 0.4 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const handleMove = (clientX) => {
    if (!containerRef.current || isAnimating) return;
    const bounds = containerRef.current.getBoundingClientRect();
    const position = ((clientX - bounds.left) / bounds.width) * 100;
    setSliderPos(Math.min(100, Math.max(0, position)));
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    if (isAnimating) return;
    const moveHandler = (event) =>
      handleMove(event.clientX || event.touches[0].clientX);
    const upHandler = () => {
      window.removeEventListener("mousemove", moveHandler);
      window.removeEventListener("touchmove", moveHandler);
      window.removeEventListener("mouseup", upHandler);
      window.removeEventListener("touchend", upHandler);
    };
    window.addEventListener("mousemove", moveHandler);
    window.addEventListener("touchmove", moveHandler);
    window.addEventListener("mouseup", upHandler);
    window.addEventListener("touchend", upHandler);
  };

  return (
    <div className="comparison-section" ref={containerRef}>
      <h2>
        There's no comparison.
        <br /> Honestly. We'll show you.
      </h2>
      <p className="subtitle">
        We help businesses transform ideas into impactful solutions.
        From strategy to execution, our process delivers measurable results
        that set you apart from the competition.
      </p>

      <div className="comparison-container">
        <img src="../asset/image/beforehi.jpeg" alt="Before" className="before-image" />

        <div
          className="after-image-wrapper"
          style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}
        >
          <img src="../asset/image/beforehi.png" alt="After" className="after-image" />
        </div>

        <div
          className={`divider-line ${isAnimating ? "animating" : ""}`}
          style={{ left: `${sliderPos}%` }}
        ></div>

        <div
          className={`slider-handle ${isAnimating ? "animating" : ""}`}
          style={{ left: `${sliderPos}%` }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
        >
          <div className="arrow left">‹</div>
          <div className="arrow right">›</div>
        </div>

        {sliderPos > 10 && <span className="label before-label">Before</span>}
        {sliderPos < 90 && <span className="label after-label">After</span>}
      </div>
    </div>
  );
};

export default Beforeafter;
