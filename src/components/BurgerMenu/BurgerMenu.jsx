import React from 'react';
import './index.less';

const BurgerMenu = () => {
  return (
    <div className="hamburger-menu">
      <input id="menu-toggle" type="checkbox" />
      <div className="menu-btn">
        <span />
      </div>

      <ul className="menu-vertical">
        <li>
          <a className="menu-item" href="/about">
            About Us
          </a>
        </li>
        <li>
          <a className="menu-item" href="/events">
            Events
          </a>
        </li>
        <li>
          <a className="menu-item" href="/resources">
            Resources
          </a>
        </li>
        <li>
          <a className="menu-item" href="/sponsors">
            Sponsors
          </a>
        </li>
      </ul>
    </div>
  );
};
export default BurgerMenu;
