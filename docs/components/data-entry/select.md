---
order: 5
---

# Select 选择器

```jsx
/**
 * title: 基本使用
 */
import React, { useState } from 'react';
import { Select, Switch } from 'yl-design';
const { Option } = Select;
export default () => {
  const [disabled, setdisabled] = useState(false);
  return (
    <>
      <Select disabled={disabled} placeholder="请选择">
        <Option key="Html" value="Html">
          Html
        </Option>
        <Option key="Css" value="Css">
          Css
        </Option>
        <Option key="Java" value="Java">
          Java
        </Option>
        <Option key="React" value="React">
          React
        </Option>
        <Option key="Vue" value="Vue" disabled>
          Vue
        </Option>
      </Select>
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
 * title: 数据渲染
 */
import React, { useState } from 'react';
import { Select, Switch } from 'yl-design';
export default () => {
  const options = ['Html', 'Css', 'Java', 'React', 'Vue'];
  const [disabled, setdisabled] = useState(false);
  return (
    <>
      <Select disabled={disabled} placeholder="请选择" options={options} />
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
 * title: 选项禁用, 支持清空
 */
import React, { useState } from 'react';
import { Select } from 'yl-design';
export default () => {
  const options = [
    {
      label: 'Jack',
      value: 0,
    },
    {
      label: 'Tom',
      value: 1,
      disabled: true,
    },
    {
      label: 'Bob',
      value: 2,
    },
  ];
  const [value, setvalue] = useState();
  const onChange = (value, option) => {
    setvalue(value);
  };
  return (
    <>
      <Select placeholder="请选择" onChange={onChange} options={options} value={value} />
      &nbsp;&nbsp;&nbsp;
      <Select placeholder="请选择" allowClear onChange={onChange} options={options} value={value} />
    </>
  );
};
```

```jsx
/**
 * title: 带搜索框-自定义规则
 */
import React, { useState } from 'react';
import { Select } from 'yl-design';
export default () => {
  const options = ['Html', 'Css', 'Java', 'React', 'Vue'];
  const onSearch = (value) => {
    console.log('onSearch', value);
  };
  const [value, setvalue] = useState();
  const onChange = (value, option) => {
    setvalue(value);
  };
  return (
    <>
      <Select
        filter
        placeholder="查询"
        onSearch={onSearch}
        onChange={onChange}
        options={options}
        value={value}
        style={{ width: 200 }}
      />
      &nbsp;&nbsp;&nbsp;
      <Select
        filter={(option, value) => {
          // 精确查询 区分大小写
          return option.label.includes(value.trim());
        }}
        placeholder="自定义-查询"
        onSearch={onSearch}
        onChange={onChange}
        options={options}
        value={value}
        style={{ width: 200 }}
      />
    </>
  );
};
```

```jsx
/**
 * title: 下拉多选
 */
import React, { useState } from 'react';
import { Select, Checkbox } from 'yl-design';
export default () => {
  const options = ['Html', 'Css', 'Java', 'React', 'Vue'];
  const [value, setvalue] = useState(['Css', 'React']);
  const onChange = (value, option) => {
    setvalue(value);
    console.log('value is', value);
  };
  return (
    <>
      <Checkbox
        onChange={(e) => {
          setvalue(e.target.checked ? ['Html', 'Css', 'Java', 'React', 'Vue'] : []);
        }}
      >
        Select All
      </Checkbox>
      <br />
      <br />
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Select
          multiple
          style={{ width: 300 }}
          placeholder="请选择"
          onChange={onChange}
          options={options}
          value={value}
        />
        &nbsp;&nbsp;&nbsp;
        <Select
          multiple
          allowClear
          style={{ width: 300 }}
          placeholder="请选择"
          onChange={onChange}
          options={options}
          value={value}
        />
      </div>
    </>
  );
};
```

# API

# Option

| **属性名** | **类型**      | **描述**           | **默认** |
| ---------- | ------------- | ------------------ | -------- |
| label      | string        | 指定当前选中的条目 | 无       |
| value      | string/number | 指定当前选中的条目 | 无       |
| key        | string/number | key                | 无       |
| disabled   | boolean       | 是否禁用           | false    |

# Select

| **属性名** | **类型** | **描述** | **默认** |
| --- | --- | --- | --- |
| value | string/string[] | 指定当前选中的条目 | 无 |
| options | string[] | 下拉选项 | 无 |
| placeholder | string | 提示文案 | 无 |
| allowClear | boolean | 支持清除 | false |
| autoClearSearchValue | boolean | 是否在选中项后清空搜索框 | true |
| autoFocus | boolean | 默认获取焦点 | false |
| disabled | boolean | 是否禁用 | false |
| style | object | 输入框 style 属性 | 无 |
| dropdownClassName | object | 下拉菜单的 style 属性 | 无 |
| dropdownStyle | object | 下拉菜单的 style 属性 | 无 |
| filter | boolean/Function(option,value) | 是否支持过滤/自定义过滤 | false |
| getPopupContainer | Function(dom) () => document.body | 菜单渲染父节点 | 无 |
| multiple | boolean | 是否支持多选 | true |
| showArrow | boolean | 是否显示下拉小箭头 | true |
| showSearch | boolean | 使单选模式可搜索 | false |
| open | boolean | 是否展开下拉菜单 | false |
| onChange | Function(value, option) | 选中 option，或 input 的 value 变化 | 无 |
| onSearch | Function(value:string) | 文本框值变化时回调 | 无 |
