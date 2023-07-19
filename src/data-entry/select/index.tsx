import { Select, SelectMultiple } from './components';

export default (props: any) => {
  return props.multiple ? <SelectMultiple {...props} /> : <Select {...props} />;
};
