import { useState, useEffect, CSSProperties, ReactNode } from 'react';
import { OptionsProps } from '../select';
import Option from './option';

export interface CheckBoxProps {
  /** 类名 */
  className?: string;
  /** 数据源 */
  options?: OptionsProps[];
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
  children,
  options = [
    {
      label: children,
      value: '',
    },
  ],
  value = undefined, // 不能为引用类型不然造成死循环
  disabled = false,
  onChange,
  style = {},
}: CheckBoxProps) => {
  const [_value, setvalue] = useState(Array.isArray(value) ? value : []);
  const _options = options.map((option) => {
    return {
      key: Math.random(),
      label: typeof option === 'string' ? option : option.label,
      value: typeof option === 'string' ? option : option.value,
      disabled: typeof option === 'string' ? false : option.disabled,
    };
  });
  useEffect(() => {
    setvalue(Array.isArray(value) ? value : []);
  }, [value]);
  return (
    <div className="yld-checkbox-group" style={style}>
      {_options.map((option: any) => {
        return (
          <Option
            key={option.key}
            disabled={disabled || option.disabled}
            checked={
              Array.isArray(_value) ? _value.indexOf(option.value) > -1 : false
            }
            onChange={(e) => {
              let __value = [..._value];
              if (e.target.checked) {
                __value.push(option.value);
              } else {
                __value = _value.filter((value) => value !== option.value);
              }
              setvalue(__value);
              typeof onChange === 'function' && onChange(__value);
            }}
            options={[]}
          >
            {option.label}
          </Option>
        );
      })}
    </div>
  );
};
