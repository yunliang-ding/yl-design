import { useEffect, useState } from 'react';
import mapping from './mapping';
import Error from './error';
import { isEmpty } from '@/tools';

export default ({
  label,
  required,
  name,
  type,
  descriptorRef,
  itemRef,
  value,
  onChange,
  props,
}) => {
  const [_value, setValue] = useState(value);
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
    });
  }, []);
  return (
    <div className="yld-form-item">
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
