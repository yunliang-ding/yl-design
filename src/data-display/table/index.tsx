import { useRef } from 'react';
import { Button, Form, Space } from '../../index';
import { TableProps } from './type';
import Table from './table';

export default ({
  title = '',
  tableRef = useRef({}),
  columns = [],
  search = {
    items: [],
  },
  tools = [],
  rowOperations,
  useRefresh = true,
  useFilter = true,
  useAdjust = true,
  ...rest
}: TableProps) => {
  if (useFilter) {
    tools.push({
      icon: 'shezhi',
      className: 'btn-tool',
      async onClick({ refresh }) {},
    });
  }
  if (useAdjust) {
    tools.push({
      icon: 'da-xiao',
      className: 'btn-tool',
      async onClick({ refresh }) {},
    });
  }
  if (useRefresh) {
    tools.push({
      icon: 'refresh',
      className: 'btn-tool',
      async onClick({ refresh }) {
        await refresh();
      },
    });
  }
  // 查询表单实例
  const form = Form.useForm();
  // 解析 cloums
  const lastColums = [...columns];
  if (typeof rowOperations === 'function') {
    lastColums.push({
      title: '操作',
      width: 'fit-content',
      dataIndex: 'yld-table-row-operation',
      fixed: 'right',
      render(e, record, index) {
        return (
          <div className="yld-table-row-operation">
            {rowOperations({
              record,
              refresh: tableRef.current.refresh,
            }).map((item) => {
              return (
                <Button key={item.label} {...item} type={item.type || 'link'}>
                  {item.label}
                </Button>
              );
            })}
          </div>
        );
      },
    });
  }
  return (
    <div className="yld-table-contianer">
      {search.items.length > 0 && (
        <Form
          horizontal
          form={form}
          {...search}
          items={[
            ...search.items,
            {
              type() {
                return (
                  <Space>
                    <Button
                      onClick={async () => {
                        form.clearValues({});
                        await tableRef.current.search(form.getValues());
                      }}
                    >
                      重置
                    </Button>
                    <Button
                      type="primary"
                      onClick={async () => {
                        await tableRef.current.search(form.getValues());
                      }}
                    >
                      查询
                    </Button>
                  </Space>
                );
              },
            } as any,
          ]}
          className="yld-table-contianer-search"
        />
      )}
      {tools.length > 0 && (
        <div className="yld-table-contianer-tools">
          <h3
            style={{
              fontSize: 13,
              borderLeft: '3px solid var(--primary-color)',
              paddingLeft: 8,
            }}
          >
            {title}
          </h3>
          <div
            style={{
              display: 'flex',
              gap: 10,
            }}
          >
            {tools.map((item) => {
              return (
                <Button
                  key={item.label}
                  {...item}
                  type={item.type}
                  onClick={async () => {
                    await item.onClick?.({ refresh: tableRef.current.refresh });
                  }}
                >
                  {item.label}
                </Button>
              );
            })}
          </div>
        </div>
      )}
      <Table tableRef={tableRef} columns={lastColums} {...rest} />
    </div>
  );
};
