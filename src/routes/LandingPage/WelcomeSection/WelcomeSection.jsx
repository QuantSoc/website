import React, { useEffect, useRef, useState } from 'react';
import './index.less';

const WelcomeSection = ({ hideRedirect = false }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startCounting();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (counterRef.current) observer.observe(counterRef.current);
    return () => observer.disconnect();
  }, []);

  const startCounting = () => {
    const duration = 1500;
    const target = 400;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);
  };

  return (
    <section className="empowering-section">
      <h1>
        Welcome to UNSW's <span className="highlight-text">greatest</span> community for quantitative trading
      </h1>
    </section>
  );
};

export default WelcomeSection;
