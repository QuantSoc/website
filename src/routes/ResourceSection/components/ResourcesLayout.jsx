import React from 'react';
import ResourceBlock from './ResourceBlock';

const ResourcesLayout = () => {
  return (
    <div className={styles.ResourcesLayout}>
      <ResourceBlock name="WORKSHOPS" />
      <ResourceBlock name="ARTICLES" />
      <ResourceBlock name="BLOGS" />
    </div>
  );
};

export default ResourcesLayout;
