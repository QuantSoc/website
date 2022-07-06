import React from 'react';
import './index.scss';
import ResourcesLayout from './ResourcesLayout/ResourcesLayout';
import ResourcesHeader from './ResourcesHeader/ResourcesHeader';
import ResourcesDivider from './ResourcesDivider/ResourcesDivider';

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
