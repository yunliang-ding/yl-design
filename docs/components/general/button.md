---
title: Button 按钮
order: 2
# toc: menu
---

# 基本使用

```jsx
/**
 * title: 基本使用
 */
import React, { useState } from 'react';
import { Button, Space } from 'yl-design';
export default () => {
  return (
    <Space>
      <Button>Default</Button>
      <Button type="primary">Primary</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="danger">Danger</Button>
      <Button type="link">Link</Button>
      <Button type="primary" ghost>
        ghost
      </Button>
    </Space>
  );
};
```

## 设置图标

```jsx
import React, { useState } from 'react';
import { Button, Icon, Space } from 'yl-design';

export default () => {
  return (
    <Space>
      <Button type="primary" icon="searchicon" />
      <Button type="primary" icon="searchicon">
        Search
      </Button>
    </Space>
  );
};
```

## 自动等待

```jsx
import React, { useState } from 'react';
import { Button, Icon, Space } from 'yl-design';
export default () => {
  return (
    <Button
      type="primary"
      onClick={() => {
        return new Promise((res) => setTimeout(res, 1000));
      }}
    >
      提交表单
    </Button>
  );
};
```

## API

<API src="../../../src/general/button/index.tsx" hideTitle></API>
