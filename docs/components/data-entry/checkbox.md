---
order: 5
---

# Checkbox 多选框

```jsx
/**
 * title: 基本使用
 */
import React, { useState } from 'react';
import { Checkbox } from 'yl-design';
export default () => {
  const [checked, setCheck] = useState(false);
  return (
    <Checkbox
      checked={checked}
      onChange={(e) => {
        setCheck(e.target.checked);
      }}
    >
      单一选择
    </Checkbox>
  );
};
```

```jsx
/**
 * title: 选项组
 */
import React, { useState } from 'react';
import { CheckGroup } from 'yl-design';
export default () => {
  const options = [
    {
      label: 'Html',
      value: 'Html',
    },
    {
      label: 'Css',
      value: 'Css',
    },
    {
      label: 'JavaScript',
      value: 'JavaScript',
    },
    {
      label: 'React',
      value: 'React',
    },
    {
      label: 'Vue',
      value: 'Vue',
      disabled: true,
    },
  ];
  const [value, setValue] = useState(['React']);
  console.log('checkbox value is: ', value);
  return (
    <CheckGroup
      options={options}
      value={value}
      onChange={(value) => {
        setValue(value);
      }}
    />
  );
};
```

## API

<API src="../../../src/data-entry/checkbox/index.tsx" hideTitle></API>
