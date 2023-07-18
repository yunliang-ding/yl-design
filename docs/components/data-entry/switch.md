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
  return <Switch />;
};
```

```jsx
/**
 * title: 显示文本
 */
import React from 'react';
import { Switch, Icon, Space } from 'yl-design';
export default () => {
  return (
    <Space>
      <Switch checkedChildren="开" unCheckedChildren="关" />
      <Switch checkedChildren="1" unCheckedChildren="0" checked={false} />
      <Switch
        checkedChildren={<Icon type="duihao" />}
        unCheckedChildren={<Icon type="guanbi" />}
      />
    </Space>
  );
};
```

```jsx
/**
 * title: 禁用状态
 */
import React, { useState } from 'react';
import { Switch, Button, Space } from 'yl-design';
export default () => {
  const [disabled, setdisabled] = useState(true);
  return (
    <Space>
      <Switch disabled={disabled} />
      <Button type="primary" onClick={setdisabled.bind(null, !disabled)}>
        Toogle
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
import { Switch, Space } from 'yl-design';
export default () => {
  const [disabled, setdisabled] = useState(true);
  return (
    <Space>
      <Switch loading checkedChildren="开" unCheckedChildren="关" />
      <Switch
        loading
        checked={false}
        checkedChildren="开"
        unCheckedChildren="关"
      />
    </Space>
  );
};
```
