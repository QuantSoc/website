import React from 'react';
import { Button } from 'antd';
// TODO: go absolute
import useMediaQuery from '../../hooks/useMediaQuery';
import { ResourcesDivider } from './ResourceSectionComponents';
import ResourceBlock from './ResourceSectionComponents/ResourceBlock';
import './index.scss';

const ButtonStyle = {
  fontSize: '1.7em',
  height: '67px',
};

/* eslint-disable */
const ResourceSection = () => {
  const isSmall = useMediaQuery('(max-width: 768px)');

  console.log('isSmall', isSmall);

  return !isSmall ? (
    <div className="ResourceSection">
      <div className="ResourcesHeader">
        <PageTitle />
        <div className="ResourcesBlurb">See our resources from previous events and more!</div>
        <div>
          <Button type="primary" size="large" style={ButtonStyle}>
            SEE MORE...
          </Button>
        </div>
      </div>
      <ResourcesDivider />
      <div className="ResourcesLayout">
        <ResourceBlock name="WORKSHOPS" />
        <ResourceBlock name="ARTICLES" />
        <ResourceBlock name="BLOGS" />
      </div>
    </div>
  ) : (
    <div className="ResourceSection">
      YOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOoo
      YOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOoo
      YOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOoo
      YOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOoo
      YOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOoo
      YOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOoo
      YOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOoo
      YOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOoo
    </div>
  );
};

const ResourceSectionSmall = ({ isSmall }) => {
  return (
    <div className="ResourceSection">
      <div className="ResourcesHeader">
        <PageTitle isSmall={isSmall} />
        <div className="ResourcesBlurb">See our resources from previous events and more!</div>
        <div>
          <Button type="primary" size="large" style={ButtonStyle}>
            SEE MORE...
          </Button>
        </div>
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


const PageTitle = (isSmall) => {
  return (
    <div className="PageTitle">
      <span className="text">resources</span>
      {
        isSmall
        ? <span className="arrow">&gt; &gt; &gt;</span>
        : null
      }
    </div>
  );
};

export default ResourceSection;
