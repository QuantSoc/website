import React from 'react'

const NavButton = (props) => {
  console.log(props.text, props.dest);
  return (
    <a href={props.dest} className="navButton">
          {props.text}
    </a>
  )
}

export default NavButton