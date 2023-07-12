# Empty 空数据

```jsx
/**
 * title: 基本使用
 */
import React from 'react';
import { Empty } from 'yl-design';
export default () => {
  return <Empty />;
};
```

```jsx
/**
 * title: 自定义文案
 */
import React from 'react';
import { Empty } from 'yl-design';
export default () => {
  return <Empty label={'暂无数据展示'} />;
};
```

```jsx
/**
 * title: 自定义图标
 */
import React from 'react';
import { Empty, Icon } from 'yl-design';
export default () => {
  return <Empty icon="yldiconsearchicon" label={'查找信息为空'} />;
};
```
