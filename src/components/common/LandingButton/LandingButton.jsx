import { Button } from 'antd';
import React from 'react';

const LandingButton = ({ children, style }) => {
  return (
    <Button
      type="primary"
      size="large"
      style={{
        fontSize: '1.2rem',
        height: '2.7rem',
        ...style,
      }}
    >
      {children}
    </Button>
  );
};

export default LandingButton;
