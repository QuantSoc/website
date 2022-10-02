import React, { useState } from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

const Collapsible = ({
  initiallyCollapsed,
  titleText,
  titleLevel,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(initiallyCollapsed);

  const toggleCollapsed = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <div>
      <Title level={titleLevel} onClick={toggleCollapsed}>
        {titleText}
      </Title>
      <div className="collapsible-content">
      </div>
    </div>
  );
};

export default Collapsible;
