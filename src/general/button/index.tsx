import { Icon } from '../../index';
import './index.less';

export default ({ disabled, ghost, onClick, icon, loading, type, style, children }: any) => {
  let className = 'yld-btn';
  if (type) {
    className += ' yld-btn-' + type;
  }
  if (ghost) {
    className += ' yld-btn-ghost';
  }
  if (disabled) {
    className += ' yld-btn-disabled';
  }
  if (loading) {
    className += ' yld-btn-loading';
  }
  return (
    <button
      className={className}
      style={style}
      onClick={(e: any) => {
        if (disabled) return;
        typeof onClick === 'function' && onClick(e);
      }}
    >
      {loading && <Icon type="suiconloading" />}
      {icon && <Icon type={icon} />}
      {children || ' '}
    </button>
  );
};
