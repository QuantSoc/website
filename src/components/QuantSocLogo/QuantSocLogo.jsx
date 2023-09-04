import logo from '../../assets/logo-quantsoc.svg';

const QuantSocLogo = () => {
  return (
    <div className="logo">
      <img src={logo} alt="logo" className="logo-img" />
      <a href="/" className="logo-title">
        <h2 className="logo-title">QuantSoc</h2>
      </a>
    </div>
  );
};
export default QuantSocLogo;
