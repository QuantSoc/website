/* eslint-disable */
import React from 'react';

import { Typography } from 'antd';

import './index.scss';


const FooterBar = () => {

  return (
    <footer className="glb-foot">
      <FooterColumn title="Contact us for Enquiries">
        <li>email: quantsoc.org.au</li>
      </FooterColumn>
      <FooterColumn title="Links">
        <li>Home</li>
        <li>Resources</li>
        <li>About Our Sponsors</li>
      </FooterColumn>
      <FooterColumn title="Our Social Media">
        <li>Discord Community</li>
        <li>Facebook Page</li>
        <li>Facebook Group</li>
        <li>LinkedIn</li>
      </FooterColumn>
    </footer>
  );
};

const FooterColumn = ({ title, children }) => {
  const { Title } = Typography;
  return (
    <div className="glb-foot-section">
      <div className="glb-foot-head">
        <Title strong level={5}>{ title }</Title>
      </div>
      <div className="glb-foot-content">
        { children }
      </div>
    </div>
  )
}

export default FooterBar;
