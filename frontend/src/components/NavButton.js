import React from 'react'
import './NavBar.css'

const NavButton = (props) => {
  console.log(props.text, props.dest);
  return (
    <a href={props.dest} className="navButton">
          {props.text.toUpperCase()}
    </a>
  )
}

export default NavButton