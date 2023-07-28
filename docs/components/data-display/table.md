# Table 基础表格

```jsx
/**
 * title: 基本使用
 */
import React, { useState } from 'react';
import { Table, Button, Select, Switch } from 'yl-design';
import { columns } from './schema';
import axios from 'axios';

export default () => {
  return (
    <Table
      rowKey="id"
      title="用户信息表"
      columns={columns}
      style={{ height: 260 }}
      bordered
      checkable
      rowOperations={({ record, refresh }) => {
        return [
          {
            label: '编辑',
            onClick() {
              console.log(record);
            },
          },
          {
            label: '查看',
            onClick() {
              console.log(record);
            },
          },
          {
            label: '删除',
            onClick() {
              console.log(record);
            },
          },
        ];
      }}
      paginationConfig={{
        pageSize: 10,
        showJumper: true,
        pageSizeOptions: [10, 20, 30],
        onPageSizeChange: (e) => {
          console.log(e);
        },
        onChange: (e) => {
          console.log(e);
        },
      }}
      onCheck={(e) => {
        console.log(e);
      }}
      request={async (params) => {
        const res = await axios.get(
          'http://api.yunliang.cloud/react-core-form/table',
          {
            params,
          },
        );
        return {
          success: res.data.success,
          data: res.data.list,
          total: res.data.total,
        };
      }}
    />
  );
};
```

## API

<API src="../../../src/data-display/table/index.tsx" hideTitle></API>
