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
import { useState, useEffect } from 'react';
import { Input, Select, Icon } from '../../index';
import './index.less';
import { jsx as _jsx } from 'react/jsx-runtime';
import { jsxs as _jsxs } from 'react/jsx-runtime';
import { Fragment as _Fragment } from 'react/jsx-runtime';
export default (function (_ref) {
  var _ref$current = _ref.current,
    current = _ref$current === void 0 ? 1 : _ref$current,
    _ref$pageSize = _ref.pageSize,
    pageSize = _ref$pageSize === void 0 ? 10 : _ref$pageSize,
    total = _ref.total,
    onChange = _ref.onChange,
    pageSizeOptions = _ref.pageSizeOptions,
    onPageSizeChange = _ref.onPageSizeChange,
    showJumper = _ref.showJumper;
  var _useState = useState(current),
    _useState2 = _slicedToArray(_useState, 2),
    _current = _useState2[0],
    setcurrent = _useState2[1];
  var _useState3 = useState(pageSize),
    _useState4 = _slicedToArray(_useState3, 2),
    _pageSize = _useState4[0],
    setpageSize = _useState4[1];
  /**
   * update
   */
  useEffect(
    function () {
      setcurrent(current);
    },
    [current],
  );
  useEffect(
    function () {
      setpageSize(pageSize);
    },
    [pageSize],
  );
  var pageChange = function pageChange(current) {
    setcurrent(current);
    typeof onChange === 'function' && onChange(current);
  };
  var totalPage = Math.ceil(total / _pageSize);
  var page = [];
  var arr = [1];
  if (totalPage > 8) {
    // 默认大于8 转为更多模式
    if (_current > 5 && _current + 5 < totalPage) {
      arr.push(-1, _current - 2, _current - 1, _current, _current + 1, _current + 2, -2);
    } else if (_current + 5 >= totalPage) {
      arr.push(-1, totalPage - 5, totalPage - 4, totalPage - 3, totalPage - 2, totalPage - 1);
    } else {
      arr.push(2, 3, 4, 5, 6, -2);
    }
    arr.push(totalPage);
    arr.forEach(function (item) {
      page.push(
        /*#__PURE__*/ _jsx(
          'div',
          {
            className: _current === item ? 'yld-pagination-item-active' : 'yld-pagination-item',
            onClick: function onClick() {
              if (item === -1) {
                pageChange(_current - 5);
              } else if (item === -2) {
                pageChange(_current + 5);
              } else {
                pageChange(item);
              }
            },
            children:
              [-1, -2].indexOf(item) > -1
                ? /*#__PURE__*/ _jsx(Icon, {
                    type: 'suiconmoreread',
                  })
                : item,
          },
          Math.random(),
        ),
      );
    });
  } else {
    var _loop = function _loop(i) {
      page.push(
        /*#__PURE__*/ _jsx(
          'div',
          {
            className: _current === i ? 'yld-pagination-item-active' : 'yld-pagination-item',
            onClick: function onClick() {
              pageChange(i);
            },
            children: i,
          },
          Math.random(),
        ),
      );
    };
    for (var i = 1; i < totalPage + 1; i++) {
      _loop(i);
    }
  }
  return /*#__PURE__*/ _jsx(_Fragment, {
    children: /*#__PURE__*/ _jsxs('div', {
      className: 'yld-pagination',
      children: [
        /*#__PURE__*/ _jsx('div', {
          className: _current == 1 ? 'yld-pagination-pre-disabled' : 'yld-pagination-pre',
          onClick: function onClick() {
            if (_current != 1) {
              pageChange(_current - 1);
            }
          },
          children: /*#__PURE__*/ _jsx(Icon, {
            type: 'suiconicon-jiantouzuo',
          }),
        }),
        page,
        /*#__PURE__*/ _jsx('div', {
          className: _current == totalPage ? 'yld-pagination-next-disabled' : 'yld-pagination-next',
          onClick: function onClick() {
            if (_current !== totalPage) {
              pageChange(_current + 1);
            }
          },
          children: /*#__PURE__*/ _jsx(Icon, {
            type: 'suiconjiantou2',
          }),
        }),
        pageSizeOptions &&
          /*#__PURE__*/ _jsx('div', {
            className: 'yld-pagination-jump',
            children: /*#__PURE__*/ _jsx(Select, {
              style: {
                width: 104,
                height: 32,
              },
              value: _pageSize,
              onChange: function onChange(pageSize) {
                setcurrent(1);
                setpageSize(pageSize);
                typeof onPageSizeChange === 'function' && onPageSizeChange(pageSize);
              },
              options: pageSizeOptions.map(function (value) {
                return {
                  label: '\u6BCF\u9875'.concat(value, '\u6761'),
                  value: value,
                };
              }),
            }),
          }),
        showJumper &&
          /*#__PURE__*/ _jsxs('div', {
            className: 'yld-pagination-jump',
            children: [
              /*#__PURE__*/ _jsx('span', {
                className: 'yld-pagination-jump-label',
                children: '\u8DF3\u8F6C\u81F3',
              }),
              /*#__PURE__*/ _jsx(Input, {
                style: {
                  width: 80,
                },
                min: 1,
                onBlur: function onBlur(e) {
                  var current = parseInt(e.target.value);
                  if (!isNaN(current)) {
                    setcurrent(current > totalPage ? totalPage : current);
                    typeof onChange === 'function' && onChange(current);
                  }
                },
              }),
              /*#__PURE__*/ _jsx('span', {
                children: '\u9875',
              }),
            ],
          }),
        /*#__PURE__*/ _jsxs('span', {
          className: 'yld-pagination-total',
          children: ['\u5171 ', total, ' \u6761'],
        }),
      ],
    }),
  });
});
