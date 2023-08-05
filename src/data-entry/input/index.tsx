import { CSSProperties, ReactNode, useEffect, useState } from 'react';
import AddonAfter from './components/addon-after';
import AddonBefore from './components/addon-before';
import Input from './components/input';
import TextArea from './components/text-area';

export interface InputProps {
  /** 样式 */
  style?: CSSProperties;
  /** 类型 */
  type?: 'textarea' | 'password';
  /** 类名 */
  className?: string;
  /** 前缀 */
  addonBefore?: ReactNode;
  /** 后缀 */
  addonAfter?: ReactNode;
  /** 值 */
  value?: string;
  /** 是否禁用 */
  disabled?: boolean;
  /** 是否只读 */
  readOnly?: boolean;
  /** 提示文案 */
  placeholder?: string;
  /** 最大长度 */
  maxLength?: number;
  /** 改变钩子 */
  onChange?: Function;
  /** 失去焦点钩子 */
  onBlur?: Function;
  /** 得到焦点钩子 */
  onFocus?: Function;
  /** 回车钩子 */
  onPressEnter?: Function;
  /** 是否允许清空 */
  allowClear?: boolean;
  /** 清空钩子 */
  onAllowClear?: Function;
  /** 小前缀 */
  prefix?: ReactNode;
  /** 小后缀 */
  suffix?: ReactNode;
}

export default ({
  className,
  value,
  onChange = () => {},
  ...props
}: InputProps) => {
  const [innerValue, setInnerValue] = useState(value);
  // 同步外部更新
  useEffect(() => {
    setInnerValue(value || '');
  }, [value]);
  const _className = [
    props.type === 'textarea' ? 'yld-textarea-wrapper' : 'yld-input-wrapper',
  ];
  if (className) {
    _className.push(className);
  }
  return (
    <span style={props.style} className={_className.join(' ')}>
      <AddonBefore addon={props.addonBefore} />
      {props.type === 'textarea' ? (
        <TextArea
          {...props}
          value={innerValue}
          onChange={(e) => {
            setInnerValue(e);
            onChange(e);
          }}
        />
      ) : (
        <Input
          {...props}
          value={innerValue}
          onChange={(e) => {
            setInnerValue(e);
            onChange(e);
          }}
        />
      )}
      <AddonAfter addon={props.addonAfter} />
    </span>
  );
};
