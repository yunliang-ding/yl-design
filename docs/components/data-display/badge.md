# Badge 徽章

```jsx
/**
 * title: 基本使用
 */
import React from 'react';
import { Badge, Icon } from 'yl-design';
export default () => {
  return (
    <>
      <Badge count={2}>Default</Badge>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Badge count={2} color="#1890ff">
        Blue
      </Badge>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Badge count={2} color="red">
        Red
      </Badge>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Badge dot>Dot</Badge>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Badge
        color="transparent"
        count={<Icon color="red" type="password-visible" />}
      >
        Icon
      </Badge>
    </>
  );
};
```
