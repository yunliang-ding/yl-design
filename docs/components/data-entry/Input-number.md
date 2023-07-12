---
order: 10
---

# InputNumber 数字输入框

```jsx
/**
 * title: 基本使用
 */
import React, { useState } from 'react';
import { InputNumber, Switch } from 'yl-design';
export default () => {
  const [disabled, setdisabled] = useState(false);
  return (
    <>
      <InputNumber placeholder="普通输入框" style={{ width: 100 }} disabled={disabled} />
      <br />
      <InputNumber step={0.1} placeholder="设置step" style={{ width: 100 }} disabled={disabled} />
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

| **属性名**   | **类型**        | **描述**               | **默认** |
| ------------ | --------------- | ---------------------- | -------- |
| value        | string          | 输入框默认内容         | 无       |
| placeholder  | string          | 提示语                 | 无       |
| step         | number          | 步长                   | 1        |
| disabled     | boolean         | 是否禁用状态           | false    |
| onChange     | Function(value) | 输入框内容变化时的回调 | 无       |
| onPressEnter | Function(e)     | 按下回车的回调         | 无       |
| onBlur       | Function(e)     | 输入框得到焦点         | 无       |
| onFocus      | Function(e)     | 输入框失去焦点         | 无       |
| style        | Object          | 样式                   | 无       |
