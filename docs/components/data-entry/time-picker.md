---
order: 9
---

# TimePicker 时间选择器

```jsx
/**
 * title: 基本使用
 */
import React, { useState } from 'react';
import { TimePicker, Switch } from 'yl-design';
export default () => {
  const [disabled, setdisabled] = useState();
  return (
    <>
      <TimePicker
        placeholder="请选择"
        disabled={disabled}
        style={{ width: 120 }}
        onChange={(value) => {
          console.log(value);
        }}
      />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <TimePicker
        placeholder="请选择"
        disabled={disabled}
        style={{ width: 120 }}
        value="10:12:18"
        onChange={(value) => {
          console.log(value);
        }}
      />
      <br />
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

| **属性名**        | **类型**                | **描述**                              | **默认** |
| ----------------- | ----------------------- | ------------------------------------- | -------- |
| value             | string/string[]         | 指定当前选中的条目                    | 无       |
| options           | string[]                | 下拉选项                              | 无       |
| placeholder       | string                  | 提示文案                              | 无       |
| allowClear        | boolean                 | 支持清除                              | false    |
| disabled          | boolean                 | 是否禁用                              | false    |
| style             | object                  | 输入框 style 属性                     | 无       |
| dropdownClassName | object                  | 下拉菜单的 style 属性                 | 无       |
| dropdownStyle     | object                  | 下拉菜单的 style 属性                 | 无       |
| open              | boolean                 | 是否展开下拉菜单                      | false    |
| onChange          | Function(value, option) | 选中 option，或 input 的 value 变化   | 无       |
| fieldNames        | object                  | 自定义 options 中 label name children | 无       |
