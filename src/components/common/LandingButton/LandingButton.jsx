import { Button } from 'antd';
import React from 'react';

const LandingButton = (
  {
    children, style, className, href,
  },
) => {
  return (
    <Button
      href={href}
      type="primary"
      size="large"
      style={{
        fontSize: '1.2rem',
        ...style,
      }}
      className={className}
    >
      {children}
    </Button>
  );
};

export default LandingButton;
