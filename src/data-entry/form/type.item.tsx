import { ReactNode } from 'react';

export interface ItemProps {
  type: string;
  name: string;
  label: ReactNode;
  required?: boolean;
  tooltip?: ReactNode;
  extra?: ReactNode;
  props: any;
}

const Hello: React.FC<ItemProps> = () => null;

export default Hello;
