import { useState } from 'react';
import './index.less';

const Tabs = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className='container'>
      <div className='bloc-tabs'>
        <button
          className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'}
          onClick={() => toggleTab(1)}
        >
          What We Do
        </button>
        <button
          className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'}
          onClick={() => toggleTab(2)}
        >
          Our Team
        </button>
        <button
          className={toggleState === 3 ? 'tabs active-tabs' : 'tabs'}
          onClick={() => toggleTab(3)}
        >
          Constitution
        </button>
      </div>

      <div className='content-tabs'>
        <div
          className={toggleState === 1 ? 'content  active-content' : 'content'}
        >
          <p>
            UNSW QuantSoc is a new student society that aims to connect UNSW
            students interested in mathematical finance, quantitative trading
            and algorithmic market-making with opportunities to learn, socialise
            and network with like-minded students and industry partners. Our
            goal is to cultivate an in-person and online community of
            like-minded students by on providing careers events, educational
            workshops, interview problem-solving sessions and theoretical
            reading groups aimed specifically at STEM students exploring highly
            quantitative or technological career pathways in finance and
            operations research.
          </p>
        </div>

        <div
          className={toggleState === 2 ? 'content  active-content' : 'content'}
        >
          <p>here is some filler text</p>
        </div>

        <div
          className={toggleState === 3 ? 'content  active-content' : 'content'}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
            nostrum rerum laudantium totam unde adipisci incidunt modi alias!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
