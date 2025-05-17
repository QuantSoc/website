// src/games/sum_game/SumGame.jsx
import React, { useState, useEffect } from 'react';
import { generateRound } from './gameLogic';

export default function SumGame() {
  const [difficulty, setDifficulty] = useState(1);
  const [lives, setLives]           = useState(3);
  const [round, setRound]           = useState(0);
  const [score, setScore]           = useState(0);
  const [puzzle, setPuzzle]         = useState(() => generateRound(1));
  const [feedback, setFeedback]     = useState('');

  // generate first puzzle
  useEffect(() => {
    setPuzzle(generateRound(1));
  }, []);

  // Determine theme class
  const themeClass = puzzle?.isBlue ? 'theme-blue' : 'theme-red';

  const handleAnswer = (choice) => {
    if (!puzzle) return;
    const correct = choice === puzzle.correctIndex;
    const newLives = correct ? lives : lives - 1;
    const newDiff  = correct ? Math.min(100, difficulty + 1) : difficulty;

    if (correct) {
      setScore(s => s + 1);
      setDifficulty(newDiff);
      setFeedback('✅ Correct!');
    } else {
      setLives(newLives);
      setFeedback(`❌ Wrong! Lives left: ${newLives}`);
    }

    setRound(r => r + 1);

    if (newLives > 0) {
      setPuzzle(generateRound(newDiff));
    }
  };

  if (!puzzle) return <div className="sum-game"><p>Loading…</p></div>;

  return (
    <div className={`sum-game p-6 ${themeClass}`}>
      <h2 className="text-xl font-bold mb-2">
        Round {round + 1} — Difficulty {difficulty}
      </h2>
      <p className="mb-4">
        Target: <strong>{puzzle.target}</strong>
      </p>

      <div className="options grid grid-cols-2 gap-4 mb-4">
        {puzzle.expressions.map((terms, i) => {
          const expr = terms
            .map((t, idx) =>
              idx === 0 ? t : t >= 0 ? ` + ${t}` : ` - ${Math.abs(t)}`
            )
            .join('');
          return (
            <button
              key={i}
              className="btn btn-primary"
              onClick={() => handleAnswer(i)}
              disabled={lives === 0}
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
            onClick={() => {
              setDifficulty(1);
              setLives(3);
              setScore(0);
              setRound(0);
              setFeedback('');
              setPuzzle(generateRound(1));
            }}
          >
            Restart
          </button>
        </div>
      )}
    </div>
  );
}
