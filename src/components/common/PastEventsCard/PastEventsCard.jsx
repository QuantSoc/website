import React from 'react';
import { Card } from 'antd';
import { RightOutlined, SettingOutlined } from '@ant-design/icons';
import './index.less';

const { Meta } = Card;

const PastEventsCard = ({ img, title, description, actions,  width }) => {

  return (
    <Card
      className="past-events-card"
      hoverable
      style={{ width: width ?? 300, margin: '20px' }}
      cover={<img alt={title} src={img} style={{padding: 20}}/>}
      actions={actions ? actions : [
        <SettingOutlined key="setting" />, // Facebook or smth
        <div>
          Read More
          &nbsp;
          <RightOutlined />
          {/* <EditOutlined key="edit" /> */}
        </div>
      ]}
    >
      <Meta
        className="card-cont"
        title={title}
        description={description}
      />
    </Card>
  );
};

export default PastEventsCard;
