# Tooltip 提示

```jsx
/**
 * title: 基本使用
 */
import React, { useState } from 'react';
import { Tooltip } from 'yl-design';
export default () => {
  return <Tooltip title={<>这个是一个描述信息</>}>Tooltip will show on mouse enter.</Tooltip>;
};
```

```jsx
/**
 * title: 方向/主题
 */
import React, { useState } from 'react';
import { Tooltip, Button, Icon, Switch } from 'yl-design';
export default () => {
  const [theme, settheme] = useState('light');
  return (
    <>
      <Switch
        checked={theme === 'dark'}
        onChange={settheme.bind(null, theme === 'light' ? 'dark' : 'light')}
        checkedChildren="dark"
        unCheckedChildren="light"
      />
      <br />
      <br />
      <br />
      <br />
      <Tooltip title={<>这个是一个描述信息</>} placement="top" theme={theme}>
        <Button>Top</Button>
      </Tooltip>
      &nbsp;&nbsp;&nbsp;
      <Tooltip title={<>这个是一个描述信息</>} placement="bottom" theme={theme}>
        <Button>Bottom</Button>
      </Tooltip>
      <br />
      <br />
      <br />
      <br />
      <Tooltip title={<>这个是一个描述信息</>} placement="left" theme={theme}>
        <Button>Left</Button>
      </Tooltip>
      &nbsp;&nbsp;&nbsp;
      <Tooltip title={<>这个是一个描述信息</>} placement="right" theme={theme}>
        <Button>Right</Button>
      </Tooltip>
    </>
  );
};
```
