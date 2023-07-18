---
order: 2
---

# Button 按钮

```jsx
/**
 * title: 基本使用
 */
import React, { useState } from 'react';
import { Button, Space } from 'yl-design';
export default () => {
  return (
    <Space>
      <Button type="primary">Primary</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="danger">Danger</Button>
      <Button>Default</Button>
      <Button type="primary" disabled>
        Primary
      </Button>
    </Space>
  );
};
```

```jsx
/**
 * title:  图标按钮
 */
import React, { useState } from 'react';
import { Button, Icon, Space } from 'yl-design';
export default () => {
  return (
    <Space>
      <Button type="primary" icon="searchicon"></Button>
      <Button type="primary" icon="searchicon">
        Search
      </Button>
    </Space>
  );
};
```

```jsx
/**
 * title: 加载状态
 */
import React, { useState } from 'react';
import { Button, Icon, Space } from 'yl-design';
export default () => {
  const [loading, setloading] = useState();
  return (
    <Space>
      <Button type="primary" loading></Button>
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
    </Space>
  );
};
```
