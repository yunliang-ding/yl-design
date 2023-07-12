---
order: 1
---

# Pagination 分页器

```jsx
/**
 * title: 基本使用
 */
import React, { useState } from 'react';
import { Pagination, Icon } from 'yl-design';
export default () => {
  return (
    <>
      <Pagination
        current={5}
        pageSize={10}
        total={600}
        showJumper
        pageSizeOptions={[10, 20, 30]}
        onPageSizeChange={(e) => {
          console.log(e);
        }}
        onChange={(e) => {
          console.log(e);
        }}
      />
    </>
  );
};
```

# API

| **属性名** | **类型**                     | **描述**     | **默认** |
| ---------- | ---------------------------- | ------------ | -------- |
| menus      | array                        | 菜单数据     | []       |
| menuClick  | Function(openKey, selectKey) | 菜单点击事件 | 无       |
| openKey    | string[]                     | 样式         | 无       |
| selectKey  | string[]                     | icon         | 无       |
| style      | object                       | 点击回调     | 无       |
| collapsed  | boolean                      | 是否收起     | false    |
| theme      | string                       | light/dark   | light    |
