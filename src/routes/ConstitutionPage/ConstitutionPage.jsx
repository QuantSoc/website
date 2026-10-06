// To update the constitution, replace constitution.txt with a fresh
// Google Docs plain-text export (File -> Download -> Plain text).
import { useEffect, useState } from 'react';
import PageHero from 'components/PageHero/PageHero';
// eslint-disable-next-line import/no-unresolved, import/extensions
import constitutionText from './constitution.txt?raw';
import parseConstitution from './parseConstitution';
import './index.less';

const sections = parseConstitution(constitutionText);

// Highlights the section currently being read in the contents sidebar
const useActiveSection = () => {
  const [activeId, setActiveId] = useState(sections[0]?.id);

  useEffect(() => {
    // The active section is the last one whose heading has scrolled up to just
    // below the nav bar (or the final section once the page is scrolled to the bottom)
    const update = () => {
      const atBottom = window.innerHeight + window.scrollY
        >= document.documentElement.scrollHeight - 2;
      let current = sections[0]?.id;
      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el && (atBottom || el.getBoundingClientRect().top <= 150)) {
          current = section.id;
        }
      });
      setActiveId(current);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return activeId;
};

const ConstitutionPage = () => {
  const activeId = useActiveSection();

  return (
    <div className="page" id="constitution-page">
      <PageHero
        title={(
          <>
            Our Constitution
          </>
        )}
        subtitle="The rules that govern how QuantSoc is run, voted on by the members at the general meetings (typically the yearly AGM). QuantSoc is affiliated with Arc @ UNSW."
      />

      <div className="constitution">
        <aside className="constitution__contents">
          <p className="constitution__contents-title">Contents</p>
          <ol>
            {sections.map((section) => {
              return (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className={section.id === activeId ? 'active' : ''}
                  >
                    <span>{section.number}</span>
                    {section.title}
                  </a>
                </li>
              );
            })}
          </ol>
        </aside>

        <article className="constitution__body">
          {sections.map((section) => {
            return (
              <section key={section.id} id={section.id} className="constitution__section">
                <h2>
                  <span className="constitution__section-number">{section.number}</span>
                  {section.title}
                </h2>
                {section.items.map((item, index) => {
                  const key = `${section.id}-${index}`;
                  if (item.type === 'subheading') {
                    return <h3 key={key}>{item.text}</h3>;
                  }
                  return (
                    <div
                      key={key}
                      className="constitution__clause"
                      style={{ '--depth': item.depth }}
                    >
                      <span className="constitution__clause-number">{item.number}</span>
                      <p>{item.text}</p>
                    </div>
                  );
                })}
              </section>
            );
          })}
        </article>
      </div>
    </div>
  );
};

export default ConstitutionPage;
