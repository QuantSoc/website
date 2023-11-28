import { AiOutlineTeam } from 'react-icons/ai';
import { BiParty } from 'react-icons/bi';
import { LiaHandsHelpingSolid } from 'react-icons/lia';
import { GrGroup, GrConnect } from 'react-icons/gr';
import { TbSocial } from 'react-icons/tb';
import CultureAndValues from '../CultureAndValues/CultureAndValues';
import './index.less';

const cultureAndValues = [
  {
    icon: <AiOutlineTeam className="culture-and-values__icon" />,
    title: 'Team effort',
    text: 'We believe that teamwork is the key to success. We encourage collaboration between our members and teams, and we work closely with our sponsors and other societies to create meaningful experiences.',
  },
  {
    icon: <BiParty className="culture-and-values__icon" />,
    title: 'Fun times',
    text: 'We believe that learning should be fun! We strive to create exciting and engaging events, games, challenges and opportunities for all to enjoy.',
  },
  {
    icon: <LiaHandsHelpingSolid className="culture-and-values__icon" />,
    title: 'Everyone is welcome',
    text: 'We welcome students from all backgrounds and degree disciplines, and we do not require any prior knowledge of quantitative finance or technology.',
  },
  {
    icon: <TbSocial className="culture-and-values__icon" />,
    title: 'We stay connected',
    text: 'We are committed to connecting our members to the quantitative finance community, and we work closely with our sponsors and other societies to create meaningful experiences.',
  },
  // {
  //   icon: <GrGroup className="culture-and-values__icon" />,
  //   title: 'Community',
  //   text: 'We are a community of like-minded individuals who are passionate about
  //   quantitative finance and technology. We are committed to creating a welcoming
  //   and inclusive environment for all.',
  // },
];

const CultureAndValuesSection = () => {
  return (
    <section className="culture-and-values__container">
      <h2>Our values & culture</h2>
      <div className="culture-and-values__grid">
        {cultureAndValues.map((culVal) => {
          return (
            <CultureAndValues
              key={culVal.text.split(' ').join('')}
              icon={culVal.icon}
              title={culVal.title}
              text={culVal.text}
            />
          );
        })}
      </div>
    </section>
  );
};
export default CultureAndValuesSection;
