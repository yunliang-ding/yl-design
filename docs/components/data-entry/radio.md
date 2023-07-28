---
order: 4
---

# Radio 单选框

```jsx
/**
 * title: 基本使用
 */
import React, { useState } from 'react';
import { Radio, Switch } from 'yl-design';
export default () => {
  const [disabled, setdisabled] = useState();
  const onChange = (e) => {
    console.log(`checked is ${e.target.checked}`);
  };
  return (
    <>
      <Radio disabled={disabled} onChange={onChange}>
        Radio
      </Radio>
      <br />
      <br />
      <Switch
        checkedChildren="启用"
        unCheckedChildren="禁用"
        checked={!disabled}
        onChange={setdisabled.bind(null, !disabled)}
      />
    </>
  );
};
```

```jsx
/**
 * title: 默认选中
 */
import React from 'react';
import { Radio } from 'yl-design';
export default () => {
  return (
    <>
      <Radio checked>Radio</Radio>
    </>
  );
};
```

```jsx
/**
 * title: 组多选
 */
import React, { useState } from 'react';
import { RadioGroup } from 'yl-design';
export default () => {
  const options = ['html', 'css', 'javascript', 'node', 'nginx'];
  const [value, setvalue] = useState();
  console.log('radio value is: ', value);
  return (
    <>
      <RadioGroup
        options={options}
        value={value}
        onChange={(value) => {
          setvalue(value);
        }}
      />
      <RadioGroup
        options={options}
        disabled
        style={{ marginTop: 20 }}
        value={value}
      />
    </>
  );
};
```

```jsx
/**
 * title: 组多选部分禁用
 */
import React, { useState } from 'react';
import { RadioGroup } from 'yl-design';
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
  const [value, setvalue] = useState();
  return (
    <>
      <RadioGroup
        options={options}
        value={value}
        onChange={(value) => {
          setvalue(value);
        }}
      />
    </>
  );
};
```

`

## API

<API src="../../../src/data-entry/radio/index.tsx" hideTitle></API>
