import { useEffect, useState, useRef } from 'react';
import './index.less';

const Mathsprint = () => {
  const calcResult = (n1, n2, opcode) => {
    switch (opcode) {
      case 0: return n1 + n2;
      case 1: return n1 - n2;
      case 2: return n1 * n2;
      case 3: return n1 / n2;
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
    // Re-chooses a value for n2 if result of division is not an integer
    while (operationCode === 3 && (num1/num2) % 1 !== 0) {
      num2 = Math.ceil(Math.random() * ((operationCode <= 1) ? 99 : 11)) + 1;
    }
    // Avoids negative subtraction results
    if (operationCode === 1 && num1 < num2) {
      const numTemp = num1;
      num1 = num2;
      num2 = numTemp;
    }
    setFormData({
      score: increaseScore ? formData.score + 1 : formData.score,
      n1: num1,
      n2: num2,
      opcode: operationCode,
    });
  };

  useEffect(() => {
    if (Number(answer) === formData.result) {
      setAnswer('');
      newQuestion(true);
    }
    setFormData((prevState) => {
      return {
        ...prevState,
        result: calcResult(n1, n2, opcode),
      };
    });
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
      <div className='top-row'>
        <p id='timer'>
          Time:
          {' '}
          {formatTime()}
        </p>
        <p>
          Score:
          {' '}
          {score}
        </p>
      </div>
      { isRunning ? (
        <div className='row'>
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
        <div className='buttonContainer'>
          <button id="start-button" onClick={start}>Start</button>
        </div>
      )}
    </div>
  );
};
export default Mathsprint;
