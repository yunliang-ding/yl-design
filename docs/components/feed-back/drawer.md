# Drawer 抽屉

```jsx
/**
 * title: 基本使用
 */
import React, { useState } from 'react';
import { Drawer, Button } from 'yl-design';
export default () => {
  return (
    <Button
      onClick={() => {
        Drawer({
          title: '默认抽屉',
          okText: '完成',
          onClose() {
            console.log('onClose');
          },
          onOk() {
            console.log('onOk');
          },
          render() {
            return (
              <>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
              </>
            );
          },
        }).open();
      }}
    >
      打开默认抽屉
    </Button>
  );
};
```

```jsx
/**
 * title: 左侧打开
 */
import React, { useState } from 'react';
import { Drawer, Button } from 'yl-design';
export default () => {
  return (
    <Button
      onClick={() => {
        Drawer({
          title: '左侧打开',
          placement: 'left',
          onClose() {
            console.log('onClose');
          },
          onOk() {
            console.log('onOk');
          },
          render() {
            return (
              <>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
              </>
            );
          },
        }).open();
      }}
    >
      左侧打开
    </Button>
  );
};
```

```jsx
/**
 * title: 指定高度
 */
import React, { useState } from 'react';
import { Drawer, Button } from 'yl-design';
export default () => {
  return (
    <Button
      onClick={() => {
        Drawer({
          title: '指定高度',
          top: 64,
          onClose() {
            console.log('onClose');
          },
          onOk() {
            console.log('onOk');
          },
          render() {
            return (
              <>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
              </>
            );
          },
        }).open();
      }}
    >
      指定高度
    </Button>
  );
};
```

```jsx
/**
 * title: 没有底部按钮
 */
import React, { useState } from 'react';
import { Drawer, Button } from 'yl-design';

export default () => {
  return (
    <Button
      onClick={() => {
        Drawer({
          title: '没有底部按钮',
          okText: '完成',
          onClose() {
            console.log('onClose');
          },
          onOk() {
            console.log('onOk');
          },
          render() {
            return (
              <>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
              </>
            );
          },
          footer: false,
        }).open();
      }}
    >
      没有底部按钮
    </Button>
  );
};
```

```jsx
/**
 * title: 自定义底部渲染
 */
import React, { useState } from 'react';
import { Drawer, Button } from 'yl-design';

export default () => {
  return (
    <Button
      onClick={() => {
        Drawer({
          title: '自定义底部渲染',
          okText: '完成',
          onClose() {
            console.log('onClose');
          },
          onOk() {
            console.log('onOk');
          },
          render() {
            return (
              <>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
              </>
            );
          },
          footerRender({ onClose }) {
            return (
              <div>
                自定义渲染底部
                <button onClick={onClose}>关闭</button>
              </div>
            );
          },
        }).open();
      }}
    >
      自定义底部渲染
    </Button>
  );
};
```
