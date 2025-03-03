
import eventGathering from 'assets/quantsoc-graphics/event-gathering-alt.svg';
import { useState, useEffect } from 'react';

import './index.less';

const HeroSection = () => {

  const [loaded, setLoaded] = useState(false);


  return (
    <section className="hero-section">
      <div className="hero-item">
        <img
          src={eventGathering}
          alt="quantsoc-hero-section-event-gathering-graphic"
          className="hero-img"
          loading="eager"
        />
      </div>

      <div className="hero-item stack">
        <h1 className="hero-heading">The Official Quantsoc Newsletter</h1>
        <p className="text-body">
        Welcome to our fortnightly newsletter! Our team has been hard at work to bring you the latest financial news, 
        exciting job opportunities, and details about our upcoming events. 
        <br /> Stay informed and connected with us as we keep you updated on all the important happenings.
        </p>

        {/* PUT FORM HERE */}

        <iframe
          className={`newsletter-form ${loaded ? 'loaded' : ''}`}
          scrolling="no"
          src="https://dashboard.mailerlite.com/forms/829979/147821366068905374/share"
          onLoad={() => setLoaded(true)}
        />
      </div>
    </section>
  );
};
export default HeroSection;

