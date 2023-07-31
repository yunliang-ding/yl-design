import { ReactNode } from 'react';
import { FormInstance } from './type.instance';

export interface ItemTypeProps {
  form: FormInstance;
  value: any;
  onChange: Function;
}
export interface ItemProps {
  /** 表单项类型 */
  type: string | ((props: ItemTypeProps) => ReactNode);
  /** 名称 */
  name: string;
  /** 标签 */
  label: ReactNode;
  /** 是否必填 */
  required?: boolean;
  /** 小标题 */
  tooltip?: ReactNode;
  /** 描述信息 */
  extra?: ReactNode;
  /** 值改变触发指定的item渲染 */
  touchItemsRender?: {
    name: string;
    clear?: boolean;
  }[];
  /** 是否展示自己 */
  visible?: (form: FormInstance) => boolean;
  /** 表单项属性 */
  props?: any;
}

const Hello: React.FC<ItemProps> = () => null;

export default Hello;
