import React from 'react';
import image from 'assets/comingsoon.png';
import ResourceButton from '../ResourceButton/ResourceButton';
import styles from './ResourceBlock.module.scss';

const ResourceBlock = ({ name }) => {
  return (
    <div className={styles.ResourceBlock}>
      <img className={styles.image} src={image} alt="coming soon" />
      <br />
      <ResourceButton name={name} />
    </div>
  );
};

export default ResourceBlock;
