import React from 'react';
import { Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import image from 'assets/comingsoon.png';
// TODO: go absolute
//
//
import useMediaQuery from '../../hooks/useMediaQuery';
import { ResourcesDivider } from './ResourceSectionComponents';
import './index.scss';


const ButtonStyle = {
  fontSize: '1.2rem',
  height: '2.7rem',
  background: '#8234DA',
  borderColor: '#8234DA',
  borderRadius: '3px',
};

/* eslint-disable */

const resourcesBlurbText = `See our resources from previous events and more!`;

/* const ButtonStyle = { */
/*   marginTop: '35px', */
/*   fontSize: '1em', */
/*   height: '67px', */
/*   aspectratio: '1.51', */
/*   background: '#8234DA', */
/*   borderColor: '#8234DA', */
/* }; */



const ResourceSection = () => {
  return (
    <div className="resources-section">
      <div className="resources-header">
        <div className="resources-header-cont">
          <div className="resources-title">
            Resources
              <span className="resources-title-arrow">&gt; &gt; &gt;</span>
          </div>
          <div className="resources-blurb">{resourcesBlurbText}</div>
        </div>
        <Button
          type="primary"
          size="large"
          style={ButtonStyle}
        >
          See More
        </Button>
      </div>
      {/*  */}
      <div className="resources-layout">
        <ResourceBlock name="WORKSHOPS" />
        <ResourceBlock name="ARTICLES" />
        <ResourceBlock name="BLOGS" />
      </div>
    </div>
  )
};


const ResourceBlock = ({ name }) => {
  return (
    <div className="resource-block">
      <div>
        <img className="image" src={image} alt="coming soon" />
      </div>
      <div>
        <Button type="primary" size="large" style={ButtonStyle}>
          {name}
          <RightOutlined />
        </Button>
      </div>
    </div>
  );
};


const ResourceSectionAHH = () => {
  const isSmall = useMediaQuery('(max-width: 768px)');

  console.log('isSmall', isSmall);

  return !isSmall ? (
    <div className="ResourceSection">
      <div className="ResourcesHeader">
        <PageTitle isSmall={false}/>
        <div className="resources-blurb">See our resources from previous events and more!</div>
        <div>
          <Button type="primary" size="large" style={ButtonStyle}>
            SEE MORE...
          </Button>
        </div>
      </div>
      <ResourcesDivider />
      <div className="ResourcesLayout">
        <ResourceBlock name="WORKSHOPS" />
        <ResourceBlock name="ARTICLES" />
        <ResourceBlock name="BLOGS" />
      </div>
    </div>
  ) : (
    <ResourceSectionSmall />
  );
};

const ResourceSectionSmall = () => {
  return (
    <div>
      AHHHHHHHHhh
      {/* <div className="ResourceSection"> */}
      {/*   <div className="ResourcesHeader"> */}
      {/*     <PageTitle isSmall={true} /> */}
      {/*     <div className="resources-blurb">See our resources from previous events and more!</div> */}
      {/*     <div> */}
      {/*       <Button type="primary" size="large" style={ButtonStyle}> */}
      {/*         SEE MORE... */}
      {/*       </Button> */}
      {/*     </div> */}
      {/*   </div> */}
      {/*   <ResourcesDivider /> */}
      {/*   <div className="ResourcesLayout"> */}
      {/*     <ResourceBlock name="WORKSHOPS" /> */}
      {/*     <ResourceBlock name="ARTICLES" /> */}
      {/*     <ResourceBlock name="BLOGS" /> */}
      {/*   </div> */}
      {/* </div> */}
    </div>
  );
};


const PageTitle = (isSmall) => {
  return (
    <div className="PageTitle">
      <span className="text">resources</span>
      {
        isSmall
        ? <span className="arrow">&gt; &gt; &gt;</span>
        : null
      }
    </div>
  );
};

export default ResourceSection;
