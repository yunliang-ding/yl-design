---
order: 9
---

# Dropdown 下拉菜单

```jsx
/**
 * title: 基本使用
 */
import React, { useState } from 'react';
import { Dropdown, Icon } from 'yl-design';
export default () => {
  const overlay = ['Html', 'Css', 'React', 'Vue'].map((item) => {
    return (
      <p key={item} style={{ fontSize: 12, padding: 4 }}>
        {item}
      </p>
    );
  });
  return (
    <>
      <Dropdown overlay={overlay}>Click me</Dropdown>
    </>
  );
};
```

# API

| **属性名** | **类型**  | **描述**    | **默认** |
| ---------- | --------- | ----------- | -------- |
| overlay    | ReactNode | 渲染的 body | 无       |
| style      | object    | 滑块样式    | 无       |
