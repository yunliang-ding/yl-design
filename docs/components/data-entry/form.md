---
order: 18
---

# Form 提交表单

```jsx
/**
 * title: 基本使用
 */
import React, { useState } from 'react';
import { Switch, Form, Button } from 'yl-design';
import items from './items';

export default () => {
  const form = Form.useForm();
  return (
    <>
      <Switch
        checkedChildren="可用"
        unCheckedChildren="禁用"
        onChange={(v) => {
          form.setDisabled(!v);
        }}
      />
      <br />
      <br />
      <Form
        form={form}
        column={3} // 设置3等分布局
        initialValues={{
          input: '2323',
          password: '2323',
          inputNumber: 2323,
          select: 1,
          switch: false,
          radioGroup: 1,
          checkGroup: [1],
          slider: 7,
          selectMore: [1, 2],
          cascader: ['zhejiang', 'hangzhou'],
          datePicker: '2023-07-14',
          timePicker: '00:02:00',
          textarea: '2323',
        }}
        onValuesChange={(v, vs) => {
          console.log(v, vs);
        }}
        items={items.map((i) => {
          return {
            ...i,
            required: true,
          };
        })}
      />
      <br />
      <Button
        type="primary"
        onClick={async () => {
          console.log(await form.validateFields());
        }}
      >
        提交
      </Button>
    </>
  );
};
```

```jsx
/**
 * title: 动态更新模型
 */
import React, { useState } from 'react';
import { Switch, Form, Button } from 'yl-design';
import items from './items';

export default () => {
  const form = Form.useForm();
  return (
    <>
      <Form
        form={form}
        column={3}
        items={items}
        onValuesChange={(v) => {
          if ('select' in v) {
            form.mergeItemByName('radioGroup', {
              visible: v.select !== 1,
            });
          }
        }}
      />
      <br />
      <Button
        type="primary"
        onClick={async () => {
          console.log(await form.validateFields());
        }}
      >
        提交
      </Button>
    </>
  );
};
```
