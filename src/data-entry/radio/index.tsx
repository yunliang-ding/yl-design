import { useState, useEffect } from 'react';

export default ({
  checked = false,
  disabled = false,
  onChange,
  style = {},
  children,
  name = '',
}: any) => {
  const [_checked, setchecked] = useState(checked);
  let className = _checked ? 'yld-radio yld-radio-checked' : 'yld-radio';
  disabled && (className += ' yld-radio-disabled');
  useEffect(() => {
    setchecked(checked);
  }, [checked]);
  return (
    <>
      <label className="yld-radio-wrapper">
        <span className={className}>
          <input
            type="radio"
            readOnly={disabled}
            style={style}
            name={name}
            checked={_checked}
            className="yld-radio-input"
            onChange={(e) => {
              if (disabled) {
                return;
              }
              setchecked(e.target.checked);
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
