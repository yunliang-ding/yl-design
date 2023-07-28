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
  const [checked, setCheck] = useState(false);
  return (
    <Radio
      checked={checked}
      onChange={(e) => {
        setCheck(e.target.checked);
      }}
    >
      单一选择
    </Radio>
  );
};
```

```jsx
/**
 * title: 基本使用
 */
import React, { useState } from 'react';
import { RadioGroup } from 'yl-design';

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
  const [value, setValue] = useState('React');
  return (
    <RadioGroup
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

<API src="../../../src/data-entry/radio/index.tsx" hideTitle></API>
