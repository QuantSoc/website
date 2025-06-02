import { useEffect, useState, useRef } from 'react';
import './index.less';
import Cookies from "js-cookie";

const Pentominoes = () => {
  const [instructions, setInstructions] = useState('');
  const [active, setActive] = useState(false);

  function showInstructions() {
    setInstructions('Let\'s play pentominoes! Use the given buttons to rotate and flip' + 
      ' the given pieces, and cover all of the 5x5 grid as fast as possible.'
    );
  }

  function startGame() {
    setInstructions(false);
    setActive(true);
  }

  return (
    <div className='main-body'>
      <div id='title'>Pentominoes</div>
      <div>{instructions}</div>
      { !active? (
        <div className='centreButtonContainer' style={{ flexDirection: 'column' }}>
          <button className='button' onClick={showInstructions} type="button"> 
            How to play
          </button>
          <button className='button' onClick={startGame} autoFocus type="button"> 
            Start
          </button>
        </div>
      ) : (
        <h1>WE ARE NOW PLAYING THE GAME</h1>
      )
      
      
      }
      
    </div>
  );
};

export default Pentominoes;