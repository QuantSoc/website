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
       {/* <div className="">
                    <a href="https://discord.gg/2qYRNKubRz" target="_blank" rel="noopener noreferrer">
                        <BsDiscord />
                    </a>
                    <a href="https://www.facebook.com/unswquantsoc/" target="_blank" rel="noopener noreferrer">
                        <BsFacebook />
                    </a>
                    <a href="https://www.linkedin.com/company/quantsoc/" target="_blank" rel="noopener noreferrer">
                        <BsLinkedin />
                    </a>
                    <a href="https://www.instagram.com/quantsoc_unsw/" target="_blank" rel="noopener noreferrer">
                        <BsInstagram />
                    </a>
                </div> */}
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
          to='/resources#'
          className="text-main menu-item menu-item-mobile"
          scroll={el => scrollWithOffset(el)}

        >
          Resources
        </HashLink>

        <HashLink
            tabIndex={-1}
            smooth
            to="games"
            className="text-main menu-item menu-item-mobile"
        >
            Games
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
          to='/contact#'
          smooth
          className="text-main menu-item menu-item-mobile"
          scroll={el => scrollWithOffset(el)}

        >
          Contact Us
        </HashLink>
      </div>
    </nav>
  );
};
export default NavBar;
