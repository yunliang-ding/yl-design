export const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    width: 80,
  },
  {
    title: '姓名',
    dataIndex: 'username',
    width: 125,
  },
  {
    title: '性别',
    dataIndex: 'sex',
    width: 125,
    enums: ['男', '女'],
  },
  {
    title: '城市',
    dataIndex: 'city',
    width: 125,
  },
  {
    title: '签名',
    dataIndex: 'sign',
    width: 125,
    sort: true,
  },
  {
    title: '登录次数',
    dataIndex: 'logins',
    width: 125,
  },
  {
    title: '分类',
    dataIndex: 'classify',
    width: 125,
  },
  {
    title: '分数',
    dataIndex: 'score',
    width: 125,
  },
];
