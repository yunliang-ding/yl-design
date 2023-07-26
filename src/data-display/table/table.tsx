import { useState, useEffect, useRef } from 'react';
import { TableProps } from '.';
import { Icon, Pagination, Checkbox, Empty, Spin } from '../../index';
import { debounce } from './util';

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
  tools = [],
}: TableProps) => {
  const [reload, setReload] = useState(Math.random());
  // 控制刷新
  const refresh = () => {
    setReload(Math.random());
  };
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
    table.current.refresh = refresh;
  }, []);
  // 请求数据
  useEffect(() => {
    query();
  }, [reload]);
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
   * useRef 调整Dom
   */
  const tableHeaderRef: any = useRef();
  const tableBodyRef: any = useRef();
  const tableBoxRef: any = useRef();
  const tableFixedLeftRef: any = useRef();
  const tableFixedRightRef: any = useRef();
  const setWidthSize = () => {
    tableHeaderRef.current && (tableHeaderRef.current.style.width = '100%'); // tableBodyRef.current.getBoundingClientRect().width + "px");
    // 宽度不够才展示fixed
    tableBoxRef.current &&
      setshowFixed(
        tableBoxRef.current.getBoundingClientRect().width <
          tableBodyRef.current.getBoundingClientRect().width,
      );
  };
  const setFixScrollTop = (scrollTop) => {
    if (tableFixedLeftRef.current && tableFixedRightRef.current) {
      tableFixedLeftRef.current.scrollTop = scrollTop;
      tableFixedRightRef.current.scrollTop = scrollTop;
    }
  };
  /**
   * 监听事件
   */
  useEffect(() => {
    // 监听scroll事件
    if (tableBodyRef.current) {
      const scroll = () => {
        setFixScrollTop(tableBodyRef.current.scrollTop);
      };

      tableBodyRef.current?.addEventListener('scroll', scroll);
      return () => tableBodyRef.current?.removeEventListener('scroll', scroll);
    }
    // 监听resize事件
    const resize = debounce(() => {
      setWidthSize();
    });
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);
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
  /**
   * 渲染表头
   * @param columns
   */
  const renderHeaderTable = (columns) => {
    return (
      <div className="yld-table">
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
  /**
   * 渲染主体表格
   * @param dataSource
   * @param columns
   */
  const renderBodyTable = (dataSource, columns) => {
    return (
      <div className="yld-table">
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
  /** 左右 fixed 列 */
  const fixedLeft = columns.filter((item) => item.fixed === 'left');
  const fixedRight = columns.filter((item) => item.fixed === 'right');
  const [showFixed, setshowFixed] = useState(false);
  return (
    <Spin loading={loading}>
      <div className="yld-table-wrapper" style={style}>
        <div className="yld-table-box" ref={tableBoxRef}>
          <div className="yld-table-header" ref={tableHeaderRef}>
            {renderHeaderTable(columns)}
          </div>
          <div className="yld-table-body" ref={tableBodyRef}>
            {tableRef.current.dataSource.length === 0 ? (
              <Empty />
            ) : (
              renderBodyTable(tableRef.current.dataSource, columns)
            )}
          </div>
        </div>
        {showFixed && fixedLeft.length > 0 && (
          <div className="yld-table-fixed yld-table-fixed-left">
            <div className="yld-table-header">
              {renderHeaderTable(fixedLeft)}
            </div>
            <div className="yld-table-body" ref={tableFixedLeftRef}>
              {renderBodyTable(tableRef.current.dataSource, fixedLeft)}
            </div>
          </div>
        )}
        {showFixed && fixedRight.length > 0 && (
          <div className="yld-table-fixed yld-table-fixed-right">
            <div className="yld-table-header">
              {renderHeaderTable(fixedRight)}
            </div>
            <div className="yld-table-body" ref={tableFixedRightRef}>
              {renderBodyTable(tableRef.current.dataSource, fixedRight)}
            </div>
          </div>
        )}
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
              refresh();
            }}
            onPageSizeChange={(pageSize) => {
              tableRef.current.pagination.pageSize = pageSize;
              paginationConfig.onPageSizeChange?.(pageSize);
              refresh();
            }}
          />
        </div>
      )}
    </Spin>
  );
};
