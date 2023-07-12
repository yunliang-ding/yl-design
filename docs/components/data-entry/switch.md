---
order: 4
---

# Switch 开关

```jsx
/**
 * title: 基本使用
 */
import React from 'react';
import { Switch } from 'yl-design';
export default () => {
  return (
    <>
      <Switch />
    </>
  );
};
```

```jsx
/**
 * title: 显示文本
 */
import React from 'react';
import { Switch, Icon } from 'yl-design';
export default () => {
  return (
    <>
      <Switch checkedChildren="开" unCheckedChildren="关" />
      &nbsp; &nbsp; &nbsp;
      <Switch checkedChildren="1" unCheckedChildren="0" checked={false} />
      &nbsp; &nbsp; &nbsp;
      <Switch
        checkedChildren={<Icon type="yldiconduihao" />}
        unCheckedChildren={<Icon type="yldiconguanbi" />}
      />
    </>
  );
};
```

```jsx
/**
 * title: 禁用状态
 */
import React, { useState } from 'react';
import { Switch, Button } from 'yl-design';
export default () => {
  const [disabled, setdisabled] = useState(true);
  return (
    <>
      <Switch disabled={disabled} />
      <br />
      <br />
      <Button type="primary" onClick={setdisabled.bind(null, !disabled)}>
        Toogle
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
import { Switch } from 'yl-design';
export default () => {
  const [disabled, setdisabled] = useState(true);
  return (
    <>
      <Switch loading checkedChildren="开" unCheckedChildren="关" />
      &nbsp;&nbsp;&nbsp;
      <Switch loading checked={false} checkedChildren="开" unCheckedChildren="关" />
    </>
  );
};
```

# API

| **属性名**        | **类型**                                 | **描述**         | **默认** |
| ----------------- | ---------------------------------------- | ---------------- | -------- |
| checked           | Boolean                                  | 指定当前是否选中 | true     |
| checkedChildren   | ReactNode                                | 选中时的内容     | 无       |
| unCheckedChildren | ReactNode                                | 非选中时的内容   | 无       |
| disabled          | Boolean                                  | 是否禁用状态     | false    |
| loading           | Boolean                                  | 是否加载状态     | false    |
| onChange          | Function(checked: boolean, event: Event) | 变化时回调函数   | 无       |
| style             | Object                                   | 样式             | 无       |
