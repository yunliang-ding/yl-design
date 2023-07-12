---
order: 2
---

# Checkbox 多选框

```jsx
/**
 * title: 基本使用
 */
import React, { useState } from 'react';
import { Checkbox, Switch } from 'yl-design';
export default () => {
  const [disabled, setdisabled] = useState('');
  return (
    <>
      <Checkbox disabled={disabled}>Checkbox</Checkbox>
      <Checkbox disabled={disabled} checked>
        Default Checked
      </Checkbox>
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

```jsx
/**
 * title: 组多选
 */
import React, { useState } from 'react';
import { CheckboxGroup } from 'yl-design';
export default () => {
  const options = ['html', 'css', 'javascript', 'node', 'nginx'];
  const [value, setvalue] = useState();
  console.log('checkbox value is: ', value);
  return (
    <>
      <CheckboxGroup
        options={options}
        value={value}
        onChange={(value) => {
          setvalue(value);
        }}
      />
      <CheckboxGroup options={options} disabled style={{ marginTop: 20 }} value={value} />
    </>
  );
};
```

```jsx
/**
 * title: 组多选部分禁用
 */
import React from 'react';
import { CheckboxGroup } from 'yl-design';
export default () => {
  const options = [
    {
      label: 'A',
      value: 0,
    },
    {
      label: 'B',
      value: 1,
      disabled: true,
    },
    {
      label: 'C',
      value: 2,
    },
    {
      label: 'D',
      value: 3,
    },
  ];
  return (
    <>
      <CheckboxGroup options={options} />
    </>
  );
};
```

# API

# Checkbox

| **属性名** | **类型**    | **描述**               | **默认** |
| ---------- | ----------- | ---------------------- | -------- |
| checked    | boolean     | 指定当前是否选中       | 无       |
| disabled   | boolean     | 失效状态               | 无       |
| onChange   | Function(e) | 输入框内容变化时的回调 | 无       |
| style      | Object      | 样式                   | 无       |
| name       | string      | 样式                   | 无       |

# CheckboxGroup

| **属性名** | **类型**        | **描述**               | **默认** |
| ---------- | --------------- | ---------------------- | -------- |
| value      | string[]        | 指定选中的选项         | 无       |
| disabled   | boolean         | 失效状态               | 无       |
| onChange   | Function(value) | 输入框内容变化时的回调 | 无       |
| name       | string          | 样式                   | 无       |
| options    | string[]        | 指定可选项             | 无       |
| style      | Object          | 样式                   | 无       |
