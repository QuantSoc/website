import React from 'react';

import './index.scss';
import bannerImage from 'assets/bannerimage.png';
import useMediaQuery from 'hooks/useMediaQuery';

const MainBannerSection = () => {
  const isDesktop = useMediaQuery('(min-width: 860px)');

  const imageComponent = (
    <div className="banner-image">
      <img src={bannerImage} alt="banner" width="100%" height="100%" />
    </div>
  );

  return (
    <div className="main-banner">
      <div className="banner-text">
        <div className="banner-lcg">
          <div style={{ textAlign: 'start' }}>learn.</div>
          <div style={{ textAlign: 'center' }}>connect.</div>
          <div style={{ textAlign: 'end' }}>network.</div>
        </div>
        {!isDesktop && imageComponent}
        <div className="banner-desc">
          <span>
            We&apos;re here to help jumpstart
            your career by making
            Quantitative Finance a more
            beginner-friendly topic.
          </span>
        </div>
      </div>
      {isDesktop && imageComponent}
    </div>
  );
};

export default MainBannerSection;
