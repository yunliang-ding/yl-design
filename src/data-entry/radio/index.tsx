import { useState, useEffect, CSSProperties, ReactNode } from 'react';
import { OptionsProps } from '../select';
import Option from './option';

export interface RadioProps {
  /** 类名 */
  className?: string;
  /** 数据源 */
  options: OptionsProps[];
  /** 值 */
  value?: any;
  /** 改变的钩子 */
  onChange?: Function;
  /** 是否禁用 */
  disabled?: boolean;
  /** 样式 */
  style?: CSSProperties;
  children?: ReactNode;
  checked?: boolean;
}

export default ({
  options = [],
  value = '',
  disabled = false,
  onChange,
  style = {},
  ...rest
}: RadioProps) => {
  const [_value, setValue] = useState(value);
  useEffect(() => {
    setValue(value);
  }, [value]);
  return (
    <div className="yld-radio-group" style={style}>
      {options.map((option) => {
        return (
          <Option
            key={option.value}
            disabled={disabled || option.disabled}
            checked={option.value === _value}
            onChange={() => {
              setValue(option.value);
              typeof onChange === 'function' && onChange(option.value);
            }}
            options={[]}
            {...rest}
          >
            {option.label}
          </Option>
        );
      })}
    </div>
  );
};
