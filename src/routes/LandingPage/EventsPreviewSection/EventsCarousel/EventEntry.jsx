import React from 'react';
import './index.less';

import { Layout } from 'antd';
import useMediaQuery from 'hooks/useMediaQuery';
import EventContent from './EventContent';

const { Sider, Content, Footer } = Layout;

const EventEntry = ({ key, data }) => {
  const isDesktop = useMediaQuery('(min-width: 860px)');

  const ContentStyleDesktop = {
    color: '#fff',
    lineHeight: '100px',
    textAlign: 'center',
    background: '#fff',
    marginBottom: 0,
    aspectRatio: '1.63',
  };

  const ContentStyleMobile = {
    maxWidth: '100%',
    margin: '0 auto',
    aspectRatio: '16/9',
    overflow: 'hidden',
  };

  const LayoutStyle = {
    AspectRatio: '2.3',
  };

  const eventsContent = (
    <EventContent
      desc={data.description}
      date={data.date}
      time={data.time}
      delivery={data.delivery}
    />
  );

  const CarouselSider = {
    background: '#EAE0FA',
    AspectRatio: '1.487',
  };

  const eventsSider = (
    <Sider style={CarouselSider} width="30%">
      {eventsContent}
    </Sider>
  );

  const eventsFooter = (
    <Footer style={CarouselSider} width="30%">
      {eventsContent}
    </Footer>
  );

  return (
    <div className="carousel-events">
      <Layout style={LayoutStyle}>
        <Content style={isDesktop ? ContentStyleDesktop : ContentStyleMobile}>
          <img id={key} className="EventImage" src={data.image} alt="Our events !!" />
        </Content>
        {isDesktop ? eventsSider : eventsFooter}
      </Layout>
    </div>
  );
};

export default EventEntry;
