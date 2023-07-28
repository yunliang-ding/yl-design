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
      label: '浙江',
      children: [
        {
          value: 'hangzhou',
          label: '杭州',
          children: [
            {
              value: 'xihu',
              label: '西湖区',
            },
          ],
        },
      ],
    },
    {
      value: 'anhui',
      label: '安徽',
      children: [
        {
          value: 'hefei',
          label: '合肥',
          children: [
            {
              value: 'lujiang',
              label: '庐江',
            },
            {
              value: 'feixi',
              label: '肥西',
              disabled: true,
            },
          ],
        },
      ],
    },
  ];
  const [disabled, setDisabled] = useState();
  return (
    <>
      <Cascader
        placeholder="请选择"
        disabled={disabled}
        options={options}
        value={['anhui', 'hefei', 'lujiang']}
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
        onChange={setDisabled.bind(null, !disabled)}
      />
    </>
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
      name: '浙江',
      items: [
        {
          code: 'hangzhou',
          name: '杭州',
          items: [
            {
              code: 'xihu',
              name: '西湖',
            },
          ],
        },
      ],
    },
    {
      code: 'anhui',
      name: '安徽',
      items: [
        {
          code: 'hefei',
          name: '合肥',
          items: [
            {
              code: 'lujiang',
              name: '庐江',
            },
          ],
        },
        {
          code: 'anqing',
          name: '安庆',
          items: [
            {
              code: 'tongcheng',
              name: '桐城市',
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

## API

<API src="../../../src/data-entry/cascader/index.tsx" hideTitle></API>
