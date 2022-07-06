import React from 'react';
import ResourcesBlurb from '../ResourcesBlurb/ResourcesBlurb';
import ResourceButton from '../ResourceButton/ResourceButton';
import PageTitle from '../PageTitle/PageTitle';
import styles from './ResourcesHeader.module.scss';

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
