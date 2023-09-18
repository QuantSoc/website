import React from 'react';
import { RightOutlined } from '@ant-design/icons';
import image from 'assets/comingsoon.png';
import './index.less';
import LandingButton from 'components.old/common/LandingButton/LandingButton';

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
        <LandingButton href="/resources">See More</LandingButton>
      </div>
      <div className="resources-layout">
        <ResourceBlock name="WORKSHOPS" href="/resources" />
        <ResourceBlock name="ARTICLES" href="/resources" />
        <ResourceBlock name="BLOGS" href="/resources" />
      </div>
    </div>
  );
};

const ResourceBlock = ({ name, href }) => {
  return (
    <div className="resource-block">
      <div>
        <img className="image" src={image} alt="coming soon" />
      </div>
      <div>
        <LandingButton href={href}>
          {name}
          <RightOutlined />
        </LandingButton>
      </div>
    </div>
  );
};

export default ResourceSection;
