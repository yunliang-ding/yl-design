import { ButtonProps } from '../../general/button';
import { FormProps } from '../../data-entry/form/type.form';
import { ReactNode, CSSProperties, MutableRefObject } from 'react';

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
