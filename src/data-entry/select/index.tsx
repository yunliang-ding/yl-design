import { Select, SelectMultiple, Option } from './components';
import 'index.less';

const SelectWrapper = (props: any) => {
  /**
   * @param item 解析Option
   */
  const getOptions = (item) => {
    let options = [];
    if (Object.prototype.toString.call(item) === '[object Array]') {
      options = item;
    } else if (Object.prototype.toString.call(item) === '[object Object]') {
      options.push(item);
    }
    /**
     * filter 匹配类型
     */
    return options
      .filter((option) => option.type && option.type.nickName === 'Option')
      .map((option) => {
        return {
          key: option.key || Math.random(),
          label: option.props.children,
          value: option.props.value,
          disabled: option.props.disabled,
        };
      });
  };
  let _options = []; // 定义options
  if (props.children && props.options === undefined) {
    _options = getOptions(props.children); // 递归转换
  }
  if (props.options) {
    _options = props.options;
  }
  // 组装options
  const transfrom = (options) => {
    return Array.isArray(options)
      ? options.map((option) => {
          return {
            key: Math.random(),
            label: typeof option === 'string' ? option : option.label,
            value: typeof option === 'string' ? option : option.value,
            disabled: typeof option === 'string' ? false : option.disabled,
          };
        })
      : [];
  };
  return props.multiple ? (
    <SelectMultiple {...props} options={transfrom(_options)} />
  ) : (
    <Select {...props} options={transfrom(_options)} />
  );
};
SelectWrapper.Option = Option;
export default SelectWrapper;
