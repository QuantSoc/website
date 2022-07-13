import React from 'react';

import { Typography } from 'antd';
import AboutUsImg from './AboutUsImg.svg';

const AboutUsSection = () => {
  const { Title } = Typography;

  const aboutUsTextBase = 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.';
  const aboutUsText = aboutUsTextBase + aboutUsTextBase + aboutUsTextBase;

  return (
    <section className="about-us-section">
      <div className="about-us-cont">
        <div className="about-us-title">
          <Title level={2}>About Us</Title>
        </div>
        <div className="about-us-content-cont">
          <div className="about-us-text-cont">
            <p className="about-us-text">{aboutUsText}</p>
          </div>
          <div className="about-us-img">
            <AboutUsImg />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
