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
  let className = _checked ? 'yld-checkbox yld-checkbox-checked' : 'yld-checkbox';
  disabled && (className += ' yld-checkbox-disabled');
  useEffect(() => {
    setchecked(checked);
  }, [checked]);
  return (
    <>
      <label className="yld-checkbox-wrapper">
        <span className={className}>
          <input
            type="checkbox"
            readOnly={disabled}
            style={style}
            name={name}
            checked={_checked}
            className="yld-checkbox-input"
            onChange={(e) => {
              if (disabled) return;
              setchecked(e.target.checked);
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
