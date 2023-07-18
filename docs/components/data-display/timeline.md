# Timeline 时间线

```tsx
/**
 * title: 基本使用
 */
import React, { useState } from 'react';
import { Timeline, Icon } from 'yl-design';
export default () => {
  const items = [
    {
      title: 'Network problems being solved 2015-09-01',
      color: 'red',
    },
    {
      title: (
        <>
          <p>Solve initial network problems 1</p>
          <p>Solve initial network problems 2</p>
          <p>Solve initial network problems 3 2015-09-01</p>
          <p>Solve initial network problems 3 2015-09-01</p>
          <p>Solve initial network problems 3 2015-09-01</p>
          <p>Solve initial network problems 3 2015-09-01</p>
        </>
      ),
    },
    {
      title: 'Solve initial network problems 2015-09-01',
      dot: (
        <Icon
          color="green"
          type="message_SendSuccessfully"
          size={14}
          style={{ left: 2 }}
        />
      ),
    },
    {
      title: 'Technical testing 2015-09-01',
      color: 'green',
    },
  ];
  return <Timeline items={items} />;
};
```
