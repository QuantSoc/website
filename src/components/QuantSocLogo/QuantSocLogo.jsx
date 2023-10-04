import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo-quantsoc.svg';
import './index.less';

const QuantSocLogo = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };

  return (
    <div
      className="logo"
      onClick={handleClick}
      onKeyDown={handleClick}
      role="button"
      tabIndex={0}
    >
      <img src={logo} alt="logo" className="logo-img" />
      <h2 className="logo-title">QuantSoc</h2>
    </div>
  );
};
export default QuantSocLogo;
