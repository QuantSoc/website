import React from 'react';
import ResourcesBlurb from './ResourcesBlurb';
import ResourceButton from './ResourceButton';
import PageTitle from './PageTitle';

const ResourcesHeader = () => {
  return (
    <div className={styles.ResourcesHeader}>
      <PageTitle />
      <ResourcesBlurb />
      <ResourceButton name="SEE MORE ..." />
    </div>
  );
};

export default ResourcesHeader;
