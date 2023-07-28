import { useState, useEffect, CSSProperties, ReactNode } from 'react';

export interface CheckBoxProps {
  /** 类名 */
  className?: string;
  /** 是否选中 */
  checked?: boolean;
  /** 改变的钩子 */
  onChange?: Function;
  /** 是否禁用 */
  disabled?: boolean;
  /** 样式 */
  style?: CSSProperties;
  /** 文本 */
  children?: ReactNode;
}

export default ({
  className,
  checked = false,
  disabled = false,
  onChange,
  style = {},
  children = null,
}: CheckBoxProps) => {
  const [_checked, setChecked] = useState(checked);
  const _className = ['yld-checkbox'];
  if (_checked) {
    _className.push('yld-checkbox-checked');
  }
  if (disabled) {
    _className.push('yld-checkbox-disabled');
  }
  if (className) {
    _className.push(className);
  }
  useEffect(() => {
    setChecked(checked);
  }, [checked]);
  return (
    <>
      <label className="yld-checkbox-wrapper">
        <span className={_className.join(' ')}>
          <input
            type="checkbox"
            readOnly={disabled}
            style={style}
            checked={_checked}
            className="yld-checkbox-input"
            onChange={(e) => {
              if (disabled) return;
              setChecked(e.target.checked);
              typeof onChange === 'function' && onChange(e);
            }}
          />
          <span className="yld-checkbox-inner"></span>
        </span>
        <span>{children}</span>
      </label>
    </>
  );
};
