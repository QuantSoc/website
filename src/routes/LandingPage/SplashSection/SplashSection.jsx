import React from 'react';
import { Button, Typography } from 'antd';
import 'styles/index.scss';

import QuantSocLogo from 'assets/crop_logo_circle.png';
import mobileQuantSocLogo from 'assets/logo_circle.png';

const { Text, Title } = Typography;

/* const blurbText = '' */

const SplashSection = () => {
  return (
    <div className="splash-section">
      {/* The thing on the right */}
      <div>
      </div>
    </div>
  );
};

const SplashHeader = () => {
  return (
    <div className="splash-header">
      <div className="unsw">UNSW</div>
      <div>QUANT</div>
      <div>SOC</div>
    </div>
  );
};

const SplashLayout = () => {
  return (
    <div className="splash-layout">
      <SplashHeader />
      {/* <SplashBlurb /> */}
      <SplashButton />
    </div>
  );
};

const SplashIcon = () => {
  return (
    <picture className="splash-icon">
      <source srcSet={mobileQuantSocLogo} media="(max-width: 700px)" />
      <img className="icon" src={QuantSocLogo} alt="quantsoc logo" />
    </picture>
  );
};

const SplashBlurb = () => {
  return (
    <div className="splash-blurb">
      Lorem ipsum dolor sit amet,
      consectetur adipiscing elit,
      sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua.
    </div>
  );
};


const ButtonStyle = {
  marginTop: '35px',
  fontSize: '1.3em',
  aspectratio: '1.51',
  background: '#8234DA',
  borderColor: '#8234DA',
  height: '54px',
  width: '12ch',
  // backgroundColor: '#8234DA',
};

// TODO: remove this component entirely
const SplashButton = () => {
  return (
    <Button type="primary" size="large" style={ButtonStyle}>
      <Text strong style={{ color: 'white' }}>
        Join Us
      </Text>
    </Button>
  );
};


export default SplashSection;
