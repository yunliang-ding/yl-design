---
order: 1
---

# Input 输入框

```jsx
/**
 * title: 基本使用
 */
import React, { useState } from 'react';
import { Input, Switch } from 'yl-design';
export default () => {
  const [disabled, setdisabled] = useState('');
  return (
    <>
      <Input disabled={disabled} placeholder="普通输入框" />
      <br />
      <Input
        disabled={disabled}
        placeholder="指定宽度"
        style={{ width: 300 }}
      />
      <br />
      <Input
        disabled={disabled}
        placeholder="指定长度11位"
        style={{ width: 300 }}
        maxLength={11}
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

```jsx
/**
 * title: 前后缀
 */
import React from 'react';
import { Input } from 'yl-design';
export default () => {
  return (
    <>
      <Input placeholder="姓名" addonBefore={'姓名'} />
      <br />
      <Input placeholder="密码" addonAfter="密码" />
      <br />
      <Input
        placeholder="超过文本的字符看不到"
        addonBefore={'超过文本的字符看不到'}
      />
      <br />
      <Input
        placeholder="超过文本的字符看不到"
        addonAfter={'超过文本的字符看不到'}
      />
    </>
  );
};
```

```jsx
/**
 * title: 内联前后缀
 */
import React from 'react';
import { Input, Icon } from 'yl-design';
export default () => {
  return (
    <>
      <Input
        placeholder="邮箱"
        prefix={<Icon size={18} type="weimingmingwenjianjia_rili" />}
      />
      <br />
      <Input placeholder="查找" suffix={<Icon type="searchicon" />} />
      <br />
    </>
  );
};
```

```jsx
/**
 * title: 支持清除
 */
import React from 'react';
import { Input, Icon } from 'yl-design';
export default () => {
  return (
    <>
      <Input placeholder="支持清除" style={{ width: 300 }} allowClear />
      <br />
      <Input
        placeholder="支持清除"
        suffix={<Icon type="weimingmingwenjianjia_rili" />}
        style={{ width: 300 }}
        allowClear
      />
    </>
  );
};
```

```jsx
/**
 * title: 密码输入框
 */
import React from 'react';
import { Input, Icon } from 'yl-design';
export default () => {
  return (
    <>
      <Input placeholder="输入密码" style={{ width: 300 }} type="password" />
    </>
  );
};
```

```jsx
/**
 * title: 多行文本
 */
import React from 'react';
import { Input } from 'yl-design';
export default () => (
  <>
    <Input
      type="textarea"
      placeholder="详细信息.."
      addonBefore={'描述'}
      addonAfter={'限制100字符'}
      style={{ marginBottom: 20 }}
    />
    <Input
      type="textarea"
      disabled
      placeholder="详细信息.."
      addonBefore={'描述'}
    />
  </>
);
```

## API

<API src="../../../src/data-entry/input/index.tsx" hideTitle></API>
