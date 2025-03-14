import './index.less';
import { useEffect, useState, useRef } from 'react';
import QuantSocLogo from './../../../assets/logo-quantsoc.svg';

import { BsFacebook, BsDiscord, BsLinkedin, BsInstagram, BsLink } from 'react-icons/bs';


const HeroSection = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const heroSectionRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 300); // Delay the text fade-in by 1 second

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
        <div className={`fadein-elements ${fadeIn ? 'fade-in' : ''}`}>
            <div className="quantsoc-title-container">
              <img src={QuantSocLogo} id="quantsoc-logo"></img>
              <div id='landing-title'>QuantSoc</div>
            </div>
            <div className="button-container">
              <button className="hero-button" onClick={handleLearnMoreClick}>Learn More</button>
              <button className="hero-button" id="join-button" onClick={handleJoinUsClick}>Join Us</button>
            </div>
            <div className="socials-container">
              <a href="https://discord.gg/2qYRNKubRz" target="_blank" rel="noopener noreferrer">
                  <BsDiscord />
              </a>
              <a href="https://www.facebook.com/unswquantsoc/" target="_blank" rel="noopener noreferrer">
                  <BsFacebook />
              </a>
              <a href="https://www.linkedin.com/company/quantsoc/" target="_blank" rel="noopener noreferrer">
                  <BsLinkedin />
              </a>
              <a href="https://www.instagram.com/quantsoc_unsw/" target="_blank" rel="noopener noreferrer">
                  <BsInstagram />
              </a>
          </div>

          </div>
      </div>
    </div>
  );
};

export default HeroSection;
