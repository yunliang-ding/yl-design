# Modal 弹出层

```jsx
/**
 * title: 基本使用
 */
import React from 'react';
import { Modal, Button } from 'yl-design';

export default () => {
  return (
    <Button
      type="primary"
      onClick={() => {
        Modal({
          title: '默认弹出层',
          style: {
            width: 600,
            height: 400,
          },
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
      默认弹出层
    </Button>
  );
};
```

```jsx
/**
 * title: 自定义渲染 Footer
 */
import React from 'react';
import { Modal, Button } from 'yl-design';

export default () => {
  return (
    <Button
      type="primary"
      onClick={() => {
        Modal({
          title: '自定义底部渲染',
          style: {
            width: 600,
            height: 400,
          },
          mask: false,
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
