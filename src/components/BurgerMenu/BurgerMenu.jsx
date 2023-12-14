import React, { useState, useRef, useEffect } from 'react';
import './index.less';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo-quantsoc.svg';

const BurgerMenu = () => {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsChecked(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  const handleLinkClick = (link) => {
    navigate(link);
    setIsChecked(false);
  };
  return (
    <div className="hamburger-menu">
      <input
        id="menu-toggle"
        type="checkbox"
        checked={isChecked}
        onChange={() => {
          setIsChecked(!isChecked);
        }}
      />
      <div className="menu-btn">
        <span />
      </div>

      <div className="menu-vertical" ref={menuRef}>
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
            handleLinkClick('/');
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
            handleLinkClick('/about');
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
            handleLinkClick('/events');
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
            handleLinkClick('/resources');
          }}
        >
          Resources
        </div>
        {/* <div
          className="burger-menu-item"
          role="button"
          onKeyDown={() => {}}
          tabIndex={-1}
          onClick={() => {
            handleLinkClick('/sponsors');
          }}
        >
          Sponsors
        </div> */}
      </div>
    </div>
  );
};
export default BurgerMenu;
