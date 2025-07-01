
import { useState, useEffect } from 'react';

import './index.less';

import NewsLetterForm from 'components/NewsLetterForm/NewsLetterForm';

const HeroSection = () => {

  const [loaded, setLoaded] = useState(false);


  return (
    <section className="hero-section">
      <div className='hero-text-container'>
        <h1 className="hero-heading">The Official Quantsoc Newsletter</h1>
        <p className="text-body">
        Stay informed and connected with us as we keep you updated on all the important happenings!
        </p>
        <NewsLetterForm />
      </div>
        
    </section>
  );
};
export default HeroSection;

