---
order: 10
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
      <Switch checkedChildren="1" unCheckedChildren="0" value={false} />
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
  const [disabled, setDisabled] = useState(true);
  return (
    <Space>
      <Switch disabled={disabled} />
      <Button type="primary" onClick={setDisabled.bind(null, !disabled)}>
        Disabled
      </Button>
    </Space>
  );
};
```

```jsx
/**
 * title: 自动加载状态
 */
import React, { useState } from 'react';
import { Switch, Space } from 'yl-design';

export default () => {
  return (
    <Switch
      value={false}
      checkedChildren="开"
      unCheckedChildren="关"
      onClick={() => {
        return new Promise((res) => setTimeout(res, 1000));
      }}
    />
  );
};
```

## API

<API src="../../../src/data-entry/switch/index.tsx" hideTitle></API>
