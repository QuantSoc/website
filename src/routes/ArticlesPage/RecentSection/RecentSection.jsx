import { useState } from 'react';
import './index.less';

import ArticleCardLarge from 'components/ArticleCardLarge';

const RecentSection = ({ className = '' }) => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(prev => !prev);
  };

  return (
    <section className={`recent-articles ${className}`}>
      <h1 id="most-recent-heading" onClick={toggleVisibility} style={{ cursor: 'pointer' }}>
        Most Recent {' '}
        <span id="dropdown-button" className={isVisible ? 'rotated' : ''}>
          &nbsp;➤
        </span>
      </h1>

      {isVisible && (
        <ArticleCardLarge 
          heading="Welcome to our new QuantSoc Newsletter!" 
          subheading="Let's have a look at what is going on this week." 
        />
      )}
    </section>
  );
};

export default RecentSection;
