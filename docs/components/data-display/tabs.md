# Tabs 选项卡

```jsx
/**
 * title: 基本使用
 */
import React, { useState } from 'react';
import { Tabs } from 'yl-design';
export default () => {
  const data = [
    {
      key: 1,
      label: <span>Tab1</span>,
      content: <div>Content of Tab Pane 1 Content of Tab Pane 1 Content of Tab Pane 1</div>,
    },
    {
      key: 2,
      label: <span>Tab2</span>,
      content: <div>sub-tab2</div>,
    },
    {
      key: 3,
      label: <span>Tab3</span>,
      content: <div>sub-tab3</div>,
    },
  ];
  return (
    <Tabs
      style={{
        height: 300,
      }}
      data={data}
      onClick={(e) => {
        console.log(e);
      }}
    />
  );
};
```

```jsx
/**
 * title: 支持关闭
 */
import React, { useState } from 'react';
import { Tabs } from 'yl-design';
export default () => {
  const data = [
    {
      key: 1,
      label: <span>Tab1</span>,
      content: <div>Content of Tab Pane 1 Content of Tab Pane 1 Content of Tab Pane 1</div>,
    },
    {
      key: 2,
      label: <span>Tab2</span>,
      content: <div>sub-tab2</div>,
    },
    {
      key: 3,
      label: <span>Tab3</span>,
      content: <div>sub-tab3</div>,
    },
  ];
  return (
    <Tabs
      style={{
        height: 300,
      }}
      closable
      data={data}
      onClick={(e) => {
        console.log(e);
      }}
      onRemove={(e) => {
        console.log(e);
      }}
    />
  );
};
```
