import logo from '../../assets/logo-quantsoc.svg';
import './index.less';

import { HashLink } from 'react-router-hash-link';

const QuantSocLogo = () => {
  return (
    <HashLink
      className="logo"
      to='/#'
      smooth
      tabIndex={0}
    >
      <img src={logo} alt="logo" className="logo-img" />
      <h2 className="logo-title">QuantSoc</h2>
    </HashLink>
  );
};
export default QuantSocLogo;
