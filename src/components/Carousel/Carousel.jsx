import { useEffect, useState } from 'react';
import './index.less';

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => {
      return prevIndex === 0 ? slides.length - 1 : prevIndex - 1;
    });
  };
  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => {
      return prevIndex === slides.length - 1 ? 0 : prevIndex + 1;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovering) {
        goToNextSlide();
      }
    }, 30000);
    return () => {
      return clearInterval(interval);
    };
  }, [isHovering]);

  const handleFocusEnter = () => {
    setIsHovering(true);
  };
  const handleFocusExit = () => {
    setIsHovering(false);
  };

  return (
    <div
      className="carousel"
      onMouseOver={handleFocusEnter}
      onFocus={handleFocusEnter}
      onMouseLeave={handleFocusExit}
    >
      {/* <div className="left arrow" onClick={goToPrevSlide}>
        ❰
      </div>
      <div className="right arrow" onClick={goToNextSlide}>
        ❱
      </div> */}
      <div
        className="inner"
        style={{ transform: `translate(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => {
          return (
            <div key={slide.id} className="slide">
              {slide.slide}
            </div>
          );
        })}
      </div>
      <div className="bullet-container">
        {slides.map((slide, slideIndex) => {
          return (
            <div
              key={slide.id}
              className={`slide-bullet ${
                currentIndex === slideIndex && 'selected'
              }`}
              onClick={() => {
                setCurrentIndex(slideIndex);
              }}
              onKeyDown={() => {
                setCurrentIndex(slideIndex);
              }}
              role="presentation"
            >
              •
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Carousel;
