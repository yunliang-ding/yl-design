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
