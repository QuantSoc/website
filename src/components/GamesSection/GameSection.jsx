// src/components/GamesSection/GamesSection.jsx
import './index.less';
import AnimatedSquaresBackground from 'components/AnimatedSquaresBackground/AnimatedSquaresBackground';

const games = [
  {
    title: 'Mock Trading Game',
    description: '',
    path: 'https://mtg.quantsoc.org',
    size: 'large',
    className: 'mock-trading-card',
    comingSoon: false,
  },
  {
    title: 'MathSprint',
    description: 'A fast paced calculation game',
    path: '/mathsprint',
    size: 'small',
    className: 'mathsprint-card',
    comingSoon: false,
    background: <AnimatedSquaresBackground />,
  },
  {
    title: 'Sum Game',
    description: 'Coming soon…',
    path: '#',
    size: 'small',
    className: 'sum-game-card',
    comingSoon: true,
  },
  {
    title: 'Sequence Game',
    description: 'Coming soon…',
    path: '#',
    size: 'small',
    className: 'sequence-game-card',
    comingSoon: true,
  },
  {
    title: 'Pendominoes Game',
    description: 'Coming soon…',
    path: '#',
    size: 'small',
    className: 'pendominoes-game-card',
    comingSoon: true,
  },
];

const GamesSection = ({ className = '' }) => (
  <section className={`games-section ${className}`}>
    <h1 className="games-section__header">Resources</h1>
    <div className="games-container">
      {games.map(({ title, description, path, size, className: cardClass, comingSoon, background }) => (
        <a
          key={title}
          href={path}
          className={`game-box ${size} ${cardClass} ${comingSoon ? 'coming-soon' : ''}`}
        >
          <div className="game-box__title">{title}</div>
          {description && <div className="game-box__desc">{description}</div>}
          {background}
        </a>
      ))}
    </div>
  </section>
);

export default GamesSection;
