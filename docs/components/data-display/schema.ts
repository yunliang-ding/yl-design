export const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    width: 80,
  },
  {
    title: '姓名',
    dataIndex: 'username',
    width: 150,
  },
  {
    title: '性别',
    dataIndex: 'sex',
    width: 150,
    enums: ['男', '女'],
  },
  {
    title: '城市',
    dataIndex: 'city',
    width: 150,
  },
  {
    title: '签名',
    dataIndex: 'sign',
    width: 150,
    sort: true,
  },
  {
    title: '登录次数',
    dataIndex: 'logins',
    width: 150,
  },
  {
    title: '分类',
    dataIndex: 'classify',
    width: 150,
  },
  {
    title: '分数',
    dataIndex: 'score',
    width: 150,
  },
];
