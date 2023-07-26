import { useRef, ReactNode, CSSProperties, MutableRefObject } from 'react';
import { Button } from '../../index';
import Table from './table';

export interface columnProps {
  title?: ReactNode;
  width?: number;
  dataIndex: string;
  fixed?: 'left' | 'right';
  render?: (e, record, index) => ReactNode;
}

export interface ToolProps {
  label?: ReactNode;
  type?: string;
  onClick?: Function;
}

export interface PaginationProps {
  pageSize: number;
  pageNum: number;
  total: number;
  onChange?: Function;
  onPageSizeChange?: Function;
}

export interface TableProps {
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
  table = useRef({}),
  columns = [],
  rowOperations,
  ...rest
}: TableProps) => {
  // 解析 cloums
  const lastColums = [...columns];
  if (typeof rowOperations === 'function') {
    lastColums.push({
      title: '操作',
      width: 100,
      dataIndex: '_yl_table_operation',
      render(e, record, index) {
        return rowOperations({
          record,
          refresh: table.current.refresh,
        }).map((item) => {
          return (
            <Button key={item.label} {...item}>
              {item.label}
            </Button>
          );
        });
      },
    });
  }
  return <Table table={table} columns={lastColums} {...rest} />;
};
