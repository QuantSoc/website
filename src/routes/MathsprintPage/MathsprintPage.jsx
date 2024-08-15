import { useEffect, useState, useRef } from 'react';
import './index.less';
import Cookies from "js-cookie";

const Mathsprint = () => {
  if (typeof(Cookies.get('highScore'))  === 'undefined') Cookies.set('highScore', 0);

  const calcResult = (n1, n2, opcode) => {
    switch (opcode) {
      case 0: return n1 + n2;
      case 1: return n1 - n2;
      case 2: return n1 * n2;
      case 3: return n1 * n2;
      default: return 0;
    }
  };

  const [answer, setAnswer] = useState('');
  const [formData, setFormData] = useState({
    n1: 0,
    n2: 0,
    opcode: 0,
    result: 0,
    score: -1,
  });

  const {
    n1,
    n2,
    opcode,
    result,
    score,
  } = formData;

  const newQuestion = (increaseScore) => {
    const operationCode = Math.floor(Math.random() * 4);
    let num1 = Math.ceil(Math.random() * 99) + 1; // Rand num between 2 - 100
    let num2 = Math.ceil(Math.random() * ((operationCode <= 1) ? 99 : 11)) + 1;
    // Avoids negative subtraction results
    if (operationCode === 1 && num1 < num2) [num1, num2] = [num2, num1];
    let resultOfCalc = calcResult(num1, num2, operationCode);
    if (operationCode === 3) {
      // Division is reverse multiplication
      const r = resultOfCalc;
      resultOfCalc = num1;
      num1 = r;
    }
    setFormData({
      score: increaseScore ? formData.score + 1 : formData.score,
      n1: num1,
      n2: num2,
      opcode: operationCode,
      result: resultOfCalc,
    });
  };

  useEffect(() => {
    if (Number(answer) === result) {
      setAnswer('');
      newQuestion(true);
    }
  }, [answer]);

  // Timer stuff
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);
  const runTimeMilliseconds = 120000;

  function start() {
    setIsRunning(true);
    setFormData({
      ...formData,
      score: 0,
    });
    startTimeRef.current = Date.now() - elapsedTime;
  }

  useEffect(() => {
    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 10);
    }
    return () => {
      clearInterval(intervalIdRef.current);
    }
  }, [isRunning]);

  useEffect(() => {
    if (isRunning && elapsedTime >= runTimeMilliseconds) {
      setIsRunning(false);
      setElapsedTime(0);
      newQuestion(false);
      setAnswer('');
      if (Cookies.get('highScore') < score) Cookies.set('highScore', score);
    }
  }, [elapsedTime]);

  function formatTime() {
    let seconds = runTimeMilliseconds - elapsedTime;
    seconds = String(Math.floor(seconds / 1000));
    return `${seconds}`;
  }

  return (
    <div>
      <h1 id="heading">MATHSPRINT</h1>
      <div className="top-row">
        <p id="timer">
          High Score:
          {' '}
          {Cookies.get('highScore')}
        </p>
        <p>
          Score:
          {' '}
          {score}
        </p>
      </div>
      <div className="second-row">
        <p id="timer">
          Time:
          {' '}
          {formatTime()}
        </p>
      </div>
      { isRunning ? (
        <div className="row">
          <p>
            {n1}
            {' '}
            {(opcode === 0) && '+'}
            {(opcode === 1) && '-'}
            {(opcode === 2) && 'x'}
            {(opcode === 3) && '/'}
            {' '}
            {n2}
            {' '}
            =
          </p>
          <input
            autoFocus
            autoComplete="off"
            id="answer"
            type="text"
            value={answer}
            onChange={e => setAnswer(e.target.value)}
          />
        </div>
      ) : (
        <div className="buttonContainer">
          <button id="start-button" onClick={start} autoFocus type="button">
            Start
          </button>
        </div>
      )}
    </div>
  );
};
export default Mathsprint;
