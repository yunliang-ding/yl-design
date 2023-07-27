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

# API

| **属性名**     | **类型**        | **描述**     | **默认** |
| -------------- | --------------- | ------------ | -------- |
| value          | number          | 值           | 0        |
| disabled       | boolean         | 是否禁用     | false    |
| tooltipVisible | boolean         | 是否显示进度 | false    |
| onChange       | Function(value) | 改变后的回调 | 无       |
| min            | number          | 开始区间     | 0        |
| max            | number          | 结束区间     | 100      |
| style          | object          | 滑块样式     | 无       |
