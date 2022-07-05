/* eslint-disable */
import React from 'react';

import QuantSocLogo from 'components/common/QuantSocLogo';
import { Typography } from 'antd';

import './index.scss';


const FooterBar = () => {

  return (
    <footer className="glb-foot">
      <HorizontalEOLBAR>
        <LogoWithText />
      </HorizontalEOLBAR>
      <div className="glb-foot-content-cont">
        <FooterColumn title="Contact us for Enquiries">
          <li>email: quantsoc.org.au</li>
        </FooterColumn>
        <FooterColumn title="Links">
          <li>Home</li>
          <li>Resources</li>
  <li>About Our Sponsors</li>
          <li>Github</li>
        </FooterColumn>
        <FooterColumn title="Our Social Media">
          <li>Discord Community</li>
          <li>Facebook Page</li>
          <li>Facebook Group</li>
          <li>LinkedIn</li>
        </FooterColumn>
      </div>
       {/* TODO: Add actualy C character */}
      <HorizontalEOLBAR>
        <span className="copyright-text">(c) 2022 QuantSoc UNSW</span>
      </HorizontalEOLBAR>
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

// Should really be its own component - copied from navbar
const LogoWithText = () => (
  <div className="badge">
    <QuantSocLogo type="circle" style={{ width: '3rem', height: '3rem' }} />
    <div className="title">uantsoc</div>
  </div>
);

const HorizontalEOLBAR = ({children}) => (
  <div className="horizontal-eol-bar-cont">
    { children }
    <div className="horizontal-eol-bar"/>
  </div>
)

export default FooterBar;
