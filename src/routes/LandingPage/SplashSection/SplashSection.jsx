import React from 'react';
import { Button, Typography } from 'antd';

import QuantSocLogo from 'components/common/QuantSocLogo';

import './index.scss';

const { Text, Title } = Typography;

const blurbText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
const ButtonStyle = {
  marginTop: '35px',
  fontSize: '1.3em',
  aspectratio: '1.51',
  height: '54px',
  width: '12ch',
};

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
          <Button style={ButtonStyle} type="primary">
            JOIN US
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SplashSection;
