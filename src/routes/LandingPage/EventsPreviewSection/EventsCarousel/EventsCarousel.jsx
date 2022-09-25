import { React } from 'react';
import './index.less';

import { Carousel } from 'antd';
import EventEntry from './EventEntry';

const EventsCarousel = () => {
  const DummyData = [
    {
      id: 0,
      image: 'https://www.inside.unsw.edu.au/sites/default/files/article/2_UNSW%20Student%20Life%201900%20x%201200%20-%209.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      date: '1st Jan - 2nd Jan',
      time: '4:00pm - 5:00pm',
      delivery: 'Online',
    },
    {
      id: 1,
      image: 'https://www.inside.unsw.edu.au/sites/default/files/article/3-plus-students-quad-750x400.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      date: '1st Jan - 2nd Jan',
      time: '4:00pm - 5:00pm',
      delivery: 'Online',
    },
    {
      id: 2,
      image: 'https://www.inside.unsw.edu.au/sites/default/files/article/UNSW-Online-students-750x400.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      date: '1st Jan - 2nd Jan',
      time: '4:00pm - 5:00pm',
      delivery: 'Online',
    },
  ];

  return (
    <div className="container-carousel">
      <Carousel autoplay draggable pauseOnHover dots autoplaySpeed={8000}>
        {DummyData.map((entry) => {
          return <EventEntry key={entry.id} data={entry} />;
        })}
      </Carousel>
    </div>
  );
};

export default EventsCarousel;
