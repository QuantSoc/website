import React from 'react';
import './index.scss';
import { Button } from 'antd';
import { ResourcesDivider } from './ResourceSectionComponents';
import ResourceBlock from './ResourceSectionComponents/ResourceBlock';

const ButtonStyle = {
  fontSize: '1.7em',
  height: '67px',
};

const PageTitle = () => {
  return (
    <div className="PageTitle">
      <span className="text">resources</span>
      <span className="arrow">&gt; &gt; &gt;</span>
    </div>
  );
};

const ResourceSection = () => {
  return (
    <div className="ResourceSection">
      <div className="ResourcesHeader">
        <PageTitle />
        <div className="ResourcesBlurb">See our resources from previous events and more!</div>
        <Button type="primary" size="large" style={ButtonStyle}>
          SEE MORE...
        </Button>
      </div>
      <ResourcesDivider />
      <div className="ResourcesLayout">
        <ResourceBlock name="WORKSHOPS" />
        <ResourceBlock name="ARTICLES" />
        <ResourceBlock name="BLOGS" />
      </div>
    </div>
  );
};
export default ResourceSection;
