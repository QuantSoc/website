import './index.less';
import AnimatedSquaresBackground from 'components/AnimatedSquaresBackground/AnimatedSquaresBackground';

const GamesSection = ({ className = '' }) => {
    return (
        <section className={`games-section ${className}`}>
            <h1 className="games-section__header">Resources</h1>
            <div className="games-container">
                <a href="https://mtg.quantsoc.org" className="game-box large mock-trading-card">
                    Mock Trading Game
                </a>
                <a href="/mathsprint" className="game-box small mathsprint-card">
                    MathSprint
                    {/* Animated background for Mathsprint, just ignore this stuff */}
                    <AnimatedSquaresBackground />
                </a>
            </div>
        </section>
    );
};

export default GamesSection;
