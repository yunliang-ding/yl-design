# Alert 提示信息

```jsx
/**
 * title: 基本使用
 */
import React from 'react';
import { Alert } from 'yl-design';
export default () => {
  return (
    <>
      <Alert message="成功提示框" type="success" />
      <br />
      <Alert message="信息提示框" type="info" />
      <br />
      <Alert
        message="警告提示框"
        type="warning"
        closable
        onClose={() => {
          console.log('close');
        }}
      />
      <br />
      <Alert
        message="错误提示框"
        type="error"
        closable
        onClose={() => {
          console.log('close');
        }}
      />
    </>
  );
};
```

# API

| **属性名** | **类型**                     | **描述**   | **默认** |
| ---------- | ---------------------------- | ---------- | -------- |
| message    | array                        | 文案       | 无       |
| closable   | Function(openKey, selectKey) | 是否可关闭 | false    |
| type       | string                       | 类型       | 无       |
| style      | object                       | 样式       | 无       |
