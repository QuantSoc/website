import './index.less';
import { useEffect, useState, useRef } from 'react';
import QuantSocLogo from 'components/QuantSocLogo';

const HeroSectionNew = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const heroSectionRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 1000); // Delay the text fade-in by 1 second

    return () => clearTimeout(timer);
  }, []);

  const handleLearnMoreClick = () => {
    if (heroSectionRef.current) {
      const heroBottom = heroSectionRef.current.getBoundingClientRect().bottom + window.scrollY;

      window.scrollTo({
        top: heroBottom,
        behavior: 'smooth'
      });
    }
  };

  const handleJoinUsClick = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSeDiJAo-U1_RqBir9yHpswIxyGlx6qlpUiQQW0-4gqAv-Flww/viewform', '_blank');
  };
  

  return (
    <div className="background-container" ref={heroSectionRef}>
      <div className="hero-content">
        <div className={`large-text ${fadeIn ? 'fade-in' : ''}`}>
          <div className="quantsoc-logo-wrapper">
            <div className="quantsoc-logo">
              <QuantSocLogo />
            </div>
            <div className="button-container">
              <button className="hero-button" onClick={handleLearnMoreClick}>Learn More</button>
              <button className="hero-button" id="join-button" onClick={handleJoinUsClick}>Join Us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionNew;
