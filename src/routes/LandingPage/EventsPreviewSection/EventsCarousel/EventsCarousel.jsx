import { React, useState } from 'react';
import './index.scss';

import { Carousel, Layout } from 'antd';
import EventContent from './EventContent';

const { Sider, Content } = Layout;

const EventsCarousel = () => {
  const [EventNum, setEventNum] = useState(0);

  const ContentStyle = {
    color: '#fff',
    lineHeight: '100px',
    textAlign: 'center',
    background: '#364d79',
    marginBottom: 0,
    aspectRatio: '1.63',
  };

  const CarouselSider = {
    background: '#EAE0FA',
    outlineStyle: 'solid',
    AspectRatio: '1.487',
  };

  const LayoutStyle = {
    AspectRatio: '2.3',
  };

  const DummyData = [
    {
      description: '',
    },
  ];

  return (
    <div className="container-carousel">
      <Layout style={LayoutStyle}>
        <Content style={ContentStyle}>
          <div className="carousel-events">
            <Carousel autoplay autoplaySpeed={7000}>
              <div>
                <h3 style={ContentStyle}>Image 1</h3>
              </div>
              <div>
                <h3 style={ContentStyle}>Image 2</h3>
              </div>
              <div>
                <h3 style={ContentStyle}>Image 3</h3>
              </div>
              <div>
                <h3 style={ContentStyle}>Image 4</h3>
              </div>
            </Carousel>
          </div>
        </Content>
        <Sider style={CarouselSider} width="30%">
          <EventContent />
        </Sider>
      </Layout>
    </div>
  );
};

export default EventsCarousel;
