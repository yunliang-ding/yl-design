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
    <>
      <Icon type="yldiconhezi" />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Icon type="yldiconempty" />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Icon type="yldiconcloud-form" />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Icon type="yldiconjiaohu" />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Icon type="yldiconweimingmingwenjianjia_rili" />
    </>
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
    <>
      <Icon type="yldiconhezi" size={30} />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Icon type="yldiconempty" size={30} />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Icon type="yldiconcloud-form" size={30} />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Icon type="yldiconjiaohu" size={30} />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Icon type="yldiconweimingmingwenjianjia_rili" size={30} />
    </>
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
    <>
      <Icon type="yldiconhezi" size={30} color="#1890ff" />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Icon type="yldiconempty" size={30} color="#1890ff" />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Icon type="yldiconcloud-form" size={30} color="#1890ff" />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Icon type="yldiconjiaohu" size={30} color="#1890ff" />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Icon type="yldiconweimingmingwenjianjia_rili" size={30} color="#1890ff" />
    </>
  );
};
```

# API

| **属性名** | **类型**    | **描述** | **默认** |
| ---------- | ----------- | -------- | -------- |
| size       | number      | 字体大小 | 18       |
| color      | stirng      | 字体颜色 | 无       |
| style      | Object      | 样式     | 无       |
| type       | string      | icon     | 无       |
| onClick    | Function(e) | 点击回调 | 无       |
