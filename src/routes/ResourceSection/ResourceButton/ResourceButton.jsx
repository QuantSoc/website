import React from 'react';
import { RightOutlined } from '@ant-design/icons';
import styles from './ResourceButton.module.scss';

const ResourceButton = ({ name }) => {
  return (
    <button type="button" className={styles.ResourceButton}>
      <div>{name}</div>
      <span><RightOutlined /></span>
    </button>
  );
};

export default ResourceButton;
