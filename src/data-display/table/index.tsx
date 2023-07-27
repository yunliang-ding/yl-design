import { ButtonProps } from '../../general/button';
import { useRef, ReactNode, CSSProperties, MutableRefObject } from 'react';
import { Button } from '../../index';
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
  title?: ReactNode;
  columns: columnProps[];
  request: (params) => Promise<{
    success: boolean;
    total: number;
    data: [];
  }>;
  table?: MutableRefObject<{
    refresh?: Function;
    search?: Function;
  }>;
  tools?: ToolProps[];
  rowOperations?: (api: { record: any; refresh: Function }) => ToolProps[];
  rowKey: string;
  style?: CSSProperties;
  paginationConfig?: PaginationProps | false;
  bordered?: boolean;
  checkable?: boolean;
  onCheck?: Function;
}

export default ({
  title = '',
  table = useRef({}),
  columns = [],
  tools = [],
  rowOperations,
  ...rest
}: TableProps) => {
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
              refresh: table.current.refresh,
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
                    await item.onClick?.({ refresh: table.current.refresh });
                  }}
                >
                  {item.label}
                </Button>
              );
            })}
          </div>
        </div>
      )}
      <Table table={table} columns={lastColums} {...rest} />
    </div>
  );
};
