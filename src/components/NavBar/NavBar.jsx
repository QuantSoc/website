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
        {/* <div
          role="button"
          tabIndex={-1}
          onKeyDown={() => {}}
          onClick={() => {
            navigate('/about');
          }}
          className="text-main menu-item menu-item-mobile"
        >
          About Us
        </div> */}
        <a
          role="button"
          tabIndex={-1}
          onKeyDown={() => {}}
          href='/#landing-page__events'
          className="text-main menu-item menu-item-mobile"
        >
          Events
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
        <div
          role="button"
          tabIndex={-1}
          onKeyDown={() => {}}
          onClick={() => {
            navigate('/resources');
          }}
          className="text-main menu-item menu-item-mobile"
        >
          Resources
        </div>
        <a
          href='/#landing-page__sponsorships'
          className="text-main menu-item menu-item-mobile"
        >
          Sponsors
        </a>
      </div>
    </nav>
  );
};
export default NavBar;
