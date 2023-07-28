import { MutableRefObject } from 'react';
import { FormInstance } from './type.instance';
import { ItemProps } from './type.item';

export interface FormRefInstance extends Omit<MutableRefObject<{}>, 'current'> {
  current: FormInstance;
}

export interface FormProps {
  form?: FormInstance;
  initialValues?: any;
  onValuesChange?: Function;
  items: ItemProps[];
  column?: 1 | 2 | 3 | 4;
}

const Hello: React.FC<FormProps> = () => null;

export default Hello;
