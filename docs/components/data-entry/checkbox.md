---
order: 5
---

# Checkbox 多选框

```jsx
/**
 * title: 基本使用
 */
import React, { useState } from 'react';
import { Checkbox, Switch } from 'yl-design';
export default () => {
  const [disabled, setdisabled] = useState('');
  return (
    <>
      <Checkbox disabled={disabled}>Checkbox</Checkbox>
      <Checkbox disabled={disabled} checked>
        Default Checked
      </Checkbox>
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
 * title: 组多选
 */
import React, { useState } from 'react';
import { CheckboxGroup } from 'yl-design';
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
  const [value, setValue] = useState(['React']);
  console.log('checkbox value is: ', value);
  return (
    <CheckboxGroup
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
import React from 'react';
import { CheckboxGroup } from 'yl-design';
export default () => {
  const options = [
    {
      label: 'A',
      value: 0,
    },
    {
      label: 'B',
      value: 1,
      disabled: true,
    },
    {
      label: 'C',
      value: 2,
    },
    {
      label: 'D',
      value: 3,
    },
  ];
  return <CheckboxGroup options={options} />;
};
```

## API

<API src="../../../src/data-entry/checkbox/index.tsx" hideTitle></API>
