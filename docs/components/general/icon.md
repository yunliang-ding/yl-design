---
order: 1
---

# Icon 字体图标

```jsx
/**
 * title: 基本使用
 */
import React, { useState } from 'react';
import { Icon, CopyToClipboard } from 'yl-design';
import icons from './icons.json';

export default () => {
  return (
    <div style={{ display: 'flex', gap: '20px 40px', flexWrap: 'wrap' }}>
      {icons.map((item) => {
        return (
          <CopyToClipboard message text={`<Icon type='${item.font_class}' />`}>
            <Icon type={item.font_class} />
          </CopyToClipboard>
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
import { Icon, CopyToClipboard } from 'yl-design';
import icons from './icons.json';

export default () => {
  return (
    <div style={{ display: 'flex', gap: '20px 40px', flexWrap: 'wrap' }}>
      {icons.map((item) => {
        return (
          <CopyToClipboard message text={`<Icon type='${item.font_class}' />`}>
            <Icon type={item.font_class} size={30} />
          </CopyToClipboard>
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
import { Icon, CopyToClipboard } from 'yl-design';
import icons from './icons.json';

export default () => {
  return (
    <div style={{ display: 'flex', gap: '20px 40px', flexWrap: 'wrap' }}>
      {icons.map((item) => {
        return (
          <CopyToClipboard message text={`<Icon type='${item.font_class}' />`}>
            <Icon type={item.font_class} color="#1890ff" />
          </CopyToClipboard>
        );
      })}
    </div>
  );
};
```
