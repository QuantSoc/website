import React from 'react';
import BurgerMenu from 'components/BurgerMenu';
import './index.less';
import QuantSocLogo from 'components/QuantSocLogo';
import { useNavigate } from 'react-router-dom';


const NavBar = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <QuantSocLogo />
      <BurgerMenu />
      <div className="menu hidden">
        {/* <div
          role="button"
          tabIndex={-1}
          onKeyDown={() => {}}
          onClick={() => {
            navigate('/');
          }}
          className="text-main menu-item menu-item-mobile"
        >
          Home
        </div> */}
        <a
          role="button"
          tabIndex={-1}
          onKeyDown={() => {}}
          href='/#about-us'
          className="text-main menu-item menu-item-mobile"
        >
          About Us
        </a>
        <a
          role="button"
          tabIndex={-1}
          onKeyDown={() => {}}
          href='/#events'
          className="text-main menu-item menu-item-mobile"
        >
          Events
        </a>
        
        <a
          role="button"
          tabIndex={-1}
          onKeyDown={() => {}}
          href='/#resources'
          className="text-main menu-item menu-item-mobile"
        >
          Resources
        </a>
        <a
          href='/#sponsorships'
          className="text-main menu-item menu-item-mobile"
        >
          Sponsors
        </a>
        <div
          role="button"
          tabIndex={-1}
          onKeyDown={() => {}}
          onClick={() => {
            navigate('/articles');
          }}
          className="text-main menu-item menu-item-mobile"
        >
          News
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
