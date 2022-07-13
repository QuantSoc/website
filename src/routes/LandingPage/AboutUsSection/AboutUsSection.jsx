import React from 'react';

import { Typography } from 'antd';

const AboutUsSection = () => {
  const { Title } = Typography;

  return (
    <section className="about-us-section">
      <div className="about-us-cont">
        <div className="about-us-title">
          <Title level={2}>About Us</Title>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
