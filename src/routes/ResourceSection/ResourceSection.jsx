import React from 'react';
import './index.scss';
import {ResourcesDivider, ResourcesHeader, ResourcesLayout} from './components';

const ResourceSection = () => {
  return (
    <div className="ResourceSection">
      <ResourcesHeader />
      <ResourcesDivider />
      <ResourcesLayout />
    </div>
  );
};
export default ResourceSection;
