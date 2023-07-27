import item from '@/data-entry/form/item';
import { useState, useEffect, useRef } from 'react';
import { TableProps } from '.';
import { Icon, Pagination, Checkbox, Empty, Spin } from '../../index';

export default ({
  columns = [],
  request = async (params) => {
    return {
      success: true,
      total: 0,
      data: [],
    };
  },
  rowKey = 'id',
  style = {},
  paginationConfig = false,
  bordered = false,
  checkable = false,
  onCheck,
  table,
}: TableProps) => {
  // 刷新逻辑
  const [loading, setLoading] = useState(false); // 控制loading
  const tableRef: any = useRef({
    loading: false,
    dataSource: [],
    pagination:
      typeof paginationConfig === 'object'
        ? {
            pageSize: paginationConfig.pageSize,
            pageNum: paginationConfig.pageNum,
          }
        : {},
    params: {},
  });
  const query = async (sort: any = {}) => {
    setLoading(true);
    try {
      const { success, data, total } = await request({
        ...tableRef.current.params,
        ...tableRef.current.pagination,
        ...sort,
      });
      if (success) {
        tableRef.current.dataSource = data;
        tableRef.current.pagination.total = total;
      }
    } catch (error) {
      console.log('request error: ', error);
    } finally {
      setLoading(false);
    }
  };
  // 挂载api
  useEffect(() => {
    table.current.refresh = async (params = {}) => {
      await query(params);
    };
  }, []);
  // 请求数据
  useEffect(() => {
    query();
  }, []);
  const [checkedkeys, setCheckedkeys] = useState([]); // 内置选择器
  /** 全选当前数据 */
  const checkedAll = (checked) => {
    let checkedkeys = [];
    if (checked) {
      checkedkeys = tableRef.current.dataSource.map(
        (item) => item[rowKey || 'key'],
      );
    }
    setCheckedkeys(checkedkeys);
    typeof onCheck === 'function' && onCheck(checkedkeys);
  };
  // 判断是否已经全选
  const isCheckedAll = () => {
    return (
      checkedkeys.length > 0 &&
      tableRef.current.dataSource.every((item) => {
        return checkedkeys.some((key) => key === item[rowKey || 'key']);
      })
    );
  };
  /**
   * 内部多选
   */
  if (checkable) {
    let column: any = {
      title: (
        <Checkbox
          checked={isCheckedAll()}
          onChange={(e) => {
            checkedAll(e.target.checked);
          }}
        />
      ),
      width: 40,
      fixed: 'left',
      dataIndex: 'yld-checked-930226',
      render: (e, record) => {
        return (
          <Checkbox
            checked={checkedkeys.includes(record[rowKey || 'key'])}
            onChange={() => {
              let index = checkedkeys.indexOf(record[rowKey || 'key']);
              if (index > -1) {
                checkedkeys.splice(index, 1);
              } else {
                checkedkeys.push(record[rowKey || 'key']);
              }
              setCheckedkeys([...checkedkeys]);
              typeof onCheck === 'function' && onCheck(checkedkeys);
            }}
          />
        );
      },
    };
    if (columns[0] && columns[0].dataIndex !== 'yld-checked-930226') {
      // 没有添加1项
      columns.unshift(column);
    } else {
      columns[0] = column;
    }
  }
  /** 渲染表头 */
  const renderHeaderTable = (columns) => {
    return (
      <div className="yld-table-header">
        <div className="yld-table-tr">
          {columns.map((column) => {
            let minWidth = column.width || 100 / columns.length + '%';
            let columnClassName = ['yld-table-td'];
            if (column.sort) {
              columnClassName.push('yld-table-td-sort');
            }
            if (bordered) {
              columnClassName.push('yld-table-td-grid');
            }
            if (column.fixed) {
              columnClassName.push(`yld-table-td-fixed-${column.fixed}`);
            }
            return (
              <div
                className={columnClassName.join(' ')}
                key={column.dataIndex}
                style={{ minWidth, width: minWidth }}
              >
                {column.title}
                {column.sort && (
                  <>
                    <Icon
                      type="xiala1"
                      size={12}
                      style={{ left: 4, top: -6 }}
                      onClick={() => {
                        query({
                          type: 'asc',
                          dataIndex: column.dataIndex,
                        });
                      }}
                    />
                    <Icon
                      type="xialadown"
                      size={12}
                      style={{ top: 6, right: 8 }}
                      onClick={() => {
                        query({
                          type: 'desc',
                          dataIndex: column.dataIndex,
                        });
                      }}
                    />
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  /** 渲染主体表格 */
  const renderBodyTable = (dataSource, columns) => {
    return (
      <div className="yld-table-body">
        {dataSource.map((data, index) => {
          let trClassName = ['yld-table-tr'];
          return (
            <div key={data[rowKey]} className={trClassName.join(' ')}>
              {columns.map((column) => {
                let minWidth = column.width || 100 / columns.length + '%';
                let label = column.render
                  ? column.render(data[column.dataIndex], data, index)
                  : data[column.dataIndex];
                let columnClassName = ['yld-table-td'];
                if (column.ellipsis) {
                  columnClassName.push('yld-table-td-ellipsis');
                }
                if (bordered) {
                  columnClassName.push('yld-table-td-grid');
                }
                if (column.fixed) {
                  columnClassName.push(`yld-table-td-fixed-${column.fixed}`);
                }
                return (
                  <div
                    title={typeof label !== 'object' ? label : ''}
                    key={column.dataIndex}
                    className={columnClassName.join(' ')}
                    style={{ minWidth, width: minWidth }}
                  >
                    {label}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  };
  return (
    <Spin loading={loading}>
      <div className="yld-table" style={style}>
        <div className="yld-table-wrap">
          <div className="yld-table-wrap-header">
            {renderHeaderTable(columns)}
          </div>
          <div className="yld-table-wrap-body">
            {tableRef.current.dataSource.length === 0 ? (
              <Empty />
            ) : (
              renderBodyTable(tableRef.current.dataSource, columns)
            )}
          </div>
        </div>
      </div>
      {paginationConfig !== false && (
        <div className="yld-table-footer">
          <Pagination
            {...paginationConfig}
            current={tableRef.current.pagination.pageNum}
            pageSize={tableRef.current.pagination.pageSize}
            total={tableRef.current.pagination.total}
            onChange={(pageNum) => {
              tableRef.current.pagination.pageNum = pageNum;
              paginationConfig.onChange?.(pageNum);
              table.current.refresh();
            }}
            onPageSizeChange={(pageSize) => {
              tableRef.current.pagination.pageSize = pageSize;
              paginationConfig.onPageSizeChange?.(pageSize);
              table.current.refresh();
            }}
          />
        </div>
      )}
    </Spin>
  );
};
