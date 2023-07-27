import { useState, useEffect } from 'react';
import { Icon } from '../../../index';
import { InputProps } from '..';
import Prefix from './prefix';
import Suffix from './suffix';

export default ({
  value,
  prefix,
  suffix,
  addonBefore,
  addonAfter,
  type,
  disabled,
  placeholder,
  maxLength,
  onChange,
  onBlur,
  onFocus,
  onPressEnter,
  allowClear,
  onAllowClear,
  readOnly,
}: InputProps) => {
  let style: any = {};
  const [_value, setvalue] = useState(value);
  prefix && (style.paddingLeft = 30);
  suffix && (style.paddingRight = 30);
  addonBefore &&
    ((style.borderTopLeftRadius = 0), (style.borderBottomLeftRadius = 0));
  addonAfter &&
    ((style.borderTopRightRadius = 0), (style.borderBottomRightRadius = 0));
  const [password, setpassword] = useState(type === 'password');
  useEffect(() => {
    setvalue(value);
  }, [value]);
  return (
    <>
      {prefix && <Prefix>{prefix}</Prefix>}
      <input
        type={password ? 'password' : 'text'}
        style={style}
        className={disabled ? 'yld-input-disabled' : 'yld-input'}
        placeholder={placeholder}
        value={_value}
        maxLength={maxLength}
        readOnly={readOnly}
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
      />
      {type === 'password' ? (
        <>
          <Suffix>
            <Icon
              type={password ? 'password-invisible' : 'password-visible'}
              onClick={() => {
                setpassword(!password);
              }}
            />
          </Suffix>
        </>
      ) : (
        <>
          {!disabled && allowClear && _value !== '' && (
            <Suffix style={{ marginRight: suffix ? 24 : 8 }}>
              <Icon
                type="cuo"
                onClick={() => {
                  setvalue('');
                  typeof onAllowClear === 'function' && onAllowClear();
                }}
              />
            </Suffix>
          )}
          {suffix && <Suffix>{suffix}</Suffix>}
        </>
      )}
    </>
  );
};
