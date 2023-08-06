import { useState } from 'react';
import { DatePicker, Space } from '../../index';
import { DatePickerProps } from '../date-picker';

export interface RangeDatePickerProps
  extends Omit<DatePickerProps, 'value' | 'placeholder'> {
  /** 值 */
  value?: string[];
  /** 提示文案 */
  placeholder?: string[];
}

export default ({
  value = [],
  onChange,
  placeholder = [],
  style = {},
  allowClear = true,
  disabled = false,
}: RangeDatePickerProps) => {
  const [_value, setValue] = useState(value);
  const handelChange = (v) => {
    setValue(v);
    onChange(v);
  };
  return (
    <div className="yld-date-picker-range" style={style}>
      <Space>
        <DatePicker
          disabled={disabled}
          allowClear={allowClear}
          placeholder={placeholder[0]}
          value={_value[0]}
          onChange={(v) => {
            handelChange([v, _value[1]]);
          }}
        />
        <span>-</span>
        <DatePicker
          disabled={disabled}
          allowClear={allowClear}
          placeholder={placeholder[1]}
          value={_value[1]}
          onChange={(v) => {
            handelChange([_value[0], v]);
          }}
        />
      </Space>
    </div>
  );
};
