import React from 'react';
import './index.less';
import classnames from 'classnames';
import Marquee from 'react-fast-marquee';

const EventsBanner = () => {
  const NontechEvents = [
    'Meet ups',
    'Parties',
    'BBQ',
    'Trivia nights',
    'Employer events',
    'Meet ups',
    'Parties',
    'BBQ',
    'Trivia nights',
    'Employer events',
  ];

  const TechEvents = [
    'Mock Interview',
    'Trading Workshops',
    'Discussions',
    'Trading competitions',
    'Mock Interview',
    'Trading Workshops',
    'Discussions',
    'Trading competitions',
  ];

  const dummy = `Lorem ipsum dolor sit amet, 
  consectetur adipiscing elit, sed do eiusmod
   tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis 
    nostrud exercitation ullamco laboris nisi ut
     aliquip ex ea commodo consequat. Duis aute 
     irure dolor in reprehenderit in voluptate 
     velit esse cillum dolore eu fugiat nulla pariatur.`;

  return (
    <div className="evts-banner">
      {/* <EventsDivider highlight="1" /> */}
      <Marquee gradient={false} speed={40}>
        <EventsDivider highlight="0" events={NontechEvents} />
      </Marquee>

      <EventsDescription text={dummy} />

      <Marquee gradient={false} speed={40}>
        <EventsDivider highlight="1" events={TechEvents} />
      </Marquee>
    </div>
  );
};

const EventsDescription = ({ text }) => {
  return (
    <div className="evts-desc">
      <p>
        {text}
      </p>
    </div>
  );
};

const EventsDivider = ({ highlight, events }) => {
  let words = Array((events.length) ? events.length : 9).fill(0);
  words[highlight] = 1;

  if (!events.length) {
    words = words.map((h) => { return <EventsIndividual type={h} />; });
  } else {
    words = words.map((h, i) => {
      return <EventsIndividual type={h} text={events[i]} />;
    });
  }

  return (
    <div className="evts-div">
      {words}
    </div>
  );
};

EventsDivider.defaultProps = {
  highlight: 0,
  events: [],
};

const EventsIndividual = ({ type, text }) => {
  return (
    <div className={classnames('evts-single', type ? 'solid' : 'trans')}>
      {text}
    </div>
  );
};

EventsIndividual.defaultProps = {
  type: 0,
  text: 'events',
};

export default EventsBanner;
