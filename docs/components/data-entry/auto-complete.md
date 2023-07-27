---
order: 6
---

# AutoComplete 自动完成

```jsx
/**
 * title: 基本使用
 */
import React, { useState } from 'react';
import { AutoComplete, Switch } from 'yl-design';
export default () => {
  const dataSource = ['@163.com', '@qq.com', '@aliyun.com'];
  const [value, setvalue] = useState('');
  const [disabled, setdisabled] = useState('');
  const onSelect = (value) => {
    setvalue(value);
  };
  return (
    <>
      <AutoComplete
        allowClear
        dataSource={dataSource}
        style={{ width: 200 }}
        placeholder="请输入邮箱"
        onSelect={onSelect}
        value={value}
        disabled={disabled}
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
