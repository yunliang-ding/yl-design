import { BigNumber } from '@/tools';
import { useState, useEffect, CSSProperties } from 'react';
import { Icon } from '../../index';

export interface InputNumberProps {
  /** 值 */
  value?: number;
  /** 类名 */
  className?: string;
  /** 是否禁用 */
  disabled?: boolean;
  /** 样式 */
  style?: CSSProperties;
  /** 提示文案 */
  placeholder?: string;
  /** 最大位数 */
  maxLength?: number;
  /** 改变钩子 */
  onChange?: Function;
  /** 失去焦点钩子 */
  onBlur?: Function;
  /** 得到焦点钩子 */
  onFocus?: Function;
  /** 回车钩子 */
  onPressEnter?: Function;
  /** 跨度 */
  step?: number;
  /** 最小范围 */
  min?: number;
  /** 最大范围 */
  max?: number;
}

export default ({
  value,
  className,
  disabled = false,
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
}: InputNumberProps) => {
  const [innerValue, setInnerValue] = useState(value);
  useEffect(() => {
    setInnerValue(value);
  }, [value]);
  /** 更新 */
  const setValue = (value) => {
    setInnerValue(value);
    onChange?.(value);
  };
  const add = () => {
    let value = BigNumber.add(innerValue, step);
    if (max !== undefined) {
      value <= max && setValue(value);
    } else {
      setValue(value);
    }
  };
  const minus = () => {
    let value = BigNumber.minus(innerValue, step);
    if (min !== undefined) {
      value >= min && setValue(value);
    } else {
      setValue(value);
    }
  };
  const _className = ['yld-input-number-wrapper'];
  if (className) {
    _className.push(className);
  }
  return (
    <div className={_className.join(' ')} style={style}>
      <input
        type="number"
        className={disabled ? 'yld-input-number-disabled' : 'yld-input-number'}
        placeholder={placeholder}
        value={innerValue}
        maxLength={maxLength}
        onChange={(e: any) => {
          if (e.target.value === '') {
            setValue(undefined);
          } else {
            setValue(Number(e.target.value));
          }
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
