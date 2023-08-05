import { MutableRefObject } from 'react';
import { FormInstance } from './type.instance';
import { FormItemProps } from './type.item';

export interface FormRefInstance extends Omit<MutableRefObject<{}>, 'current'> {
  current: FormInstance;
}

export interface FormProps {
  /** form 实例 */
  form?: FormInstance;
  /** 默认值 */
  initialValues?: any;
  /** 改变的钩子 */
  onValuesChange?: Function;
  /** 表单数据模型 */
  items: FormItemProps[];
  /** 布局等份 */
  column?: 1 | 2 | 3 | 4;
  /** 类名 */
  className?: string;
  /** 是否水平布局 */
  horizontal?: boolean;
}

const Hello: React.FC<FormProps> = () => null;

export default Hello;
