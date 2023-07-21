export default [
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
    required: true,
    props: {
      min: 1,
      max: 999,
    },
  },
  {
    type: 'Select',
    name: 'select',
    label: '下拉选',
    required: true,
    props: {
      allowClear: true,
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
    required: true,
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
      checkedChildren: '开',
      unCheckedChildren: '关',
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
    required: true,
    props: {
      multiple: true,
      allowClear: true,
      options: [
        { label: '选项1', value: 1 },
        { label: '选项2', value: 2 },
        { label: '选项3', value: 3 },
      ],
    },
  },
  {
    type: 'Cascader',
    name: 'cascader',
    label: '级联选择器',
    required: true,
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
    required: true,
  },
  {
    type: 'TimePicker',
    name: 'timePicker',
    label: '时间选择',
    required: true,
  },
  {
    type: 'Input',
    name: 'textarea',
    label: '大文本输入框',
    required: true,
    span: 3, // 占3个格子空间
    props: {
      type: 'textarea',
    },
  },
];
