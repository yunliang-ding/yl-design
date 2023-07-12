# Modal 弹出层

```jsx
/**
 * title: 基本使用
 */
import React, { useState } from 'react';
import { Modal, Button } from 'yl-design';
export default () => {
  const [visible, setvisible] = useState(false);
  const [placement, setplacement] = useState('right');
  const [height, setheight] = useState('100vh');
  const [closable, setclosable] = useState(true);
  const [footer, setfooter] = useState(null);
  const [mask, setmask] = useState(true);
  const renderFooter = () => {
    return (
      <>
        <Button type="warn" onClick={setvisible.bind(null, false)}>
          确定
        </Button>
        <Button type="danger" onClick={setvisible.bind(null, false)}>
          取消
        </Button>
      </>
    );
  };
  return (
    <>
      <Button
        onClick={() => {
          setvisible(true);
        }}
      >
        打开
      </Button>
      &nbsp;&nbsp;&nbsp;
      <Button
        onClick={() => {
          setvisible(true);
          setclosable(false);
        }}
      >
        没有关闭
      </Button>
      &nbsp;&nbsp;&nbsp;
      <Button
        onClick={() => {
          setvisible(true);
          setmask(false);
        }}
      >
        没有遮罩
      </Button>
      &nbsp;&nbsp;&nbsp;
      <Button
        onClick={() => {
          setvisible(true);
          setfooter(false);
        }}
      >
        没有Footer
      </Button>
      &nbsp;&nbsp;&nbsp;
      <Button
        onClick={() => {
          setvisible(true);
          setfooter(renderFooter());
        }}
      >
        自定义Footer
      </Button>
      <Modal
        title="Basic Modal"
        style={{
          width: 600,
          height: 400,
        }}
        placement={placement}
        closable={closable}
        mask={mask}
        footer={footer}
        visible={visible}
        onClose={() => {
          setvisible(false);
          setplacement('right');
          setheight('100vh');
          setclosable(true);
          setfooter(null);
          setmask(true);
        }}
        onOk={() => {
          setvisible(false);
          setplacement('right');
          setheight('100vh');
          setclosable(true);
          setfooter(null);
          setmask(true);
        }}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};
```

# API

| **属性名** | **类型**   | **描述**        | **默认** |
| ---------- | ---------- | --------------- | -------- |
| title      | array      | 标题            | 无       |
| closable   | boolean    | 是否可关闭      | true     |
| visible    | boolean    | 是否展示        | 无       |
| style      | object     | 样式            | 无       |
| onClose    | Function() | 取消按钮回调    | 无       |
| onOk       | Function() | 确定按钮回调    | 无       |
| footer     | object     | 是否显示 Footer | 无       |
| mask       | boolean    | 是否显示遮罩层  | 无       |
