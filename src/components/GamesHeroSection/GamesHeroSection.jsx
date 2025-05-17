import React from 'react';
import './GamesHeroSection.less';

const GamesHeroSection = ({ className = '' }) => {
  return (
    <section className={`hero-section ${className}`} id="games-hero-section">
      <div className="hero-text-container">
        <h1 className="hero-heading">
          Level Up Your Quant Game with Interactive Challenges
        </h1>
        <p className="text-body">
        Test your speed and strategy in puzzles designed to sharpen your quantitative thinking—dive in, compete, and learn as you play!
        </p>
      </div>
    </section>
  );
};

export default GamesHeroSection;
