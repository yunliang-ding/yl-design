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
          radio: 1,
          checkbox: [1],
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
          await new Promise((res) => setTimeout(res, 1000));
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
 * title: 表单项联动
 */
import React from 'react';
import { Form } from 'yl-design';

export default () => {
  return (
    <Form
      items={[
        {
          type: 'Select',
          name: 'sex',
          label: '性别',
          touchItemsRender: [
            {
              name: 'age',
              clear: true,
            },
          ],
          required: true,
          props: {
            options: [
              {
                label: '男',
                value: 0,
              },
              {
                label: '女',
                value: 1,
              },
            ],
          },
        },
        {
          type: 'InputNumber',
          name: 'age',
          label: '年龄',
          visible({ getValues }) {
            return getValues().sex === 0;
          },
        },
      ]}
    />
  );
};
```

## Form 属性

<API src="../../../src/data-entry/form/type.form.tsx" hideTitle></API>

## Item 属性

<API src="../../../src/data-entry/form/type.item.tsx" hideTitle></API>

## Form 实例

<API src="../../../src/data-entry/form/type.instance.tsx" hideTitle></API>
