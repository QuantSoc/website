import './index.less';

const CultureAndValues = ({ icon, title, text }) => {
  return (
    <div className="culture-and-values">
      <div className="culture-and-values__header">
        <div className="culture-and-values__icon-container">{icon}</div>
        <h3>{title}</h3>
      </div>
      <p>{text}</p>
    </div>
  );
};
export default CultureAndValues;
