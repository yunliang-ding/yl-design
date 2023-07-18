---
order: 2
---

# Icon 字体图标

```jsx
/**
 * title: 基本使用
 */
import React, { useState } from 'react';
import { Icon, Space } from 'yl-design';
import icons from './icons.json';

export default () => {
  return (
    <div style={{ display: 'flex', gap: '20px 40px', flexWrap: 'wrap' }}>
      {icons.map((item) => {
        return (
          <Space direction="column" center key={item.icon_id}>
            <Icon type={item.font_class} />
            <span>{item.font_class}</span>
          </Space>
        );
      })}
    </div>
  );
};
```

```jsx
/**
 * title: 设置大小
 */
import React, { useState } from 'react';
import { Icon, Space } from 'yl-design';
import icons from './icons.json';

export default () => {
  return (
    <div style={{ display: 'flex', gap: '20px 40px', flexWrap: 'wrap' }}>
      {icons.map((item) => {
        return (
          <Space direction="column" center key={item.icon_id}>
            <Icon type={item.font_class} size={30} />
            <span>{item.font_class}</span>
          </Space>
        );
      })}
    </div>
  );
};
```

```jsx
/**
 * title: 设置颜色
 */
import React, { useState } from 'react';
import { Icon, Space } from 'yl-design';
import icons from './icons.json';

export default () => {
  return (
    <div style={{ display: 'flex', gap: '20px 40px', flexWrap: 'wrap' }}>
      {icons.map((item) => {
        return (
          <Space direction="column" center key={item.icon_id}>
            <Icon type={item.font_class} color="#1890ff" />
            <span>{item.font_class}</span>
          </Space>
        );
      })}
    </div>
  );
};
```
