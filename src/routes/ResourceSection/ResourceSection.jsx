import React from 'react';
import { Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import image from 'assets/comingsoon.png';
import './index.scss';

const ButtonStyle = {
  fontSize: '1.2rem',
  height: '2.7rem',
  background: '#8234DA',
  borderColor: '#8234DA',
  borderRadius: '3px',
};

const resourcesBlurbText = 'See our resources from previous events and more!';

const ResourceSection = () => {
  return (
    <div className="resources-section">
      <div className="resources-header">
        <div className="resources-header-cont">
          <div className="resources-title">
            Resources
            <span className="resources-title-arrow">&gt; &gt; &gt;</span>
          </div>
          <div className="resources-blurb">{resourcesBlurbText}</div>
        </div>
        <Button
          type="primary"
          size="large"
          style={ButtonStyle}
        >
          See More
        </Button>
      </div>
      <div className="resources-layout">
        <ResourceBlock name="WORKSHOPS" />
        <ResourceBlock name="ARTICLES" />
        <ResourceBlock name="BLOGS" />
      </div>
    </div>
  );
};

const ResourceBlock = ({ name }) => {
  return (
    <div className="resource-block">
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

export default ResourceSection;
