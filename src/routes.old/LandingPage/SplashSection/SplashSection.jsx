import React from 'react';
import 'styles/index.less';

import { Typography } from 'antd';
import QuantSocLogo from 'components.old/common/QuantSocLogo';
import './index.less';
import LandingButton from 'components.old/common/LandingButton/LandingButton';

const { Text, Title } = Typography;

const blurbText =
  'UNSW QuantSoc is a new student society that aims to connect UNSW students interested in mathematical finance, quantitative trading and algorithmic market-making with opportunities to learn, socialise and network with like-minded students and industry partners.';

const SplashSection = () => {
  return (
    <div className="splash-section">
      <div className="quantsoc-logo">
        <QuantSocLogo type="circle" style={{ height: '100%', width: '100%' }} />
      </div>
      <div className="splash-cont">
        <div className="splash-title">
          <Title>UNSW QUANT SOC</Title>
        </div>
        <div className="splash-text">
          <Text>{blurbText}</Text>
        </div>
        <div className="splash-button">
          <LandingButton href="#footerBar">JOIN US</LandingButton>
        </div>
      </div>
    </div>
  );
};

export default SplashSection;
