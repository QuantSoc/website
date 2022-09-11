import React from 'react';
import 'styles/index.scss';

import { Typography } from 'antd';
import QuantSocLogo from 'components/common/QuantSocLogo';
import './index.scss';
import LandingButton from 'components/common/LandingButton/LandingButton';

const { Text, Title } = Typography;

const blurbText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

const SplashSection = () => {
  return (
    <div className="splash-section">
      <div className="quantsoc-logo">
        <QuantSocLogo type="circle" style={{ height: '100%', width: '100%' }} />
      </div>
      <div className="splash-cont">
        <div className="splash-title">
          <Title>
            UNSW QUANT SOC
          </Title>
        </div>
        <div className="splash-text">
          <Text>
            { blurbText }
          </Text>
        </div>
        <div className="splash-button">
          <LandingButton>
            JOIN US
          </LandingButton>
        </div>
      </div>
    </div>
  );
};

export default SplashSection;
