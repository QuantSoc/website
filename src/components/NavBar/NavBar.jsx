import React from 'react';
import BurgerMenu from 'components/BurgerMenu';
import './index.less';
import QuantSocLogo from 'components/QuantSocLogo';

const NavBar = () => {
  return (
    <nav>
      <QuantSocLogo />
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
