---
order: 4
---

# Radio 单选框

```jsx
/**
 * title: 基本使用
 */
import React, { useState } from 'react';
import { Radio } from 'yl-design';

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
    },
  ];
  const [value, setValue] = useState('React');
  return (
    <Radio
      options={options}
      value={value}
      onChange={(value) => {
        setValue(value);
      }}
    />
  );
};
```

```jsx
/**
 * title: 组多选部分禁用
 */
import React, { useState } from 'react';
import { Radio } from 'yl-design';

export default () => {
  const options = [
    {
      label: 'A',
      value: 'A',
      disabled: true,
    },
    {
      label: 'B',
      value: 'B',
    },
  ];
  const [value, setValue] = useState();
  return (
    <>
      <Radio
        options={options}
        value={value}
        onChange={(value) => {
          setValue(value);
        }}
      />
    </>
  );
};
```

`

## API

<API src="../../../src/data-entry/radio/index.tsx" hideTitle></API>
