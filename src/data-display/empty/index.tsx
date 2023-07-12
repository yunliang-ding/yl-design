import { Icon } from '../../index';
import './index.less';

export default ({ label = 'No Data', icon = 'suiconempty' }) => {
  return (
    <div className="yld-empty-wrapper">
      <Icon type={icon} size={50} />
      <span className="yld-empty-wrapper-label">{label}</span>
    </div>
  );
};
