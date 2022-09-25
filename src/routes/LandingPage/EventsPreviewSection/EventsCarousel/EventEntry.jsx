import React from 'react';
import './index.less';

import { Layout } from 'antd';
import EventContent from './EventContent';

const { Sider, Content } = Layout;

const EventEntry = ({ key, data }) => {
  const ContentStyle = {
    color: '#fff',
    lineHeight: '100px',
    textAlign: 'center',
    background: '#fff',
    marginBottom: 0,
    aspectRatio: '1.63',
  };

  const CarouselSider = {
    background: '#EAE0FA',
    AspectRatio: '1.487',
  };

  const LayoutStyle = {
    AspectRatio: '2.3',
  };

  return (
    <div className="carousel-events">
      <Layout style={LayoutStyle}>
        <Content style={ContentStyle}>
          <img id={key} className="EventImage" src={data.image} alt="Our events !!" />
        </Content>
        <Sider style={CarouselSider} width="30%">
          <EventContent
            desc={data.description}
            date={data.date}
            time={data.time}
            delivery={data.delivery}
          />
        </Sider>
      </Layout>
    </div>
  );
};

export default EventEntry;
