---
order: 1
---

# Menu 菜单

```jsx
/**
 * title: 水平菜单
 */
import React, { useState } from 'react';
import { Menu, Icon, Switch } from 'yl-design';
const { SubMenu } = Menu;
export default () => {
  const [collapsed, setcollapsed] = useState();
  const [theme, settheme] = useState('light');
  return (
    <>
      <Switch
        checkedChildren="light"
        unCheckedChildren="dark"
        onChange={settheme.bind(null, theme === 'dark' ? 'light' : 'dark')}
      />
      <br />
      <br />
      <Menu
        theme={theme}
        mode="horizontal"
        collapsed={collapsed}
        menuClick={(openkey, selectKey) => {
          console.log(openkey, selectKey);
        }}
        selectKey={['1-2']}
      >
        <Menu.Item key="1" icon="yldiconicon_yingyongguanli">
          Menu-Nav 1
        </Menu.Item>
        <Menu.Item key="2" disabled icon="yldiconempty">
          Menu-Nav 2
        </Menu.Item>
        <Menu.Item key="3" icon="yldiconhezi">
          Menu-Nav 3
        </Menu.Item>
        <SubMenu key="4" icon="yldiconjiaohu" title="Menu-Nav 4">
          <Menu.Item key="4-1" icon="yldiconcloud-form">
            Option 1
          </Menu.Item>
          <Menu.Item key="4-2" icon="yldiconweimingmingwenjianjia_rili" disabled>
            Option 2
          </Menu.Item>
        </SubMenu>
      </Menu>
    </>
  );
};
```

```jsx
/**
 * title: 普通使用
 */
import React, { useState } from 'react';
import { Menu, Icon, Switch } from 'yl-design';
const { SubMenu } = Menu;
export default () => {
  const [collapsed, setcollapsed] = useState();
  const [theme, settheme] = useState('light');
  return (
    <>
      <Switch
        checkedChildren="展开"
        unCheckedChildren="收起"
        onChange={setcollapsed.bind(null, !collapsed)}
      />
      &nbsp;&nbsp;&nbsp;
      <Switch
        checkedChildren="light"
        unCheckedChildren="dark"
        onChange={settheme.bind(null, theme === 'dark' ? 'light' : 'dark')}
      />
      <Menu
        style={{ width: 240, margin: '10px 0' }}
        theme={theme}
        collapsed={collapsed}
        menuClick={(openkey, selectKey) => {
          console.log(openkey, selectKey);
        }}
        openKey={['1', '2', '2-1', '2-1-1']}
        selectKey={['1-2']}
      >
        <SubMenu key="1" icon="yldiconicon_yingyongguanli" title="Navigation One">
          <Menu.Item key="1-1" icon="yldiconmessage">
            Option 1
          </Menu.Item>
          <Menu.Item key="1-2">Option 2</Menu.Item>
        </SubMenu>
        <SubMenu key="2" icon="yldiconhezi" title="Navigation Two">
          <Menu.Item key="2-1">Option 1</Menu.Item>
          <SubMenu key="2-2" title="Option 2">
            <Menu.Item key="2-2-1" icon="yldiconempty">
              Option 1
            </Menu.Item>
            <Menu.Item key="2-2-2" disabled>
              Option 2
            </Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu key="3" icon="yldiconjiaohu" title="Navigation Three">
          <Menu.Item key="3-1">Option 1</Menu.Item>
        </SubMenu>
        <SubMenu key="4" icon="yldiconicon_yingyongguanli" title="Navigation Four" disabled>
          <Menu.Item key="4-1" icon="yldiconcloud-form" disabled>
            Option 1
          </Menu.Item>
        </SubMenu>
      </Menu>
    </>
  );
};
```

```jsx
/**
 * title: 数据渲染
 */
import React, { useState } from 'react';
import { Menu, Icon, Switch } from 'yl-design';
export default () => {
  const [collapsed, setcollapsed] = useState();
  const [theme, settheme] = useState('light');
  const menus = [
    {
      key: '1',
      icon: 'yldiconicon_yingyongguanli',
      label: 'Navigation One',
      children: [
        {
          key: '1-1',
          icon: 'yldiconmessage',
          label: 'Option1',
        },
        {
          key: '1-2',
          label: 'Option2',
        },
      ],
    },
    {
      key: '2',
      icon: 'yldiconhezi',
      label: 'Navigation Two Navigation Two',
      children: [
        {
          key: '2-1',
          label: 'Option1',
          children: [
            {
              key: '2-1-1',
              label: 'Option1',
              icon: 'yldiconempty',
              children: [
                {
                  key: '2-1-1-1',
                  label: 'Option1',
                },
              ],
            },
            {
              key: '2-1-2',
              label: 'Option2',
              disabled: true,
            },
          ],
        },
      ],
    },
    {
      key: '3',
      icon: 'yldiconjiaohu',
      label: 'Navigation Three',
      children: [
        {
          key: '3-1',
          label: 'Option1',
        },
      ],
    },
    {
      key: '4',
      disabled: true,
      icon: 'yldiconcloud-form',
      label: 'Navigation Four',
      children: [
        {
          key: '4-1',
          label: 'Option1',
        },
      ],
    },
  ];
  return (
    <>
      <Switch
        checkedChildren="展开"
        unCheckedChildren="收起"
        onChange={setcollapsed.bind(null, !collapsed)}
      />
      &nbsp;&nbsp;&nbsp;
      <Switch
        checkedChildren="light"
        unCheckedChildren="dark"
        onChange={settheme.bind(null, theme === 'dark' ? 'light' : 'dark')}
      />
      <Menu
        style={{ width: 240, margin: '10px 0' }}
        menus={menus}
        theme={theme}
        collapsed={collapsed}
        menuClick={(openkey, selectKey) => {
          console.log(openkey, selectKey);
        }}
        openKey={['1', '2', '2-1', '2-1-1']}
        selectKey={['1-2']}
      />
    </>
  );
};
```

# API

# SubMenu

| **属性名** | **类型**  | **描述** | **默认** |
| ---------- | --------- | -------- | -------- |
| icon       | icon      | 图标     | 无       |
| title      | ReactNode | 文案     | 无       |
| disabled   | boolean   | 是否禁用 | false    |

# Item

| **属性名** | **类型**  | **描述** | **默认** |
| ---------- | --------- | -------- | -------- |
| icon       | icon      | 图标     | 无       |
| title      | ReactNode | 文案     | 无       |
| disabled   | boolean   | 是否禁用 | false    |

# Menu

| **属性名** | **类型**                     | **描述**     | **默认** |
| ---------- | ---------------------------- | ------------ | -------- |
| menus      | array                        | 菜单数据     | 无       |
| menuClick  | Function(openKey, selectKey) | 菜单点击事件 | 无       |
| openKey    | string[]                     | 样式         | 无       |
| selectKey  | string[]                     | icon         | 无       |
| style      | object                       | 点击回调     | 无       |
| collapsed  | boolean                      | 是否收起     | false    |
| theme      | string                       | light/dark   | light    |
