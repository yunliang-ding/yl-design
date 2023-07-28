---
order: 10
---

# Slider 滑动输入条

```jsx
/**
 * title: 基本使用
 */
import React, { useState } from 'react';
import { Slider, InputNumber, Switch } from 'yl-design';
export default () => {
  const [value, setvalue] = useState(30);
  const [disabled, setdisabled] = useState(false);
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Slider
          value={value}
          disabled={disabled}
          tooltipVisible={null}
          style={{ width: 300 }}
          onChange={(value) => {
            setvalue(value);
          }}
        />
        &nbsp;&nbsp;&nbsp;
        <InputNumber
          value={value}
          disabled={disabled}
          min={0}
          max={100}
          style={{ width: 60 }}
          onChange={(value) => {
            setvalue(value);
          }}
        />
      </div>
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

<API src="../../../src/data-entry/slider/index.tsx" hideTitle></API>
