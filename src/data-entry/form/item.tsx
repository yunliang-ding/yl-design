import { useEffect, useState } from 'react';
import mapping from './mapping';
import Error from './error';
import { isEmpty } from '@/tools';

export default ({ descriptorRef, itemRef, value, onChange, form, item }) => {
  const [_item, setItem] = useState(item);
  const {
    label,
    required,
    name,
    type,
    style = {},
    span = 1,
    props,
    visible,
  } = _item;
  const [, setRefresh] = useState(Math.random());
  const [_value, setValue] = useState(value);
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState(false);
  const Comp =
    typeof type === 'function' ? type : mapping[type] || <Error type={type} />;
  // 生成校验规则
  if (required) {
    descriptorRef.current[name] = {
      type: 'string',
      required: true,
      message: `${label} 不能为空`,
      validator: (rule, value) => !isEmpty(value),
    };
  }
  useEffect(() => {
    // 展示报错信息
    Object.assign(itemRef, {
      showError(error) {
        setError(error);
      },
      clearError() {
        setError(false);
      },
      setValue,
      setDisabled,
      reload: () => {
        setRefresh(Math.random());
      },
      setItem: (item) => {
        // 做一个合并操作, 之后重新渲染
        setItem({
          ..._item,
          ...item,
        });
      },
    });
  }, []);
  if (typeof visible === 'function' && visible(form) === false) {
    return null;
  }
  const className = ['yld-form-item'];
  if (required) {
    className.push('yld-form-item-required');
  }
  if (error) {
    className.push('yld-form-item-error');
  }
  return (
    <div
      className={className.join(' ')}
      style={{
        ...style,
        gridColumnStart: `span ${span}`,
      }}
    >
      <label>{label}</label>
      <div className="yld-form-item-wapper">
        <Comp
          disabled={disabled}
          placeholder={`${placeholderMapping[type]}${label}`}
          {...props}
          /** 注入属性 value 和 onChange */
          value={_value}
          onChange={onChange}
        />
        {error && <div className="yld-form-item-error-message">{error}</div>}
      </div>
    </div>
  );
};

const placeholderMapping = {
  Input: '请输入',
  InputNumber: '请输入',
  Select: '请选择',
  AutoComplete: '请输入',
  Cascader: '请选择',
  DatePicker: '请选择',
  TimePicker: '请选择',
};
