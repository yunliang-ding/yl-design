import { useEffect, useState } from 'react';
import mapping from './mapping';
import Error from './error';
import { isEmpty } from '@/tools';

export default ({ descriptorRef, itemRef, value, onChange, item }) => {
  const [_item, setItem] = useState(item);
  const {
    label,
    required,
    name,
    type,
    style = {},
    span = 1,
    props,
    visible = true,
  } = _item;
  const [_value, setValue] = useState(value);
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState(false);
  const Comp = mapping[type] || <Error type={type} />;
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
      setItem: (item) => {
        // 做一个合并操作, 之后重新渲染
        setItem({
          ..._item,
          ...item,
        });
      },
    });
  }, []);
  return (
    <div
      className="yld-form-item"
      style={{
        ...style,
        display: visible ? 'grid' : 'none',
        gridColumnStart: `span ${span}`,
      }}
    >
      <label>
        {required && <span style={{ color: 'red', marginRight: 4 }}>*</span>}
        {label}
      </label>
      <div
        className={
          error ? 'yld-form-item-wapper-error' : 'yld-form-item-wapper'
        }
      >
        <Comp
          disabled={disabled}
          placeholder={`${placeholderMapping[type]}${label}`}
          {...props}
          /** 注入属性 value 和 onChange */
          value={_value}
          onChange={onChange}
        />
        {error && (
          <div className="yld-form-item-wapper-error-message">{error}</div>
        )}
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
