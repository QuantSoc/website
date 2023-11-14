import React from 'react';
import './index.less';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo-quantsoc.svg';

const BurgerMenu = () => {
  const navigate = useNavigate();
  return (
    <div className="hamburger-menu">
      <input id="menu-toggle" type="checkbox" />
      <div className="menu-btn">
        <span />
      </div>

      <div className="menu-vertical">
        <img
          src={logo}
          alt="QuantSoc's logo within burger menu"
          className="burger-menu__logo"
        />
        <h2>QuantSoc</h2>
        <div
          className="burger-menu-item"
          role="button"
          onKeyDown={() => {}}
          tabIndex={-1}
          onClick={() => {
            navigate('/');
          }}
        >
          Home
        </div>
        <div
          className="burger-menu-item"
          role="button"
          onKeyDown={() => {}}
          tabIndex={-1}
          onClick={() => {
            navigate('/about');
          }}
        >
          About Us
        </div>
        <div
          className="burger-menu-item"
          role="button"
          onKeyDown={() => {}}
          tabIndex={-1}
          onClick={() => {
            navigate('/events');
          }}
        >
          Events
        </div>
        <div
          className="burger-menu-item"
          role="button"
          onKeyDown={() => {}}
          tabIndex={-1}
          onClick={() => {
            navigate('/resources');
          }}
        >
          Resources
        </div>
        <div
          className="burger-menu-item"
          role="button"
          onKeyDown={() => {}}
          tabIndex={-1}
          onClick={() => {
            navigate('/sponsors');
          }}
        >
          Sponsors
        </div>
      </div>
    </div>
  );
};
export default BurgerMenu;
