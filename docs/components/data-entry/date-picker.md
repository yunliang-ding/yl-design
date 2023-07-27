---
order: 8
---

# DatePicker 日期选择

```jsx
/**
 * title: 基本使用
 */
import React, { useState } from 'react';
import { DatePicker, Button, Switch } from 'yl-design';
export default () => {
  const [disabled, setdisabled] = useState(false);
  return (
    <>
      <DatePicker
        style={{ width: 200 }}
        placeholder="选择日期"
        disabled={disabled}
        onChange={(e) => {
          console.log('value is', e);
        }}
      />
      <br />
      <DatePicker
        style={{ width: 200 }}
        value="2020-08-12"
        placeholder="选择日期"
        disabled={disabled}
        onChange={(e) => {
          console.log('value is', e);
        }}
      />
      <br />
      <Switch
        checkedChildren="启用"
        unCheckedChildren="禁用"
        checked={!disabled}
        onChange={setdisabled.bind(null, !disabled)}
      />
    </>
  );
};
```

# API

| **属性名**   | **类型**                | **描述**           | **默认** |
| ------------ | ----------------------- | ------------------ | -------- |
| value        | string                  | 指定当前选中的条目 | 无       |
| placeholder  | string                  | 提示文案           | 无       |
| allowClear   | boolean                 | 支持清除           | true     |
| style        | object                  | 输入框 style 属性  | 无       |
| onChange     | Function(value, option) | 选中 option        | 无       |
| addonAfter   | ReactNode               | 设置前置标签       | 无       |
| addonBefore  | ReactNode               | 设置后置标签       | 无       |
| disabled     | boolean                 | 是否禁用状态       | false    |
| disabledDate | Function(e)             | 禁用日期           | false    |
