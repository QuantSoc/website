import React from 'react';
import { Button } from 'antd';
import ResourcesBlurb from './ResourcesBlurb';
import PageTitle from './PageTitle';

const ButtonStyle = {
  fontSize: '1.7em',
  height: '67px',
};

const ResourcesHeader = () => {
  return (
    <div className="ResourcesHeader">
      <PageTitle />
      <ResourcesBlurb />
      <Button type="primary" size="large" style={ButtonStyle}>
        SEE MORE...
      </Button>
    </div>
  );
};

export default ResourcesHeader;
