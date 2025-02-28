import './index.less';
import { useEffect, useState } from 'react';
import QuantSocLogo from 'components/QuantSocLogo';


const HeroSectionNew = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 1000); // Delay the text fade-in by 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="background-container">
      <div className="hero-content">
        <div className={`large-text ${fadeIn ? 'fade-in' : ''}`}>
          <div class="quantsoc-logo-wrapper">
          <div class="quantsoc-logo">
          <QuantSocLogo />
          </div>
        </div>

      </div>
    </div>
    </div>

  );
};

export default HeroSectionNew;
