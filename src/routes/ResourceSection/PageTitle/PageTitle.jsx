import React from 'react';
import styles from './PageTitle.module.scss';

const PageTitle = () => {
  return (
    <div>
      <span className={styles.text}>resources</span>
      <span className={styles.arrow}>&gt; &gt; &gt;</span>
    </div>
  );
};

export default PageTitle;
