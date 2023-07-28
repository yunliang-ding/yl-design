import { useState, useEffect } from 'react';
import { RadioProps } from '.';

export default ({
  className,
  checked = false,
  disabled = false,
  onChange,
  style = {},
  children,
}: RadioProps) => {
  const [_checked, setChecked] = useState(checked);
  const _className = ['yld-radio'];
  if (_checked) {
    _className.push('yld-radio-checked');
  }
  if (disabled) {
    _className.push('yld-radio-disabled');
  }
  if (className) {
    _className.push(className);
  }
  useEffect(() => {
    setChecked(checked);
  }, [checked]);
  return (
    <>
      <label className="yld-radio-wrapper">
        <span className={_className.join(' ')}>
          <input
            type="radio"
            readOnly={disabled}
            style={style}
            checked={_checked}
            className="yld-radio-input"
            onChange={(e) => {
              if (disabled) {
                return;
              }
              setChecked(e.target.checked);
              typeof onChange === 'function' && onChange(e);
            }}
          />
          <span className="yld-radio-inner"></span>
        </span>
        <span>{children}</span>
      </label>
    </>
  );
};
