import React, { useState, useEffect } from 'react';
import { Radio } from '../../../index';
/**
| **属性名**   | **类型**             | **描述**     | **默认**   |
| ------------ | -------------------- | ------------ | ---------- |
| checked       | boolean   | 指定当前是否选中	           | 无       |
| disabled      | boolean   | 失效状态	          | 无       |
| onChange      | function(value) | 输入框内容变化时的回调    | 无      |
| name         | string      | 样式                 | 无      |
| style         | Object      | 样式                 | 无      |
| value         | string[]      | 指定选中的选项	   | 无      |
 */
export default ({
  options = [],
  value = '',
  disabled = false,
  onChange,
  style = {},
  name = '',
}) => {
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
            name={name}
            checked={option.value === _value}
            onChange={() => {
              setvalue(option.value);
              typeof onChange === 'function' && onChange(option.value);
            }}
          >
            {option.label}
          </Radio>
        );
      })}
    </div>
  );
};
