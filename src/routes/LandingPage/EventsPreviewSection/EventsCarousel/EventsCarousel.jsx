import React from 'react';
import './index.scss';

import { Carousel, Layout } from 'antd';
import EventContent from './EventContent';

const { Sider, Content } = Layout;

const EventsCarousel = () => {
  const ContentStyle = {
    color: '#fff',
    lineHeight: '100px',
    textAlign: 'center',
    background: '#364d79',
    marginBottom: 0,
    aspectRatio: '1.63',
  };

  const CarouselContent = {
    background: '#EAE0FA',
    outlineStyle: 'solid',
  };

  const LayoutStyle = {
    AspectRatio: '2.3',
  };

  return (
    <div className="container-carousel">
      <Layout style={LayoutStyle}>
        <Content>
          <div className="carousel-events">
            <Carousel autoplay dots={false}>
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
        <Sider style={CarouselContent} width="30%">
          <EventContent />
        </Sider>
      </Layout>
    </div>
  );
};

export default EventsCarousel;
