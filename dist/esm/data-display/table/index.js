function _typeof(obj) {
  '@babel/helpers - typeof';
  return (
    (_typeof =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (obj) {
            return typeof obj;
          }
        : function (obj) {
            return obj &&
              'function' == typeof Symbol &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? 'symbol'
              : typeof obj;
          }),
    _typeof(obj)
  );
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly &&
      (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })),
      keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2
      ? ownKeys(Object(source), !0).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
      : ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, 'string');
  return _typeof(key) === 'symbol' ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== 'object' || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || 'default');
    if (_typeof(res) !== 'object') return res;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (hint === 'string' ? String : Number)(input);
}
function _toConsumableArray(arr) {
  return (
    _arrayWithoutHoles(arr) ||
    _iterableToArray(arr) ||
    _unsupportedIterableToArray(arr) ||
    _nonIterableSpread()
  );
}
function _nonIterableSpread() {
  throw new TypeError(
    'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}
function _iterableToArray(iter) {
  if (
    (typeof Symbol !== 'undefined' && iter[Symbol.iterator] != null) ||
    iter['@@iterator'] != null
  )
    return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) ||
    _iterableToArrayLimit(arr, i) ||
    _unsupportedIterableToArray(arr, i) ||
    _nonIterableRest()
  );
}
function _nonIterableRest() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit(arr, i) {
  var _i =
    null == arr
      ? null
      : ('undefined' != typeof Symbol && arr[Symbol.iterator]) || arr['@@iterator'];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (((_x = (_i = _i.call(arr)).next), 0 === i)) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else
        for (
          ;
          !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i);
          _n = !0
        );
    } catch (err) {
      (_d = !0), (_e = err);
    } finally {
      try {
        if (!_n && null != _i.return && ((_r = _i.return()), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
import { useState, useEffect, useRef } from 'react';
import { Icon, Pagination, Checkbox, Empty, Spin } from '../../index';
import './index.less';
import { jsx as _jsx } from 'react/jsx-runtime';
import { Fragment as _Fragment } from 'react/jsx-runtime';
import { jsxs as _jsxs } from 'react/jsx-runtime';
export default (function (_ref) {
  var columns = _ref.columns,
    dataSource = _ref.dataSource,
    rowKey = _ref.rowKey,
    style = _ref.style,
    pagination = _ref.pagination,
    bordered = _ref.bordered,
    _ref$checkable = _ref.checkable,
    checkable = _ref$checkable === void 0 ? false : _ref$checkable,
    onCheck = _ref.onCheck,
    _ref$loading = _ref.loading,
    loading = _ref$loading === void 0 ? false : _ref$loading,
    _ref$rows = _ref.rows,
    rows = _ref$rows === void 0 ? {} : _ref$rows;
  var _useState = useState(Array.isArray(columns) ? _toConsumableArray(columns) : []),
    _useState2 = _slicedToArray(_useState, 2),
    _columns = _useState2[0],
    setcolumns = _useState2[1];
  var _useState3 = useState(Array.isArray(dataSource) ? _toConsumableArray(dataSource) : []),
    _useState4 = _slicedToArray(_useState3, 2),
    _dataSource = _useState4[0],
    setdataSource = _useState4[1];
  var _useState5 = useState({}),
    _useState6 = _slicedToArray(_useState5, 2),
    hovercolumn = _useState6[0],
    sethovercolumn = _useState6[1]; // hover行
  var _useState7 = useState([]),
    _useState8 = _slicedToArray(_useState7, 2),
    checkedkeys = _useState8[0],
    setcheckedkeys = _useState8[1]; // 内置选择器
  var _useState9 = useState({
      // 内置分页器
      current: 1,
      pageSize: 10,
      total: _dataSource.length,
    }),
    _useState10 = _slicedToArray(_useState9, 2),
    _pagination = _useState10[0],
    setpagination = _useState10[1];
  // /**自分页处理逻辑 */
  // const __dataSource =
  //   pagination === false
  //     ? _dataSource
  //     : _dataSource.slice(
  //         _pagination.pageSize * (_pagination.current - 1),
  //         _pagination.pageSize * _pagination.current
  //       );
  /**全选当前数据 */
  var checkedAll = function checkedAll(checked) {
    var checkedkeys = [];
    if (checked) {
      _dataSource.forEach(function (item) {
        checkedkeys.push(item[rowKey || 'key']);
      });
    }
    setcheckedkeys(checkedkeys);
    typeof onCheck === 'function' && onCheck(checkedkeys);
  };
  var isCheckedAll = function isCheckedAll() {
    // 判断是否已经全选
    var check =
      checkedkeys.length > 0 &&
      _dataSource.every(function (item) {
        return checkedkeys.some(function (key) {
          return key === item[rowKey || 'key'];
        });
      });
    return check;
  };
  /**
   * useRef 调整Dom
   */
  var tableHeaderRef = useRef();
  var tableBodyRef = useRef();
  var tableBoxRef = useRef();
  var tableFixedLeftRef = useRef();
  var tableFixedRightRef = useRef();
  var setWidthSize = function setWidthSize() {
    tableHeaderRef.current && (tableHeaderRef.current.style.width = '100%'); // tableBodyRef.current.getBoundingClientRect().width + "px");
    // 宽度不够才展示fixed
    tableBoxRef.current &&
      setshowFixed(
        tableBoxRef.current.getBoundingClientRect().width <
          tableBodyRef.current.getBoundingClientRect().width,
      );
  };
  var setFixScrollTop = function setFixScrollTop(scrollTop) {
    if (tableFixedLeftRef.current && tableFixedRightRef.current) {
      tableFixedLeftRef.current.scrollTop = scrollTop;
      tableFixedRightRef.current.scrollTop = scrollTop;
    }
  };
  /**
   * 监听事件
   */
  useEffect(function () {
    window.addEventListener(
      'resize',
      debounce(function () {
        // 监听resize事件
        // setWidthSize();
      }),
    );
    if (tableBodyRef.current) {
      tableBodyRef.current.addEventListener('scroll', function () {
        // 监听scroll事件
        setFixScrollTop(tableBodyRef.current.scrollTop);
      });
    }
  }, []);
  useEffect(function () {
    setWidthSize();
  });
  // debounce 防抖
  var debounce = function debounce(fn) {
    var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
    if (typeof fn !== 'function') {
      // 参数类型为函数
      throw new TypeError('fn is not a function');
    }
    var timer = null;
    return function () {
      var _this = this;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      clearTimeout(timer);
      timer = setTimeout(function () {
        fn.call.apply(fn, [_this].concat(args));
      }, delay);
    };
  };
  /**
   * 更新数据头和数据
   */
  useEffect(
    function () {
      if (Array.isArray(columns)) {
        setcolumns(_toConsumableArray(columns));
      }
    },
    [columns],
  );
  useEffect(
    function () {
      if (Array.isArray(dataSource)) {
        setdataSource(_toConsumableArray(dataSource));
        _pagination.total = dataSource.length;
        _pagination.current = 1; // 重制第1页
        setpagination(_objectSpread({}, _pagination));
      }
    },
    [dataSource],
  );
  /**
   * 内部多选
   */
  if (checkable) {
    var column = {
      title: /*#__PURE__*/ _jsx(Checkbox, {
        checked: isCheckedAll(),
        onChange: function onChange(e) {
          checkedAll(e.target.checked);
        },
      }),
      width: 40,
      fixed: 'left',
      dataIndex: 'yld-checked-930226',
      render: function render(e, record) {
        return /*#__PURE__*/ _jsx(Checkbox, {
          checked: checkedkeys.includes(record[rowKey || 'key']),
          onChange: function onChange() {
            var index = checkedkeys.indexOf(record[rowKey || 'key']);
            if (index > -1) {
              checkedkeys.splice(index, 1);
            } else {
              checkedkeys.push(record[rowKey || 'key']);
            }
            setcheckedkeys(_toConsumableArray(checkedkeys));
            typeof onCheck === 'function' && onCheck(checkedkeys);
          },
        });
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
  var sort = function sort(_sort, orderBy, column) {
    if (typeof _sort === 'function') {
    } else {
      _dataSource.sort(function (a, b) {
        if (orderBy === 'asc') {
          return a[column] > b[column] ? 1 : -1;
        } else {
          return a[column] > b[column] ? -1 : 1;
        }
      });
      setdataSource(_toConsumableArray(_dataSource)); // render
    }
  };
  /**
   * 渲染表头
   * @param columns
   */
  var renderHeaderTable = function renderHeaderTable(columns) {
    return /*#__PURE__*/ _jsx('div', {
      className: 'yld-table',
      children: /*#__PURE__*/ _jsx('div', {
        className: 'yld-table-tr',
        children: columns.map(function (column) {
          var minWidth = column.width || 100 / columns.length + '%';
          var columnClassName = ['yld-table-td'];
          if (column.sort) {
            columnClassName.push('yld-table-td-sort');
          }
          if (bordered) {
            columnClassName.push('yld-table-td-grid');
          }
          return /*#__PURE__*/ _jsxs(
            'div',
            {
              className: columnClassName.join(' '),
              style: {
                minWidth: minWidth,
                width: minWidth,
              },
              children: [
                column.title,
                column.sort &&
                  /*#__PURE__*/ _jsxs(_Fragment, {
                    children: [
                      /*#__PURE__*/ _jsx(Icon, {
                        type: 'suiconxiala1',
                        size: 12,
                        style: {
                          left: 4,
                          top: -6,
                        },
                        onClick: function onClick() {
                          sort(column.sort, 'asc', column.dataIndex);
                        },
                      }),
                      /*#__PURE__*/ _jsx(Icon, {
                        type: 'suiconxialadown',
                        size: 12,
                        style: {
                          top: 6,
                          right: 8,
                        },
                        onClick: function onClick() {
                          sort(column.sort, 'desc', column.dataIndex);
                        },
                      }),
                    ],
                  }),
              ],
            },
            column.dataIndex,
          );
        }),
      }),
    });
  };
  /**
   * 渲染主体表格
   * @param dataSource
   * @param columns
   */
  var renderBodyTable = function renderBodyTable(dataSource, columns) {
    return /*#__PURE__*/ _jsx('div', {
      className: 'yld-table',
      children: dataSource.map(function (data, index) {
        var trClassName = ['yld-table-tr'];
        if (hovercolumn[rowKey] === data[rowKey]) {
          trClassName.push('yld-table-tr-hover');
        }
        return /*#__PURE__*/ _jsx(
          'div',
          {
            className: trClassName.join(' '),
            onMouseEnter: function onMouseEnter() {
              sethovercolumn(data);
              rows.onMouseEnter && rows.onMouseEnter(data);
            },
            onMouseLeave: function onMouseLeave() {
              sethovercolumn({});
              rows.onMouseLeave && rows.onMouseLeave({});
            },
            children: columns.map(function (column) {
              var minWidth = column.width || 100 / columns.length + '%';
              var label = column.render
                ? column.render(data[column.dataIndex], data, index)
                : data[column.dataIndex];
              var columnClassName = ['yld-table-td'];
              if (column.ellipsis) {
                columnClassName.push('yld-table-td-ellipsis');
              }
              if (bordered) {
                columnClassName.push('yld-table-td-grid');
              }
              return /*#__PURE__*/ _jsx(
                'div',
                {
                  title: _typeof(label) !== 'object' ? label : '',
                  className: columnClassName.join(' '),
                  style: {
                    minWidth: minWidth,
                    width: minWidth,
                  },
                  children: label,
                },
                column.dataIndex,
              );
            }),
          },
          data[rowKey],
        );
      }),
    });
  };
  /**
   * 左右 fixed 列
   */
  var fixedLeft = _columns.filter(function (item) {
    return item.fixed === 'left';
  });
  var fixedRight = _columns.filter(function (item) {
    return item.fixed === 'right';
  });
  var _useState11 = useState(false),
    _useState12 = _slicedToArray(_useState11, 2),
    showFixed = _useState12[0],
    setshowFixed = _useState12[1];
  return /*#__PURE__*/ _jsxs(Spin, {
    loading: loading,
    children: [
      /*#__PURE__*/ _jsxs('div', {
        className: 'yld-table-wrapper',
        style: style,
        children: [
          /*#__PURE__*/ _jsxs('div', {
            className: 'yld-table-box',
            ref: tableBoxRef,
            children: [
              /*#__PURE__*/ _jsx('div', {
                className: 'yld-table-header',
                ref: tableHeaderRef,
                children: renderHeaderTable(_columns),
              }),
              /*#__PURE__*/ _jsx('div', {
                className: 'yld-table-body',
                ref: tableBodyRef,
                children:
                  _dataSource.length === 0
                    ? /*#__PURE__*/ _jsx(Empty, {})
                    : renderBodyTable(_dataSource, _columns),
              }),
            ],
          }),
          showFixed &&
            fixedLeft.length > 0 &&
            /*#__PURE__*/ _jsxs('div', {
              className: 'yld-table-fixed yld-table-fixed-left',
              children: [
                /*#__PURE__*/ _jsx('div', {
                  className: 'yld-table-header',
                  children: renderHeaderTable(fixedLeft),
                }),
                /*#__PURE__*/ _jsx('div', {
                  className: 'yld-table-body',
                  ref: tableFixedLeftRef,
                  children: renderBodyTable(_dataSource, fixedLeft),
                }),
              ],
            }),
          showFixed &&
            fixedRight.length > 0 &&
            /*#__PURE__*/ _jsxs('div', {
              className: 'yld-table-fixed yld-table-fixed-right',
              children: [
                /*#__PURE__*/ _jsx('div', {
                  className: 'yld-table-header',
                  children: renderHeaderTable(fixedRight),
                }),
                /*#__PURE__*/ _jsx('div', {
                  className: 'yld-table-body',
                  ref: tableFixedRightRef,
                  children: renderBodyTable(_dataSource, fixedRight),
                }),
              ],
            }),
        ],
      }),
      _typeof(pagination) === 'object'
        ? /*#__PURE__*/ _jsx('div', {
            className: 'yld-table-footer',
            children: /*#__PURE__*/ _jsx(Pagination, _objectSpread({}, pagination)),
          })
        : pagination !== false
        ? /*#__PURE__*/ _jsx('div', {
            className: 'yld-table-footer',
            children: /*#__PURE__*/ _jsx(
              Pagination,
              _objectSpread(
                _objectSpread({}, _pagination),
                {},
                {
                  onChange: function onChange(e) {
                    _pagination.current = e;
                    setpagination(_objectSpread({}, _pagination));
                  },
                },
              ),
            ),
          })
        : null,
    ],
  });
});
