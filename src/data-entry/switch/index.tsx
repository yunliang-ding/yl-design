import { useState, useEffect, CSSProperties, ReactNode } from 'react';
import { Icon } from '../../index';

interface SwitchProps {
  /** 值 */
  value?: boolean;
  /** 选中的提示 */
  checkedChildren?: ReactNode;
  /** 没选中的提示 */
  unCheckedChildren?: ReactNode;
  /** 是否禁用 */
  disabled?: boolean;
  /** 改变的钩子 */
  onChange?: Function;
  /** 点击的钩子 */
  onClick?: Function;
  /** 样式 */
  style?: CSSProperties;
}

export default ({
  value = true,
  checkedChildren,
  unCheckedChildren,
  disabled = false,
  onChange,
  onClick,
  style = {},
}: SwitchProps) => {
  const [checked, setChecked] = useState(value);
  const [loading, setLoading] = useState(false);
  let className = checked ? 'yld-switch-checked' : 'yld-switch';
  if (disabled || loading) {
    className += ' yld-switch-disabled';
  }
  let innerText = checked ? checkedChildren : unCheckedChildren;
  useEffect(() => {
    setChecked(value);
  }, [value]);
  return (
    <button
      className={className}
      style={style}
      onClick={async (e) => {
        if (disabled || loading) return;
        if (typeof onClick === 'function') {
          setLoading(true);
          await onClick(e);
          setLoading(false);
        }
        setChecked(!checked);
        typeof onChange === 'function' && onChange(!checked, e);
      }}
    >
      {loading && <Icon type="loading" size={10} />}
      <span className="yld-switch-inner">{innerText}</span>
      <div className="yld-click-animating-node" />
    </button>
  );
};
