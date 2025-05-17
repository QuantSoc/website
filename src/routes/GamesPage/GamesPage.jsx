import React from 'react';
import { Link } from 'react-router-dom';
import GamesHeroSection from '../../components/GamesHeroSection/GamesHeroSection';
import './GamesPage.less';

export default function GamesPage() {
  const games = [
    { title: 'Sum Game',         description: 'Coming soon…', path: '/sum-game', comingSoon: false },
    { title: 'Math Sprint',    description: 'A fast paced calculation game', path: '/MathSprint', comingSoon: false },
    { title: 'Sequence Game',    description: 'Coming soon…', path: '#', comingSoon: true },
    { title: 'Pendominoes Game', description: 'Coming soon…', path: '#', comingSoon: true },
  ];

  return (
    <>
      {/* full-width hero */}
      <GamesHeroSection />

      {/* centred title */}
      <div className="games-page">
        <h1 className="games-title">Games</h1>
      </div>

      {/* full-width card grid */}
      <div className="game-grid">
        {games.map(({ title, description, path, comingSoon }) => (
          <div key={title} className="game-card">
            <div className="game-card-content">
              <h2>{title}</h2>
              <p className="game-card-desc">{description}</p>
              {comingSoon ? (
                <button className="game-card-btn" disabled>
                  Coming Soon
                </button>
              ) : (
                <Link to={path} className="game-card-btn">
                  Play Now
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
