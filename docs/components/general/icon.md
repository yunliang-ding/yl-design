---
order: 2
---

# Icon 字体图标

```jsx
/**
 * title: 基本使用
 */
import React, { useState } from 'react';
import { Icon } from 'yl-design';
export default () => {
  return (
    <div style={{ display: 'flex', gap: 10 }}>
      <Icon type="user" />
      <Icon type="empty" />
      <Icon type="cloud-form" />
      <Icon type="jiaohu" />
      <Icon type="weimingmingwenjianjia_rili" />
    </div>
  );
};
```

```jsx
/**
 * title: 设置大小
 */
import React, { useState } from 'react';
import { Icon } from 'yl-design';
export default () => {
  return (
    <div style={{ display: 'flex', gap: 10 }}>
      <Icon type="hezi" size={30} />
      <Icon type="empty" size={30} />
      <Icon type="cloud-form" size={30} />
      <Icon type="jiaohu" size={30} />
      <Icon type="weimingmingwenjianjia_rili" size={30} />
    </div>
  );
};
```

```jsx
/**
 * title: 设置颜色
 */
import React, { useState } from 'react';
import { Icon } from 'yl-design';
export default () => {
  return (
    <div style={{ display: 'flex', gap: 10 }}>
      <Icon type="hezi" size={30} color="#1890ff" />
      <Icon type="empty" size={30} color="#1890ff" />
      <Icon type="cloud-form" size={30} color="#1890ff" />
      <Icon type="jiaohu" size={30} color="#1890ff" />
      <Icon type="weimingmingwenjianjia_rili" size={30} color="#1890ff" />
    </div>
  );
};
```
