# Timeline 时间线

```jsx
/**
 * title: 基本使用
 */
import React, { useState } from 'react';
import { Timeline, Icon } from 'yl-design';
export default () => {
  const items = [
    {
      title: '描述信息1',
    },
    {
      title: '描述信息2',
      dot: <Icon type="DarkTheme" />,
    },
    {
      title: '描述信息2',
    },
  ];
  return <Timeline items={items} />;
};
```
