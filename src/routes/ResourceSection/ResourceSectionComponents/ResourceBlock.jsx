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
      <div>
        <img className="image" src={image} alt="coming soon" />
      </div>
      <div>
        <Button type="primary" size="large" style={ButtonStyle}>
          {name}
          <RightOutlined />
        </Button>
      </div>
    </div>
  );
};

export default ResourceBlock;
