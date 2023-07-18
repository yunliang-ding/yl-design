import { useState, useEffect } from 'react';
import { Icon } from '../../index';

export default ({
  value = '',
  disabled,
  style = {},
  placeholder,
  maxLength,
  onChange,
  onBlur,
  onFocus,
  onPressEnter,
  step = 1,
  min,
  max,
}: any) => {
  const [_value, setvalue] = useState(value);
  useEffect(() => {
    setvalue(value);
  }, [value]);
  const add = () => {
    let value = Number(_value) + Number(step);
    if (max !== undefined) {
      value <= max && updateValue(value);
    } else {
      updateValue(value);
    }
  };
  const minus = () => {
    let value = Number(_value) - Number(step);
    if (min !== undefined) {
      value >= min && updateValue(value);
    } else {
      updateValue(value);
    }
  };
  const updateValue = (value) => {
    setvalue(step < 1 ? Number(value).toFixed(1) : Number(value));
    typeof onChange === 'function' &&
      onChange(step < 1 ? Number(value).toFixed(1) : Number(value));
  };
  return (
    <div className="yld-input-number-wrapper" style={style}>
      <input
        type="text"
        className={disabled ? 'yld-input-number-disabled' : 'yld-input-number'}
        placeholder={placeholder}
        value={_value}
        maxLength={maxLength}
        readOnly={disabled}
        onChange={(e) => {
          setvalue(e.target.value);
        }}
        onBlur={() => {
          let value: any = Number(_value);
          if (isNaN(value)) {
            value = '';
          }
          updateValue(value);
          typeof onBlur === 'function' && onBlur(value);
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
      {!disabled && (
        <div className="yld-input-number-suffix">
          <div className="suffix-top" onClick={add}>
            <Icon type="xiala1" size={12} />
          </div>
          <div className="suffix-bottom" onClick={minus}>
            <Icon type="xialadown" size={12} />
          </div>
        </div>
      )}
    </div>
  );
};
