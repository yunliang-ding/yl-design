---
order: 1
---

# Layout 布局

```jsx
/**
 * title: 基本使用
 */
import React, { useState } from 'react';
import { Layout } from 'yl-design';
import './index1.css';
const { Header, Sider, Content, Footer } = Layout;
export default () => {
  return (
    <>
      <div className="__dumidemo-layout-box">
        <Layout>
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </div>
      <div className="__dumidemo-layout-box">
        <Layout>
          <Sider>Sider</Sider>
          <Layout>
            <Header>Header</Header>
            <Content>Content</Content>
          </Layout>
        </Layout>
      </div>
      <div className="__dumidemo-layout-box">
        <Layout>
          <Sider>Sider</Sider>
          <Layout>
            <Content>Content</Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </div>
      <div className="__dumidemo-layout-box">
        <Layout>
          <Sider>Sider</Sider>
          <Content>Content</Content>
        </Layout>
      </div>
      <div className="__dumidemo-layout-box">
        <Layout>
          <Sider>Sider</Sider>
          <Layout>
            <Header>Header</Header>
            <Content>Content</Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </div>
      <div className="__dumidemo-layout-box">
        <Layout>
          <Header>Header</Header>
          <Layout>
            <Sider>Sider</Sider>
            <Content>Content</Content>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>
      </div>
      <div className="__dumidemo-layout-box">
        <Layout>
          <Header>Header</Header>
          <Layout>
            <Content>Content</Content>
            <Sider>Sider</Sider>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>
      </div>
    </>
  );
};
```

```jsx
/**
 * title: 通用后台布局
 */
import React, { useState } from 'react';
import { Layout, Button, Switch, Menu, Dropdown, Icon } from 'yl-design';
import './index2.css';
const { Header, Sider, Content, Footer } = Layout;
const { SubMenu } = Menu;
export default () => {
  const [collapsible, setcollapsible] = useState(false);
  const [collapsed, setcollapsed] = useState();
  const [theme, settheme] = useState('light');
  return (
    <>
      <Switch
        checkedChildren="light"
        unCheckedChildren="dark"
        onChange={settheme.bind(null, theme === 'dark' ? 'light' : 'dark')}
      />
      <div
        className={
          theme === 'dark'
            ? '__dumidemo-standard-admin-layout __dumidemo-standard-admin-layout-dark'
            : '__dumidemo-standard-admin-layout'
        }
      >
        <Layout>
          <Sider
            width={260}
            theme={theme}
            collapsible
            onCollapse={setcollapsed.bind(null, !collapsed)}
          >
            <div className="logo">Logo</div>
            <Menu
              theme={theme}
              collapsed={collapsed}
              collapsedWidth={80}
              menuClick={(openkey, selectKey) => {
                console.log(openkey, selectKey);
              }}
              openKey={['1']}
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
                  <Menu.Item key="2-2-2">Option 2</Menu.Item>
                </SubMenu>
              </SubMenu>
              <SubMenu key="3" icon="yldiconjiaohu" title="Navigation Three">
                <Menu.Item key="3-1">Option 1</Menu.Item>
              </SubMenu>
              <SubMenu key="4" icon="yldiconicon_yingyongguanli" title="Navigation Four">
                <Menu.Item key="4-1" icon="yldiconcloud-form">
                  Option 1
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Header>
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
              <Dropdown
                overlay={
                  <>
                    {['@site-ui', 'logout'].map((item) => {
                      return (
                        <p key={item} style={{ fontSize: 12, padding: 4 }}>
                          {item}
                        </p>
                      );
                    })}
                  </>
                }
              >
                <div className="user">
                  <Icon type="yldiconuser" size={20} />
                </div>
              </Dropdown>
            </Header>
            <Content>
              <div className="main">Content</div>
            </Content>
            <Footer>Site-UI ©2020 Created by DYL</Footer>
          </Layout>
        </Layout>
      </div>
    </>
  );
};
```

# API

| **属性名** | **类型**    | **描述**   | **默认** |
| ---------- | ----------- | ---------- | -------- |
| disabled   | boolean     | 是否禁用   | 20       |
| onClick    | Function(e) | 点击的回调 | 20       |
| icon       | string      | 图标       | 20       |
| loading    | boolean     | 是否加载   | 20       |
| type       | string      | 主题       | 20       |
| style      | object      | 样式       | 20       |
