import { useState, useEffect } from 'react';
import { RadioProps } from '.';
import Radio from './index';

export default ({
  options = [],
  value = '',
  disabled = false,
  onChange,
  style = {},
  ...rest
}: RadioProps) => {
  const [_value, setvalue] = useState(value);
  useEffect(() => {
    setvalue(value);
  }, [value]);
  const _options = options.map((option) => {
    return {
      key: Math.random(),
      label: typeof option === 'string' ? option : option.label,
      value: typeof option === 'string' ? option : option.value,
      disabled: typeof option === 'string' ? false : option.disabled,
    };
  });
  return (
    <div className="yld-radio-group" style={style}>
      {_options.map((option) => {
        return (
          <Radio
            key={option.key}
            disabled={disabled || option.disabled}
            checked={option.value === _value}
            onChange={() => {
              setvalue(option.value);
              typeof onChange === 'function' && onChange(option.value);
            }}
            options={[]}
            {...rest}
          >
            {option.label}
          </Radio>
        );
      })}
    </div>
  );
};