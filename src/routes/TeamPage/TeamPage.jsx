import { Link } from 'react-router-dom';
import PageHero from 'components/PageHero/PageHero';
import ExecutiveCard from './ExecutiveCard/ExecutiveCard';
import executives from './executives';
import './index.less';

const [currentTeam, ...pastTeams] = executives;
const firstYear = executives[executives.length - 1].year;
const uniqueExecutives = new Set(
  executives.flatMap((team) => {
    return team.members.map((member) => {
      return member.name;
    });
  }),
).size;

const heroStats = [
  { value: executives.length, label: 'Executive teams' },
  { value: uniqueExecutives, label: 'Executives' },
  { value: firstYear, label: 'Leading since' },
];

const TeamPage = () => {
  return (
    <div className="page" id="team-page">
      <PageHero
        title={(
          <>
            Meet the Executives
          </>
        )}
        subtitle="The Executives who lead QuantSoc, promoting quant trading in UNSW through workshops, competitions and industry events."
      >
        <div className="page-hero__stats">
          {heroStats.map((stat) => {
            return (
              <div key={stat.label} className="page-hero__stat">
                <span className="page-hero__stat-value">{stat.value}</span>
                <span className="page-hero__stat-label">{stat.label}</span>
              </div>
            );
          })}
        </div>
        <div className="page-hero__actions">
          <a className="page-hero__button page-hero__button--primary" href="#current-team">
            {`See the ${currentTeam.year} team`}
          </a>
          <Link className="page-hero__button" to="/constitution">
            Read our constitution
          </Link>
        </div>
      </PageHero>

      <section className="articles-page-body team-section" id="current-team">
        <h1>{`${currentTeam.year} Executives`}</h1>
        <div className="team-grid">
          {currentTeam.members.map((member) => {
            return (
              <ExecutiveCard
                key={member.name}
                name={member.name}
                role={member.role}
                linkedin={member.linkedin}
              />
            );
          })}
        </div>
      </section>

      <section className="articles-page-body team-section">
        <h1>Past Executives</h1>
        {pastTeams.map((team) => {
          return (
            <div key={team.year} className="team-section__year">
              <h2>{team.year}</h2>
              <div className="team-grid team-grid--compact">
                {team.members.map((member) => {
                  return (
                    <ExecutiveCard
                      key={`${team.year}-${member.name}`}
                      name={member.name}
                      role={member.role}
                      linkedin={member.linkedin}
                      compact
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default TeamPage;
