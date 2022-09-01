import React from 'react';
import './index.scss';

import placeholder from '../../../assets/about_us_placeholder.png';

import { Typography } from 'antd';

const AboutUsSection = () => {
  const { Title } = Typography;

  const aboutUsTextBase = 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.';
  const aboutUsText = aboutUsTextBase + aboutUsTextBase + aboutUsTextBase;

  return (
    <div className="about-us-section">
        <div className="about-us-cont">
          <div className="about-us-text-cont">
            <Title level={2} className="about-us-title">ABOUT US</Title>
            <p className="about-us-text">{aboutUsText}</p>
            <p className="about-us-text">{aboutUsText}</p>
          </div>
          <AboutUsImg imageSrc={placeholder} altText="Circle of mathematical symbols" />
        </div>

    </div>
  );
};


const AboutUsImg = ({imageSrc, altText}) => {
  return (
    <div className='about-us-img-cont'>
      <img className="about-us-img"
        src={imageSrc}
        alt={altText}
      />
    </div>
  );
}

export default AboutUsSection;
