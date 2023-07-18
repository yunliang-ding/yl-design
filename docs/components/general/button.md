---
order: 1
---

# Button 按钮

```jsx
/**
 * title: 基本使用
 */
import React, { useState } from 'react';
import { Button } from 'yl-design';
export default () => {
  return (
    <>
      <Button type="primary">Primary</Button>
      &nbsp;&nbsp;&nbsp;
      <Button type="dashed">Dashed</Button>
      &nbsp;&nbsp;&nbsp;
      <Button type="danger">Danger</Button>
      &nbsp;&nbsp;&nbsp;
      <Button>Default</Button>
      &nbsp;&nbsp;&nbsp;
      <Button type="primary" disabled>
        Primary
      </Button>
    </>
  );
};
```

```jsx
/**
 * title:  图标按钮
 */
import React, { useState } from 'react';
import { Button, Icon } from 'yl-design';
export default () => {
  return (
    <>
      <Button type="primary" icon="searchicon"></Button>
      &nbsp;&nbsp;&nbsp;
      <Button type="primary" icon="searchicon">
        Search
      </Button>
    </>
  );
};
```

```jsx
/**
 * title: 加载状态
 */
import React, { useState } from 'react';
import { Button, Icon } from 'yl-design';
export default () => {
  const [loading, setloading] = useState();
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Button type="primary" loading></Button>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Button
        type="primary"
        loading={loading}
        onClick={() => {
          setloading(true);
          setTimeout(() => {
            // 模拟异步请求
            setloading(false);
          }, 1000);
        }}
      >
        {loading ? 'Submit...' : 'Click Me'}
      </Button>
    </div>
  );
};
```

# API

| **属性名** | **类型**    | **描述**   | **默认** |
| ---------- | ----------- | ---------- | -------- |
| disabled   | boolean     | 是否禁用   | 20       |
| onClick    | Function(e) | 点击的回调 | 20       |
| icon       | string      | 图标       | 20       |
| loading    | boolean     | 是否加载   | 20       |
| type       | string      | 主题       | 20       |
| style      | object      | 样式       | 20       |
