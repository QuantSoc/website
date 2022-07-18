/* eslint-disable react/jsx-no-target-blank */
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
          <FooterLink text="email: quantsoc.org.au" newTab link="mailto:quantsoc.org.au" />
        </FooterColumn>
        <FooterColumn title="Links">
          <FooterLink text="Home" link="/" />
          <FooterLink text="Resources" link="/resources" />
          <FooterLink text="About Our Sponsors" link="/sponsors" />
          <FooterLink text="Github" newTab link="https://github.com/QuantSoc/" />
        </FooterColumn>
        <FooterColumn title="Our Social Media">
          <FooterLink text="Discord Community" newTab link="https://discord.gg/2qYRNKubRz" />
          <FooterLink text="Facebook Page" newTab link="https://www.facebook.com/unswquantsoc" />
          <FooterLink text="LinkedIn" newTab link="https://www.linkedin.com/company/quantsoc" />
        </FooterColumn>
      </div>
      <HorizontalEOLBAR>
        <span className="copyright-text">&copy; 2022 QuantSoc UNSW</span>
      </HorizontalEOLBAR>
    </footer>
  );
};

const FooterLink = ({ link, text, newTab }) => {
  return (
    <a
      className="footer-link"
      href={link}
      target={newTab ? '_blank' : ''}
    >
      <li>
        {text}
      </li>
    </a>
  );
};

const FooterColumn = ({ title, children }) => {
  const { Title } = Typography;
  return (
    <div className="glb-foot-section">
      <div className="glb-foot-head">
        <Title strong level={5} className="glb-foot-head-h5">
          { title }
        </Title>
      </div>
      <div className="glb-foot-content">
        { children }
      </div>
    </div>
  );
};

// Should really be its own component - copied from navbar
const LogoWithText = () => {
  return (
    <div className="badge">
      <QuantSocLogo type="circle" style={{ width: '3rem', height: '3rem' }} />
      <div className="title">uantsoc</div>
    </div>
  );
};

const HorizontalEOLBAR = ({ children }) => {
  return (
    <div className="horizontal-eol-bar-cont">
      { children }
      <div className="horizontal-eol-bar" />
    </div>
  );
};

export default FooterBar;
