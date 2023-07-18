import { Icon } from '../../index';

export default ({ label = 'No Data', icon = 'empty' }) => {
  return (
    <div className="yld-empty-wrapper">
      <Icon type={icon} size={50} />
      <span className="yld-empty-wrapper-label">{label}</span>
    </div>
  );
};
