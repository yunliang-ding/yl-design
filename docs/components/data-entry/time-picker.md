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

## API

<API src="../../../src/data-entry/time-picker/index.tsx" hideTitle></API>
