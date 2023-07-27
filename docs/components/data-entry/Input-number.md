---
order: 2
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
      <InputNumber
        placeholder="普通输入框"
        style={{ width: 100 }}
        disabled={disabled}
      />
      <br />
      <InputNumber
        step={0.1}
        placeholder="设置step"
        style={{ width: 100 }}
        disabled={disabled}
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

## API

<API src="../../../src/data-entry/input-number/index.tsx" hideTitle></API>
