import { useState, useEffect } from 'react';
import { Icon } from '../../index';

export default ({
  value = true,
  checkedChildren,
  unCheckedChildren,
  disabled = false,
  loading = false,
  onChange,
  style = {},
}: any) => {
  const [checked, setchecked] = useState(value);
  let className = checked ? 'yld-switch-checked' : 'yld-switch';
  if (disabled || loading) {
    className += ' yld-switch-disabled';
  }
  let innerText = checked ? checkedChildren : unCheckedChildren;
  useEffect(() => {
    setchecked(value);
  }, [value]);
  return (
    <button
      className={className}
      style={style}
      onClick={(e) => {
        if (disabled || loading) return;
        setchecked(!checked);
        typeof onChange === 'function' && onChange(!checked, e);
      }}
    >
      {loading && <Icon type="loading" size={10} />}
      <span className="yld-switch-inner">{innerText}</span>
      <div className="yld-click-animating-node" />
    </button>
  );
};
