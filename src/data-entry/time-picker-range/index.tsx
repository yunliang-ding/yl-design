import { useState } from 'react';
import { TimePicker, Space } from '../../index';
import { TimePickerProps } from '../time-picker';

export interface RangeTimePickerProps
  extends Omit<TimePickerProps, 'value' | 'placeholder'> {
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
}: RangeTimePickerProps) => {
  const [_value, setValue] = useState(value);
  const handelChange = (v) => {
    setValue(v);
    onChange(v);
  };
  return (
    <div className="yld-time-picker-range" style={style}>
      <Space>
        <TimePicker
          disabled={disabled}
          allowClear={allowClear}
          placeholder={placeholder[0]}
          value={_value[0]}
          onChange={(v) => {
            handelChange([v, _value[1]]);
          }}
        />
        <span>-</span>
        <TimePicker
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
