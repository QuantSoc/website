import React from 'react';
import './index.scss';
import { Typography } from 'antd';

const { Paragraph } = Typography;

const ContentStyle = {
  fontSize: '27px',
  textAlign: 'left',
  lineHeight: '31px',
  marginBottom: '0px',
};

const EventContent = () => {
  const DummyText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

  return (
    <div className="carousel-content">
      <div className="event-description">
        <Paragraph style={ContentStyle} ellipsis={{ rows: 6, expandable: false, symbol: 'more' }}>
          {DummyText}
        </Paragraph>
      </div>

      Hello
    </div>
  );
};

export default EventContent;
