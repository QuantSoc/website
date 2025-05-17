// src/games/sum_game/SumGame.jsx
import React, { useState, useEffect, useRef } from 'react';
import { generateRound } from './gameLogic';

export default function SumGame() {
  // game state
  const [started, setStarted]         = useState(false);
  const [difficulty, setDifficulty]   = useState(1);
  const [lives, setLives]             = useState(3);
  const [round, setRound]             = useState(0);
  const [score, setScore]             = useState(0);
  const [puzzle, setPuzzle]           = useState(null);
  const [feedback, setFeedback]       = useState('');
  const [timeLeft, setTimeLeft]       = useState(10);
  const timerRef = useRef(null);

  // start a new round (or restart game)
  const startRound = (diff, newLives, incrementScore, timedOut = false) => {
    if (incrementScore) {
      setScore(s => s + 1);
      setDifficulty(Math.min(100, diff + 1));
      setFeedback('✅ Correct!');
    } else {
      setLives(newLives);
      setFeedback(
        timedOut
          ? "⏰ Time's up!"
          : `❌ Wrong! Lives left: ${newLives}`
      );
    }
    setRound(r => r + 1);
    if (newLives > 0) {
      const nextDiff = incrementScore ? Math.min(100, diff + 1) : diff;
      const nextPuzzle = generateRound(nextDiff);
      setPuzzle(nextPuzzle);
    }
  };

  const handleStart = () => {
    // reset game state
    setDifficulty(1);
    setLives(3);
    setScore(0);
    setRound(0);
    setFeedback('');
    resetTimer();
    const firstPuzzle = generateRound(1);
    setPuzzle(firstPuzzle);
    setStarted(true);
  };

  const handleAnswer = (choice) => {
    if (!puzzle) return;
    clearInterval(timerRef.current);
    const correct = choice === puzzle.correctIndex;
    const newLives = correct ? lives : lives - 1;
    startRound(difficulty, newLives, correct, false);
  };

  const handleTimeout = () => {
    clearInterval(timerRef.current);
    const newLives = lives - 1;
    startRound(difficulty, newLives, false, true);
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    setTimeLeft(10);
    timerRef.current = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          handleTimeout();
          return 0;
        }
        return t - 1;
      });
    }, 1000);
  };

  // whenever a new puzzle appears, restart the timer
  useEffect(() => {
    if (started && lives > 0 && puzzle) {
      resetTimer();
    }
    return () => clearInterval(timerRef.current);
  }, [puzzle, started]);

  // if not started, show start screen
  if (!started) {
    return (
      <div className="sum-game p-6 theme-blue">
        <h2 className="text-xl font-bold mb-4">Sum Game</h2>
        <button className="btn btn-primary" onClick={handleStart}>
          Start Game
        </button>
      </div>
    );
  }

  const themeClass = puzzle?.isBlue ? 'theme-blue' : 'theme-red';

  return (
    <div className={`sum-game p-6 ${themeClass}`}>      
      <h2 className="text-xl font-bold mb-2">
        Round {round + 1} — Difficulty {difficulty}
      </h2>
      <p className="mb-1">
        Target: <strong>{puzzle.target}</strong>
      </p>
      <p className="mb-4">Time left: <strong>{timeLeft}s</strong></p>

      <div className="options grid grid-cols-2 gap-4 mb-4">
        {puzzle.expressions.map((terms, i) => {
          const expr = terms
            .map((t, idx) =>
              idx === 0
                ? t
                : t >= 0
                ? ` + ${t}`
                : ` - ${Math.abs(t)}`
            )
            .join('');
          return (
            <button
              key={i}
              className="btn btn-primary"
              onClick={() => handleAnswer(i)}
              disabled={lives === 0 || timeLeft === 0}
            >
              {expr}
            </button>
          );
        })}
      </div>

      <p className="mb-2 feedback">{feedback}</p>
      <p className="text-sm">Score: {score} | Lives: {lives}</p>

      {lives === 0 && (
        <div className="mt-4">
          <p className="text-lg font-semibold">Game Over!</p>
          <button
            className="btn btn-secondary mt-2"
            onClick={handleStart}
          >
            Restart
          </button>
        </div>
      )}
    </div>
  );
}
