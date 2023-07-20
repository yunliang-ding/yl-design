---
order: 10
---

# Form 提交表单

```jsx
/**
 * title: 基本使用
 */
import React, { useState } from 'react';
import { Form, Button } from 'yl-design';
export default () => {
  const form = Form.useForm();
  return (
    <>
      <Form
        form={form}
        initialValues={{
          input: '2323',
          password: '2323',
          inputNumber: 2323,
          select: 1,
          radioGroup: 1,
          checkGroup: [1],
          slider: 7,
          selectMore: 1,
          cascader: ['zhejiang', 'hangzhou'],
          datePicker: '2023-07-14',
          timePicker: '00:02:00',
          textarea: '2323',
        }}
        onValuesChange={(v, vs) => {
          console.log(v, vs);
        }}
        items={[
          {
            type: 'Input',
            name: 'input',
            label: '输入框',
            required: true,
          },
          {
            type: 'Input',
            name: 'password',
            label: '密码输入框',
            tooltip: '密码至少6位字符',
            props: {
              type: 'password',
            },
          },
          {
            type: 'InputNumber',
            name: 'inputNumber',
            label: '数字输入框',
            props: {
              min: 1,
              max: 999,
            },
          },
          {
            type: 'Select',
            name: 'select',
            label: '下拉选',
            props: {
              options: [
                { label: '选项1', value: 1 },
                { label: '选项2', value: 2 },
              ],
            },
            extra: '这是一段描述信息',
          },
          {
            type: 'RadioGroup',
            name: 'radioGroup',
            label: '单选按钮组',
            props: {
              options: [
                { label: '选项1', value: 1 },
                { label: '选项2', value: 2 },
              ],
            },
          },
          {
            type: 'CheckGroup',
            name: 'checkGroup',
            label: '复选框',
            props: {
              options: [
                { label: '选项1', value: 1 },
                { label: '选项2', value: 2 },
              ],
            },
          },
          {
            type: 'Switch',
            name: 'switch',
            label: '开关切换',
            props: {
              checkedChildren: '开启',
              unCheckedChildren: '关闭',
            },
          },
          {
            type: 'Slider',
            name: 'slider',
            label: '滑块组件',
          },
          {
            type: 'Select',
            name: 'selectMore',
            label: '下拉多选',
            props: {
              mode: 'multiple',
              options: [
                { label: '选项1', value: 1 },
                { label: '选项2', value: 2 },
                { label: '选项2', value: 3 },
              ],
            },
          },
          {
            type: 'Cascader',
            name: 'cascader',
            label: '级联选择器',
            props: {
              options: [
                {
                  value: 'zhejiang',
                  label: '浙江省',
                  children: [
                    {
                      value: 'hangzhou',
                      label: '杭州市',
                    },
                  ],
                },
                {
                  value: 'anhui',
                  label: '安徽省',
                  children: [
                    {
                      value: 'hefei',
                      label: '合肥市',
                    },
                  ],
                },
              ],
            },
          },
          {
            type: 'DatePicker',
            name: 'datePicker',
            label: '选择日期',
          },
          {
            type: 'TimePicker',
            name: 'timePicker',
            label: '时间选择',
          },
          {
            type: 'Input',
            name: 'textarea',
            label: '大文本输入框',
            props: {
              type: 'textarea',
            },
          },
        ]}
      />
      <br />
      <Button
        type="primary"
        onClick={async () => {
          console.log(await form.validateValues());
        }}
      >
        提交
      </Button>
    </>
  );
};
```
