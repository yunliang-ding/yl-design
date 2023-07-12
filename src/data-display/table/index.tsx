import { useState, useEffect, useRef } from 'react';
import { Icon, Pagination, Checkbox, Empty, Spin } from '../../index';

export default ({
  columns,
  dataSource,
  rowKey,
  style,
  pagination,
  bordered,
  checkable = false,
  onCheck,
  loading = false,
  rows = {},
}: any) => {
  const [_columns, setcolumns] = useState(Array.isArray(columns) ? [...columns] : []);
  const [_dataSource, setdataSource] = useState(Array.isArray(dataSource) ? [...dataSource] : []);
  const [hovercolumn, sethovercolumn] = useState({}); // hover行
  const [checkedkeys, setcheckedkeys] = useState([]); // 内置选择器
  const [_pagination, setpagination] = useState({
    // 内置分页器
    current: 1,
    pageSize: 10,
    total: _dataSource.length,
  });
  // /**自分页处理逻辑 */
  // const __dataSource =
  //   pagination === false
  //     ? _dataSource
  //     : _dataSource.slice(
  //         _pagination.pageSize * (_pagination.current - 1),
  //         _pagination.pageSize * _pagination.current
  //       );
  /**全选当前数据 */
  const checkedAll = (checked) => {
    let checkedkeys = [];
    if (checked) {
      _dataSource.forEach((item) => {
        checkedkeys.push(item[rowKey || 'key']);
      });
    }
    setcheckedkeys(checkedkeys);
    typeof onCheck === 'function' && onCheck(checkedkeys);
  };
  const isCheckedAll = () => {
    // 判断是否已经全选
    let check =
      checkedkeys.length > 0 &&
      _dataSource.every((item) => {
        return checkedkeys.some((key) => key === item[rowKey || 'key']);
      });
    return check;
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
    window.addEventListener(
      'resize',
      debounce(() => {
        // 监听resize事件
        // setWidthSize();
      }),
    );
    if (tableBodyRef.current) {
      tableBodyRef.current.addEventListener('scroll', () => {
        // 监听scroll事件
        setFixScrollTop(tableBodyRef.current.scrollTop);
      });
    }
  }, []);
  useEffect(() => {
    setWidthSize();
  });
  // debounce 防抖
  const debounce = (fn, delay = 10) => {
    if (typeof fn !== 'function') {
      // 参数类型为函数
      throw new TypeError('fn is not a function');
    }
    let timer = null;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.call(this, ...args);
      }, delay);
    };
  };
  /**
   * 更新数据头和数据
   */
  useEffect(() => {
    if (Array.isArray(columns)) {
      setcolumns([...columns]);
    }
  }, [columns]);
  useEffect(() => {
    if (Array.isArray(dataSource)) {
      setdataSource([...dataSource]);
      _pagination.total = dataSource.length;
      _pagination.current = 1; // 重制第1页
      setpagination({ ..._pagination });
    }
  }, [dataSource]);
  /**
   * 内部多选
   */
  if (checkable) {
    let column = {
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
              setcheckedkeys([...checkedkeys]);
              typeof onCheck === 'function' && onCheck(checkedkeys);
            }}
          />
        );
      },
    };
    if (_columns[0] && _columns[0].dataIndex !== 'yld-checked-930226') {
      // 没有添加1项
      _columns.unshift(column);
    } else {
      _columns[0] = column;
    }
  }
  /**
   * 内部排序
   * @param sort
   * @param orderBy
   * @param column
   */
  const sort = (sort, orderBy, column) => {
    if (typeof sort === 'function') {
    } else {
      _dataSource.sort((a, b) => {
        if (orderBy === 'asc') {
          return a[column] > b[column] ? 1 : -1;
        } else {
          return a[column] > b[column] ? -1 : 1;
        }
      });
      setdataSource([..._dataSource]); // render
    }
  };
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
                      type="yldiconxiala1"
                      size={12}
                      style={{ left: 4, top: -6 }}
                      onClick={() => {
                        sort(column.sort, 'asc', column.dataIndex);
                      }}
                    />
                    <Icon
                      type="yldiconxialadown"
                      size={12}
                      style={{ top: 6, right: 8 }}
                      onClick={() => {
                        sort(column.sort, 'desc', column.dataIndex);
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
          if (hovercolumn[rowKey] === data[rowKey]) {
            trClassName.push('yld-table-tr-hover');
          }
          return (
            <div
              key={data[rowKey]}
              className={trClassName.join(' ')}
              onMouseEnter={() => {
                sethovercolumn(data);
                rows.onMouseEnter && rows.onMouseEnter(data);
              }}
              onMouseLeave={() => {
                sethovercolumn({});
                rows.onMouseLeave && rows.onMouseLeave({});
              }}
            >
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
  /**
   * 左右 fixed 列
   */
  const fixedLeft = _columns.filter((item) => item.fixed === 'left');
  const fixedRight = _columns.filter((item) => item.fixed === 'right');
  const [showFixed, setshowFixed] = useState(false);
  return (
    <Spin loading={loading}>
      <div className="yld-table-wrapper" style={style}>
        <div className="yld-table-box" ref={tableBoxRef}>
          <div className="yld-table-header" ref={tableHeaderRef}>
            {renderHeaderTable(_columns)}
          </div>
          <div className="yld-table-body" ref={tableBodyRef}>
            {_dataSource.length === 0 ? <Empty /> : renderBodyTable(_dataSource, _columns)}
          </div>
        </div>
        {showFixed && fixedLeft.length > 0 && (
          <div className="yld-table-fixed yld-table-fixed-left">
            <div className="yld-table-header">{renderHeaderTable(fixedLeft)}</div>
            <div className="yld-table-body" ref={tableFixedLeftRef}>
              {renderBodyTable(_dataSource, fixedLeft)}
            </div>
          </div>
        )}
        {showFixed && fixedRight.length > 0 && (
          <div className="yld-table-fixed yld-table-fixed-right">
            <div className="yld-table-header">{renderHeaderTable(fixedRight)}</div>
            <div className="yld-table-body" ref={tableFixedRightRef}>
              {renderBodyTable(_dataSource, fixedRight)}
            </div>
          </div>
        )}
      </div>
      {typeof pagination === 'object' ? (
        <div className="yld-table-footer">
          <Pagination {...pagination} />
        </div>
      ) : pagination !== false ? (
        <div className="yld-table-footer">
          <Pagination
            {..._pagination}
            onChange={(e) => {
              _pagination.current = e;
              setpagination({ ..._pagination });
            }}
          />
        </div>
      ) : null}
    </Spin>
  );
};
