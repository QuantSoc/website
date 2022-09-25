import React from 'react';
import './index.less';

import { Typography } from 'antd';
import placeholder from '../../../assets/about_us_placeholder.png';

const AboutUsSection = () => {
  const { Title } = Typography;

  const aboutUsTextP1 = 'Our goal is to cultivate an in-person and online community of like-minded students by on providing careers events, educational workshops, interview problem-solving sessions and theoretical reading groups aimed specifically at STEM students exploring highly quantitative or technological career pathways in finance and operations research.';
  const aboutUsTextP2 = 'What sets us apart from other UNSW student-run finance focussed societies?\nQuantitative finance is distinguished from other financial industries such as investment banking or equity by it\'s maths-heavy approach to financial theory, unique interview problems and specialised software engineering challenges. We\'re excited to be focusing in on the unique value that science, mathematics and computer science graduates can bring to private industry in the domains of financial engineering, stochastic time series analysis, mathematical optimisation, electronic trading infrastructure and statistical learning.';

  return (
    <div className="about-us-section">
      <div className="about-us-cont">
        <div className="about-us-text-cont">
          <Title level={2} className="about-us-title">ABOUT US</Title>
          <p className="about-us-text">{aboutUsTextP1}</p>
          <p className="about-us-text">{aboutUsTextP2}</p>
        </div>
        <AboutUsImg imageSrc={placeholder} altText="Circle of mathematical symbols" />
      </div>

    </div>
  );
};

const AboutUsImg = ({ imageSrc, altText }) => {
  return (
    <div className="about-us-img-cont">
      <img
        className="about-us-img"
        src={imageSrc}
        alt={altText}
      />
    </div>
  );
};

export default AboutUsSection;
