import { useEffect, useState } from 'react';
import './index.less';

const Carousel = ({ slides, hideArrows = false }) => {
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
    }, 5000);
    return () => {
      clearInterval(interval);
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
      {!hideArrows && (
        <div
          className="left arrow"
          onClick={goToPrevSlide}
          onKeyDown={goToPrevSlide}
          role="button"
          tabIndex={0}
        >
          ❰
        </div>
      )}
      {!hideArrows && (
        <div
          className="right arrow"
          onClick={goToNextSlide}
          onKeyDown={goToNextSlide}
          role="button"
          tabIndex={0}
        >
          ❱
        </div>
      )}
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
              role="button"
              tabIndex={0}
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
