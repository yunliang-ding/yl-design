# Table 基础表格

```jsx
/**
 * title: 基本使用
 */
import React, { useState } from 'react';
import { Table, Button, Select, Switch } from 'yl-design';
import { dataSource, columns } from './schema';

export default () => {
  const [loading, setloading] = useState(false);
  return (
    <>
      <Switch
        checkedChildren="关闭"
        unCheckedChildren="开启"
        checked={loading}
        onChange={setloading.bind(null, !loading)}
      />
      <br />
      <br />
      <Button>普通表格</Button>
      <br />
      <br />
      <Table
        rowKey="id"
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        style={{ height: 260 }}
        loading={loading}
      />
      <br />
      <Button>自带分页</Button>
      <br />
      <br />
      <Table
        rowKey="id"
        dataSource={dataSource}
        columns={columns}
        style={{ height: 260 }}
        loading={loading}
      />
      <br />
      <Button>空数据</Button>
      <br />
      <br />
      <Table
        rowKey="id"
        columns={columns}
        style={{ height: 260 }}
        loading={loading}
      />
      <br />
      <Button>带边框</Button>
      <br />
      <br />
      <Table
        rowKey="id"
        dataSource={dataSource}
        columns={columns}
        bordered
        style={{ height: 260 }}
        loading={loading}
      />
      <br />
      <Button>支持选择</Button>
      <br />
      <br />
      <Table
        rowKey="id"
        dataSource={dataSource}
        columns={columns}
        bordered
        checkable
        onCheck={(e) => {
          console.log(e);
        }}
        style={{ height: 260 }}
        loading={loading}
      />
      <br />
      <Button>自定义分页</Button>
      <br />
      <br />
      <Table
        rowKey="id"
        dataSource={dataSource}
        columns={columns}
        style={{ height: 300 }}
        checkable
        loading={loading}
        pagination={{
          current: 5,
          pageSize: 10,
          total: 600,
          showJumper: true,
          pageSizeOptions: [10, 20, 30],
          onPageSizeChange: (e) => {
            console.log(e);
          },
          onChange: (e) => {
            console.log(e);
          },
        }}
      />
    </>
  );
};
```
