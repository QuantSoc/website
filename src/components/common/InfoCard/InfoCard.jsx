import React, { useState } from 'react';
import { Card, Modal } from 'antd';
import { RightOutlined, SettingOutlined, CalendarOutlined } from '@ant-design/icons';
import './index.less';

const { Meta } = Card;

const InfoCard = ({
  img, title, description, actions, width,
}) => {
  return (
    <Card
      className="past-events-card"
      hoverable
      style={{ width: width ?? 300, margin: '20px' }}
      cover={<img alt={title} src={img} style={{ padding: 20 }} />}
      actions={actions || [
        <a href="https://www.facebook.com/unswquantsoc" target="_blank" rel="noreferrer">
          <SettingOutlined key="setting" />
        </a>, // Facebook or smth
        <div>
          Read More
          &nbsp;
          <RightOutlined />
          <Modal title={title}>
            <img alt={title} src={img} style={{ maxWidth: 460, padding: 20 }} />
            <p>{description}</p>
          </Modal>
          {/* <EditOutlined key="edit" /> */}
        </div>,
        <CalendarOutlined />,
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

export default InfoCard;
