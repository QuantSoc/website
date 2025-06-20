import { useEffect, useState, useRef } from 'react';
import './index.less';
import Cookies from 'js-cookie';
import useModal from 'hooks/useModal';
import Modal from 'components/Modal';
import Carousel from 'components/Carousel/Carousel';

const Pentominoes = () => {
  const { isOpen, toggleModal } = useModal();
  const [modalType, setModalType] = useState(null);
  const [active, setActive] = useState(false);
  const [name, setName] = useState('')
  const [timer, setTimer] = useState(120)

  function startGame() {
    setActive(true);
  }

  const instructionList = [
    'You\'ll be given 5 different pentomino pieces. Each piece takes up exactly 5 tiles and can have various shapes and orientations.',
    'Click or drag a piece to move it onto the 5×5 board. Pieces can be moved around freely until placed.',
    'Select a piece and click the Rotate button to rotate it 90° clockwise. You can rotate multiple times to get the desired orientation.',
    'Click the Flip button to flip the selected piece horizontally. Use both flip and rotate to explore all orientations.',
    'Once a piece is in the correct spot and orientation, drop it onto the board. Pieces will snap into place if they fit.',
    'You can remove or reposition pieces if needed. A reset button is provided to remove all progress.',
    'Try fill the 5x5 grid as fast as possible and make it onto the leaderboard!',
  ];
  const resultInstructions = [];
  for (let i = 0; i < instructionList.length; i += 1) {
    resultInstructions.push({
      id: i,
      slide:
  <div className="instructionCard__container">
    {instructionList[i]}
    <p>
      <img
        alt="GIF here"
        src="some.gif"
        width="fit-content"
      />
    </p>

  </div>,
    });
  }

  return (
    <div className="main-body">
      <div id="title">Pentominoes</div>
      { !active ? (
        <>
          <div id="modalContainer">
            <Modal
              isOpen={isOpen}
              toggleModal={() => {
                toggleModal();
                setModalType(null);
              }}
              header={modalType === 'howToPlay' ? 'How To Play' : 'Start Game'}
              // style={{ justifyContent: 'center', display: 'flex', alignItems: 'center' }}
            >
              {modalType === 'howToPlay' ? (
                <Carousel slides={resultInstructions} style={{ justifySelf: 'center' }} />
              ) : (
                <form className="gameForm" onSubmit={startGame}>
                  <label className="formLabel">
                    Your name
                    <input
                      type="text"
                      value={name}
                      placeholder='Name'
                      onChange={(e) => setName(e.target.value)}
                      className="formInput"
                      required
                    />
                  </label>

                  <label className="formLabel">
                    Timer
                    <input
                      type="number"
                      value={timer ?? ''}
                      onChange={(e) => setTimer(e.target.value)}
                      className="formInput"
                      required
                    />
                  </label>

                  <button
                    type="submit"
                    className="button"
                    // onClick={startGame}
                  >
                    Let’s go
                  </button>
                </form>

              )}
            </Modal>
          </div>
          <div className="centreButtonContainer">
            <button
              className="button"
              onClick={() => {
                setModalType('howToPlay')
                toggleModal()
              }}
              type="button">
              How to play
            </button>
            <button
              className="button"
              onClick={() => {
                setModalType('startGame')
                toggleModal()
              }}
              type="button">
              Start
            </button>
          </div>
        </>
      ) : (
        <>
          <h1>NAME: {name}</h1>
          <h2>TIMER: {timer}</h2>
        </>
      )}
    </div>
  );
};

export default Pentominoes;
