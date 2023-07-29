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
