import React from "react";

import "./NavBar.css";
import NavButton from "./NavButton";
import NavLogo from "./NavLogo.js"


const NavBar = () => {
  const navlinks = [
    {
      text: "about us",
      dest: "",
      key: 1
    },
    {
      text: "events",
      dest: "",
      key: 2
    },
    {
      text: "resources",
      dest: "",
      key: 3
    },
    {
      text: "resources",
      dest: "",
      key: 4
    },
    {
      text: "contact us",
      dest: "",
      key: 5
    },
  ];

  return (
    <div className="navbarContainer">
      <NavLogo/>
      {navlinks.map(({ text, dest, key }) => (
        <>
          <NavButton key={key.toString()} text={text} dest={dest} />
        </>
      ))}
    </div>
  );
};

export default NavBar;

