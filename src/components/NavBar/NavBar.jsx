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
        <div
          role="button"
          tabIndex={-1}
          onKeyDown={() => {}}
          onClick={() => {
            navigate('/');
          }}
          className="text-main menu-item menu-item-mobile"
        >
          Home
        </div>
        <div
          role="button"
          tabIndex={-1}
          onKeyDown={() => {}}
          onClick={() => {
            navigate('/about');
          }}
          className="text-main menu-item menu-item-mobile"
        >
          About Us
        </div>
        <div
          role="button"
          tabIndex={-1}
          onKeyDown={() => {}}
          onClick={() => {
            navigate('/events');
          }}
          className="text-main menu-item menu-item-mobile"
        >
          Events
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
        {/* <div
          role="button"
          tabIndex={-1}
          onKeyDown={() => {}}
          onClick={() => {
            navigate('/sponsors');
          }}
          className="text-main menu-item menu-item-mobile"
        >
          Sponsors
        </div> */}
      </div>
    </nav>
  );
};
export default NavBar;
