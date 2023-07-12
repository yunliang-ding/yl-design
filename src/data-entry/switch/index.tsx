import { useState, useEffect } from 'react';
import { Icon } from '../../index';
import './index.less';

export default ({
  checked = true,
  checkedChildren,
  unCheckedChildren,
  disabled = false,
  loading = false,
  onChange,
  style = {},
}: any) => {
  const [_checked, setchecked] = useState(checked);
  let className = _checked ? 'yld-switch-checked' : 'yld-switch';
  if (disabled || loading) {
    className += ' yld-switch-disabled';
  }
  let innerText = _checked ? checkedChildren : unCheckedChildren;
  useEffect(() => {
    setchecked(checked);
  }, [checked]);
  return (
    <button
      className={className}
      style={style}
      onClick={(e) => {
        if (disabled || loading) return;
        setchecked(!_checked);
        typeof onChange === 'function' && onChange(!_checked, e);
      }}
    >
      {loading && <Icon type="suiconloading" size={10} />}
      <span className="yld-switch-inner">{innerText}</span>
      <div className="yld-click-animating-node" />
    </button>
  );
};
