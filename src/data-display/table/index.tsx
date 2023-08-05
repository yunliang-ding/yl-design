import { ButtonProps } from '../../general/button';
import { FormProps } from '../../data-entry/form/type.form';
import { useRef, ReactNode, CSSProperties, MutableRefObject } from 'react';
import { Button, Form, Space } from '../../index';
import Table from './table';

export interface columnProps {
  title?: ReactNode;
  width?: string | number;
  dataIndex: string;
  fixed?: 'left' | 'right';
  render?: (e, record, index) => ReactNode;
}

export interface ToolProps extends ButtonProps {
  label?: string;
}

export interface PaginationProps {
  pageSize: number;
  pageNum: number;
  total: number;
  onChange?: Function;
  onPageSizeChange?: Function;
}

export interface TableProps {
  /** 标题 */
  title?: ReactNode;
  /** 列信息 */
  columns: columnProps[];
  /** 查询信息配置 */
  search?: FormProps;
  /** 统一数据请求 */
  request: (params) => Promise<{
    success: boolean;
    total: number;
    data: [];
  }>;
  /** table 实例 */
  tableRef?: MutableRefObject<{
    refresh?: Function;
    search?: Function;
    dataSource?: any;
    pagination?: any;
    params?: any;
  }>;
  /** 工具配置 */
  tools?: ToolProps[];
  /** 操作列配置 */
  rowOperations?: (api: { record: any; refresh: Function }) => ToolProps[];
  /** 唯一标示 */
  rowKey?: string;
  /** 样式 */
  style?: CSSProperties;
  /** 分页配置 */
  paginationConfig?: PaginationProps | false;
  /** 是否带边框 */
  bordered?: boolean;
  /** 是否带选择 */
  checkable?: boolean;
  /** 选择的钩子 */
  onCheck?: Function;
  /** 是否开启刷新 */
  useRefresh?: boolean;
  /** 是否开启列过滤 */
  useFilter?: boolean;
  /** 是否开启大小调整 */
  useAdjust?: boolean;
}

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
      dataIndex: 'yl-table-row-operation',
      fixed: 'right',
      render(e, record, index) {
        return (
          <div className="yl-table-row-operation">
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
