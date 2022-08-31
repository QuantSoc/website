import React from 'react';
import { RightOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const ButtonStyle = {
  marginTop: '35px',
  height: '67px',
};

const ResourceButton = ({ name }) => {
  return (
    <Button type="primary" size="large" style={ButtonStyle}>
      { name }
      <span><RightOutlined /></span>
    </Button>
  );

  // return (
  //   <button type="button" className="ResourceButton">
  //     <div>{name}</div>
  //     <span><RightOutlined /></span>
  //   </button>
  // );
};

export default ResourceButton;
