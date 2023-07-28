import { CSSProperties, ReactNode } from 'react';
import Select from './components/select';
import SelectMultiple from './components/select-multiple';

export interface OptionsProps {
  label: ReactNode;
  value: number | string;
  disabled?: boolean;
}

export interface SelectProps {
  /** 类名 */
  className?: string;
  /** 多选模式 */
  multiple?: boolean;
  /** 数据源 */
  options?: OptionsProps[];
  /** 值 */
  value?: number | string | any[];
  /** 是否清空 */
  allowClear?: boolean;
  /** 提示语 */
  placeholder?: string;
  /** 是否禁用 */
  disabled?: boolean;
  /** 样式 */
  style?: CSSProperties;
  /** 下拉层类名 */
  dropdownClassName?: string;
  /** 下拉层样式 */
  dropdownStyle?: CSSProperties;
  /** 改变钩子 */
  onChange?: Function;
  /** 是否打开 */
  open?: boolean;
  /** 查询的钩子 */
  onSearch?: Function;
  /** 数据过滤的钩子 */
  filter?: Function | Boolean;
}

export default ({ multiple = false, ...props }: SelectProps) => {
  return multiple ? <SelectMultiple {...props} /> : <Select {...props} />;
};
