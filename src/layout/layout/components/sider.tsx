import { useState } from 'react';
import { Icon } from './../../../index';
const Sider = ({
  children,
  trigger,
  collapsible,
  collapsed,
  onCollapse,
  collapsedWidth = 80,
  width,
  theme,
}) => {
  const className = ['yld-layout-sider'];
  const [_collapsed, setcollapsed] = useState(collapsed);
  if (_collapsed) {
    className.push('yld-layout-sider-collapsed');
  }
  if (theme === 'dark') {
    className.push('yld-layout-sider-dark');
  }
  let style: any = {};
  if (width && !_collapsed) {
    style.minWidth = width;
  } else {
    style.minWidth = collapsedWidth;
  }
  return (
    <aside className={className.join(' ')} style={style}>
      {collapsible && trigger !== null ? (
        <>
          <div className="yld-layout-sider-children">{children}</div>
          <div
            className="yld-layout-sider-trigger"
            onClick={() => {
              setcollapsed(!_collapsed);
              typeof onCollapse === 'function' && onCollapse(!_collapsed);
            }}
          >
            <Icon type="icon-jiantouzuo" size={20} />
          </div>
        </>
      ) : (
        children
      )}
    </aside>
  );
};
Sider.nickName = 'Sider';
export default Sider;
