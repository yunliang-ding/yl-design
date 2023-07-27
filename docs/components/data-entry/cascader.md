---
order: 7
---

# Cascader 级联选择器

```jsx
/**
 * title: 基本使用
 */
import React, { useState } from 'react';
import { Cascader, Switch } from 'yl-design';
export default () => {
  const options = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            },
            {
              value: 'disabled',
              label: 'disabled',
              disabled: true,
            },
          ],
        },
      ],
    },
  ];
  const [disabled, setdisabled] = useState();
  return (
    <>
      <Cascader
        placeholder="请选择"
        disabled={disabled}
        options={options}
        style={{ width: 200 }}
        onChange={(value) => {
          console.log(value);
        }}
      />
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
 * title: 设置默认值
 */
import React, { useState } from 'react';
import { Cascader } from 'yl-design';
export default () => {
  const options = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            },
          ],
        },
      ],
    },
  ];
  return (
    <Cascader
      placeholder="请选择"
      options={options}
      style={{ width: 200 }}
      value={['jiangsu', 'nanjing', 'zhonghuamen']}
      onChange={(value) => {
        console.log(value);
      }}
    />
  );
};
```

```jsx
/**
 * title: 自定义字段名
 */
import React, { useState } from 'react';
import { Cascader } from 'yl-design';
export default () => {
  const options = [
    {
      code: 'zhejiang',
      name: 'Zhejiang',
      items: [
        {
          code: 'hangzhou',
          name: 'Hangzhou',
          items: [
            {
              code: 'xihu',
              name: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      code: 'jiangsu',
      name: 'Jiangsu',
      items: [
        {
          code: 'nanjing',
          name: 'Nanjing',
          items: [
            {
              code: 'zhonghuamen',
              name: 'Zhong Hua Men',
            },
          ],
        },
      ],
    },
  ];
  return (
    <Cascader
      placeholder="请选择"
      fieldNames={{ label: 'name', value: 'code', children: 'items' }}
      options={options}
      style={{ width: 200 }}
      onChange={(value) => {
        console.log(value);
      }}
    />
  );
};
```
