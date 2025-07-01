import { BiCrown } from 'react-icons/bi';
import { FaRegStar } from 'react-icons/fa';
import './index.less';

const typeToIconMap = {
  principal: <BiCrown />,
  major: <FaRegStar />,
};

const SponsorTypeHeader = ({ type }) => {
  return (
    <div className="sponsor-type__header">
      <div className="sponsor-type__header__text">
        {typeToIconMap[type]}

        <p>{`${type.charAt(0).toUpperCase() + type.slice(1)} Sponsors`}</p>
      </div>
    </div>
  );
};
export default SponsorTypeHeader;
