import square from 'assets/logo_square.png';
import circle from 'assets/logo_circle.png';
import './index.scss';

const QuantSocLogo = ({ type, style }) => {
  return (
    <div className="common-quantsoc-logo" style={style}>
      <img src={(type === 'circle') ? circle : square} alt="quantsoc logo" />
    </div>
  );
};

export default QuantSocLogo;
