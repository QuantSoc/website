/* eslint-disable */
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import QuantSocLogo from 'components.old/common/QuantSocLogo';
import './index.less';
import { useState } from 'react';
import useMediaQuery from 'hooks/useMediaQuery';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 790px)');
  if (isDesktop && !isOpen) {
    setOpen(!isOpen);
  }

  const toggleOpen = () => {
    setOpen(!isOpen);
  };

  return (
    <div className="navbar">
      {isOpen ? (
        <NavBarOpen toggleOpen={toggleOpen} />
      ) : (
        <NavBarClosed toggleOpen={toggleOpen} />
      )}
    </div>
  );
};

export const NavBarOpen = ({ toggleOpen }) => {
  return (
    <div className="navbar_normal">
      <Link to="/" className="badge">
        <QuantSocLogo type="circle" style={{ width: '3rem', height: '3rem' }} />
        <div className="title">uantsoc</div>
      </Link>
      <div className="menuTabs">
        <Link className="menuWord" style={{ color: 'white' }} to="/events">
          EVENTS
        </Link>
        <Link className="menuWord" style={{ color: 'white' }} to="/resources">
          RESOURCES
        </Link>
        <Link className="menuWord" style={{ color: 'white' }} to="/about">
          ABOUT US
        </Link>
        <Link className="menuWord" style={{ color: 'white' }} to="/sponsors">
          SPONSORS
        </Link>
        <a className="menuWord" style={{ color: 'white' }} href="#footerBar">
          CONTACT US
        </a>
      </div>
      <MenuOutlined
        className="dropDown"
        onClick={() => {
          toggleOpen();
        }}
      />
      <div className="links">{}</div>
    </div>
  );
};

export const NavBarClosed = ({ toggleOpen }) => {
  return (
    <div className="navbar_toggled">
      <div className="toggle_top">
        <div className="badge">
          <QuantSocLogo
            type="circle"
            style={{ width: '3rem', height: '3rem' }}
          />
          <div className="title">uantsoc</div>
        </div>
        <CloseOutlined
          className="exit"
          onClick={() => {
            console.log('oooo');
            toggleOpen();
          }}
        />
      </div>
      <div className="menuTabs">
        <div className="menuWord">EVENTS</div>
        <div className="menuWord">RESOURCES</div>
        <div className="menuWord">ABOUT US</div>
        <div className="menuWord">SPONSORS</div>
        <div className="menuWord">CONTACT US</div>
      </div>
      <div className="links">{}</div>
    </div>
  );
};

export default NavBar;
