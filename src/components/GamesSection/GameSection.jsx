import './index.less';

const GamesSection = () => {
    return (
        <section className="games-section">
            <h1 className="games-section__header">Resources</h1>
            <div className="games-container">
                <a href="https://mtg.quantsoc.org" className="game-box large mock-trading-card">Mock Trading Game</a>
                <a href="/mathsprint" className="game-box small mathsprint-card">~MathSprint~
                {/* animated background for mathsprint just ignore this stuff*/}
                    <div class="area" >
                        <ul class="circles">
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                        </ul>
                    </div >
                </a>
            </div>
        </section>
    );
}

export default GamesSection;
