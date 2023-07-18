---
order: 2
---

# CopyToClipboard 剪切板

```jsx
/**
 * title: 基本使用
 */
import React, { useState } from 'react';
import { CopyToClipboard } from 'yl-design';

export default () => {
  return (
    <CopyToClipboard message text="这是一个描述信息">
      这是一个描述信息
    </CopyToClipboard>
  );
};
```
