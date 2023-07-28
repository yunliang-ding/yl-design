import { useState, useEffect } from 'react';
import { CheckBoxProps } from '.';

export default ({
  className,
  checked = false,
  disabled = false,
  onChange,
  style = {},
  children,
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
