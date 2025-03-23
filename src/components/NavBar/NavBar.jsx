import React from 'react';
import BurgerMenu from 'components/BurgerMenu';
import './index.less';
import QuantSocLogo from 'components/QuantSocLogo';
import { useNavigate } from 'react-router-dom';

import { HashLink } from 'react-router-hash-link';

import { BsFacebook, BsDiscord, BsLinkedin, BsInstagram, BsLink } from 'react-icons/bs';



const NavBar = () => {
  const navigate = useNavigate();
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -130; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}

  return (
    <nav>
      <QuantSocLogo />
      <BurgerMenu />
      <div className="menu hidden">
        <HashLink
          tabIndex={-1}
          onKeyDown={() => {}}
          smooth
          to='/#about-us'
          className="text-main menu-item menu-item-mobile"
          scroll={el => scrollWithOffset(el)}
        >
          About Us
        </HashLink>
        <HashLink
          tabIndex={-1}
          smooth
          onKeyDown={() => {}}
          to='/#events'
          className="text-main menu-item menu-item-mobile"
          scroll={el => scrollWithOffset(el)}
        >
          Events
        </HashLink>
        
        <HashLink
          tabIndex={-1}
          onKeyDown={() => {}}
          to='/#resources'
          className="text-main menu-item menu-item-mobile"
          scroll={el => scrollWithOffset(el)}

        >
          Resources
        </HashLink>
        <HashLink
          to='/#sponsorships'
          smooth
          className="text-main menu-item menu-item-mobile"
          scroll={el => scrollWithOffset(el)}

        >
          Sponsors
        </HashLink>
        <HashLink
          tabIndex={-1}
          onKeyDown={() => {}}
          smooth
          to='/articles#'
          className="text-main menu-item menu-item-mobile"
        >
          News
        </HashLink>

        <HashLink
          tabIndex={-1}
          onKeyDown={() => {}}
          smooth
          to='/shop'
          className="text-main menu-item menu-item-mobile"
        >
          Shop
        </HashLink>
      </div>
    </nav>
  );
};
export default NavBar;
