import { BiCandles, BiBriefcase } from 'react-icons/bi';
import { LiaChalkboardTeacherSolid } from 'react-icons/lia';
import ResourcesButton from './ResourceButton';

const ResourcesSection = () => {
  return (
    <section className="resources-section">
      <h1 className="resources-section__header">Resources</h1>
      <p>QuantSoc&apos;s resources and opportunities</p>
      <div className="resources-buttons">
        <ResourcesButton
          btnTitle="Mock Trading Game"
          btnText="A tailor made mock trading site for our mock trading sessions."
          destination="/resources#mock-trading-game"
          Icon={BiCandles}
        />
        <ResourcesButton
          btnTitle="Workshops"
          btnText="Workshop slides and notes on a variety of quant topics."
          destination="/resources#workshops"
          Icon={LiaChalkboardTeacherSolid}
        />
        <ResourcesButton
          btnTitle="Opportunities"
          btnText="Internship and career opportunities for students."
          destination="/resources#opportunities"
          Icon={BiBriefcase}
        />
      </div>
    </section>
  );
};
export default ResourcesSection;
