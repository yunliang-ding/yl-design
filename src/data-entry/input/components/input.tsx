import { useState } from 'react';
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
  maxLength = 64,
  onChange,
  onBlur,
  onFocus,
  onPressEnter,
  allowClear = true,
  onAllowClear,
  readOnly,
  showCount = true,
}: InputProps) => {
  let style: any = {};
  prefix && (style.paddingLeft = 30);
  suffix && (style.paddingRight = 30);
  addonBefore &&
    ((style.borderTopLeftRadius = 0), (style.borderBottomLeftRadius = 0));
  addonAfter &&
    ((style.borderTopRightRadius = 0), (style.borderBottomRightRadius = 0));
  const [password, setPassword] = useState(type === 'password');
  const _showCount = showCount && !addonAfter && !password;
  let countRight = 4;
  if (suffix) {
    countRight += 24;
  }
  let cuoMarginRight = 8;
  if (suffix) {
    cuoMarginRight += 26;
  }
  if (_showCount) {
    cuoMarginRight += 36;
  }
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        width: '100%',
      }}
    >
      {prefix && <Prefix>{prefix}</Prefix>}
      <input
        type={password ? 'password' : 'text'}
        style={style}
        className={disabled ? 'yld-input-disabled' : 'yld-input'}
        placeholder={placeholder}
        value={value}
        maxLength={maxLength}
        readOnly={readOnly}
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
      />
      {_showCount && (
        <span className="yld-input-count" style={{ right: countRight }}>
          {value?.length || 0}/{maxLength}
        </span>
      )}
      {type === 'password' ? (
        <>
          <Suffix>
            <Icon
              type={password ? 'password-invisible' : 'password-visible'}
              onClick={() => {
                setPassword(!password);
              }}
            />
          </Suffix>
        </>
      ) : (
        <>
          {!disabled && allowClear && value !== '' && (
            <Suffix style={{ marginRight: cuoMarginRight }}>
              <Icon
                type="cuo"
                onClick={() => {
                  onChange('');
                  typeof onAllowClear === 'function' && onAllowClear();
                }}
              />
            </Suffix>
          )}
          {suffix && <Suffix>{suffix}</Suffix>}
        </>
      )}
    </div>
  );
};
