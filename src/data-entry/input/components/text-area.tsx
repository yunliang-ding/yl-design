import { useState, useEffect } from 'react';
export default ({
  value = '',
  addonBefore,
  addonAfter,
  disabled,
  placeholder,
  maxLength,
  onChange,
  onBlur,
  onFocus,
  onPressEnter,
}) => {
  const [_value, setvalue] = useState(value);
  let style: any = {};
  addonBefore && ((style.borderTopLeftRadius = 0), (style.borderTopRightRadius = 0));
  addonAfter && ((style.borderBottomLeftRadius = 0), (style.borderBottomRightRadius = 0));
  useEffect(() => {
    setvalue(value);
  }, [value]);
  return (
    <textarea
      readOnly={disabled}
      className={disabled ? 'yld-textarea-disabled' : 'yld-textarea'}
      placeholder={placeholder}
      maxLength={maxLength}
      value={_value}
      style={style}
      onChange={(e) => {
        setvalue(e.target.value);
        typeof onChange === 'function' && onChange(e);
      }}
      onBlur={(e) => {
        typeof onBlur === 'function' && onBlur(e);
      }}
      onFocus={(e) => {
        typeof onFocus === 'function' && onFocus(e);
      }}
      onKeyDown={(e) => {
        if (e.keyCode === 13) {
          typeof onPressEnter === 'function' && onPressEnter(e);
        }
      }}
    >
      {_value}
    </textarea>
  );
};
