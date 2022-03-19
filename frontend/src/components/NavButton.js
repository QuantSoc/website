import React from 'react'
import './NavBar.css'

const NavButton = (props) => {
  console.log(props.text, props.dest);
  return (
    <a href={props.dest} className="navButton">
          <p>{props.text.toUpperCase()}</p>
    </a>
  )
}

export default NavButton
