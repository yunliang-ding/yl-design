import { MutableRefObject, ReactNode } from 'react';

export interface FormInstance {
  setDisabled?: Function;
  mergeItemByName?: Function;
  getValues?: Function;
  setValues?: Function;
  validateFields?: Function;
  validateField?: Function;
}

export interface FormRefInstance extends Omit<MutableRefObject<{}>, 'current'> {
  current: FormInstance;
}

export interface ItemProps {
  type: string;
  name: string;
  label: ReactNode;
  required?: boolean;
  tooltip?: ReactNode;
  extra?: ReactNode;
  props: any;
}
