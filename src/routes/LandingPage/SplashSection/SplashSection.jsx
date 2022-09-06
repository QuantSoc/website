import React from 'react';
import { Button, Typography } from 'antd';
import 'styles/index.scss';

import QuantSocLogo from 'assets/crop_logo_circle.png';
import mobileQuantSocLogo from 'assets/logo_circle.png';
import './index.scss';

const { Text, Title } = Typography;

/* const blurbText = '' */

const blurbText = 'To be, or not to be, that is a question: Whether it is nobler in the mind to suffer. The slings and arrows of outrageous fortune Or to take arms against a sea of troubles, And by opposing end them? To die: to sleep; No more; and by a sleep to say we end The heart-ache and the thousand natural shocks That flesh is heir to, \'tis a consummation Devoutly to be wish\'d. To die, to sleep To sleep- perchance to dream: ay, there\'s the rub! For in that sleep of death what dreams may come When we have shuffled off this mortal coil, Must give us pause. There \'s the respect That makes calamity of so long life--William Shakespeare';

const SplashSection = () => {
  return (
    <div className="splash-section">
      <img src={QuantSocLogo} alt="QuantSoc Logo" className="quantsoc-logo"/>
      {/* The thing on the right */}
      <div className="splash-cont">
        <Title>
          UNSW QUANT SOC
        </Title>
        <Text>
          { blurbText }
        </Text>
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
