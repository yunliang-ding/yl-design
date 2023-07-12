import { Icon } from '../../index';

export default ({ label = 'No Data', icon = 'yldiconempty' }) => {
  return (
    <div className="yld-empty-wrapper">
      <Icon type={icon} size={50} />
      <span className="yld-empty-wrapper-label">{label}</span>
    </div>
  );
};
