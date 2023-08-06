import { InputProps } from '..';

export default ({
  value,
  addonBefore,
  addonAfter,
  disabled,
  placeholder,
  maxLength,
  onChange,
  onBlur,
  onFocus,
  onPressEnter,
}: InputProps) => {
  let style: any = {};
  addonBefore &&
    ((style.borderTopLeftRadius = 0), (style.borderTopRightRadius = 0));
  addonAfter &&
    ((style.borderBottomLeftRadius = 0), (style.borderBottomRightRadius = 0));
  return (
    <textarea
      readOnly={disabled}
      className={disabled ? 'yld-textarea-disabled' : 'yld-textarea'}
      placeholder={placeholder}
      maxLength={maxLength}
      value={value}
      style={style}
      onChange={(e) => {
        onChange(e.target.value);
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
      {value}
    </textarea>
  );
};
