import React from 'react';
import './index.scss';
import classnames from 'classnames'

const EventsBanner = () => {
  return (
    <div className='evts-banner'>
      <EventsDivider highlight='1' />
      <EventsDescription text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'/>
      <EventsDivider highlight='6' />
    </div>
  );
};
//

const EventsDescription = ({ text }) => {
  return (
    <div className='evts-desc'>
      <p1>
        {text}
      </p1>
    </div>
  )
}

const EventsDivider = ({ highlight, rows }) => {
  var words = [];
  for (var i = 0; i < rows; i++) {
    if (i === parseInt(highlight)) {
      words.push(<EventsIndividual type='solid' />);
    } else {
      words.push(<EventsIndividual />);
    }
  }

  return (
    <div className='evts-div'>
      {words}
    </div>
  );
};

EventsDivider.defaultProps = {
  highlight: '0',
  rows: '9'
}

const EventsIndividual = ({ type, text }) => {
  return (
    <div className={classnames('evts-single', type)}>
      {text}
    </div >
  );
};

EventsIndividual.defaultProps = {
  type: 'trans',
  text: 'events'
}

export default EventsBanner;
