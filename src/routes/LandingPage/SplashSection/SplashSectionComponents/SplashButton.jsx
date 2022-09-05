import React from 'react';
import { Button, Typography } from 'antd';
import '../index.scss';

const { Text } = Typography;

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

export default SplashButton;
