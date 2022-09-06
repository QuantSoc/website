import React from 'react';
import image from 'assets/comingsoon.png';
import { Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';

const ButtonStyle = {
  fontSize: '1.7em',
  height: '67px',
};

const ResourceBlock = ({ name }) => {
  return (
    <div className="ResourceBlock">
      <img className="image" src={image} alt="coming soon" />
      <br />
      <Button type="primary" size="large" style={ButtonStyle}>
        {name}
        <RightOutlined />
      </Button>
    </div>
  );
};

export default ResourceBlock;
