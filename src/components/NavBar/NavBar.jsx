import React from 'react';
import BurgerMenu from 'components/BurgerMenu';
import logo from '../../assets/logo-quantsoc.svg';
import './index.less';

const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="logo" className="logo-img" />
        <a href="/" className="logo-title">
          <h2 className="logo-title">QuantSoc</h2>
        </a>
      </div>
      <BurgerMenu />
      <div className="menu hidden">
        <a
          href="/about"
          // target="_blank"
          className="text-main menu-item menu-item-mobile"
        >
          About Us
        </a>
        <a
          href="/events"
          // target="_blank"
          className="text-main menu-item menu-item-mobile"
        >
          Events
        </a>
        <a
          href="/resources"
          // target="_blank"
          className="text-main menu-item menu-item-mobile"
        >
          Resources
        </a>
        <a
          href="/sponsors"
          // target="_blank"
          className="text-main menu-item menu-item-mobile"
        >
          Sponsors
        </a>
      </div>
    </nav>
  );
};
export default NavBar;
