import React from 'react';

import './index.scss';
import bannerImage from 'assets/bannerimage.png';

const MainBannerSection = () => {
  return (
    <div className="main-banner">
      <div className="banner-text">
        <div className="banner-lcg">
          <div style={{ textAlign: 'start' }}>learn.</div>
          <div style={{ textAlign: 'center' }}>connect.</div>
          <div style={{ textAlign: 'end' }}>network.</div>
        </div>
        <div className="banner-desc">
          <span>
            We&apos;re here to help jumpstart
            your career by making
            Quantitative Finance a more
            beginner-friendly topic.
          </span>
        </div>
      </div>
      <div className="banner-image">
        <img src={bannerImage} alt="cool" width="100%" height="100%" />
      </div>
    </div>
  );
};

export default MainBannerSection;
