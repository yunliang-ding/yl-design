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
import { Icon, Empty } from '../../index';
import './index.less';
import { jsx as _jsx } from 'react/jsx-runtime';
import { jsxs as _jsxs } from 'react/jsx-runtime';
import { Fragment as _Fragment } from 'react/jsx-runtime';
export default (function (_ref) {
  var dataSource = _ref.dataSource,
    value = _ref.value,
    _ref$allowClear = _ref.allowClear,
    allowClear = _ref$allowClear === void 0 ? false : _ref$allowClear,
    placeholder = _ref.placeholder,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? {} : _ref$style,
    onSelect = _ref.onSelect,
    _ref$open = _ref.open,
    open = _ref$open === void 0 ? false : _ref$open;
  var _useState = useState(value),
    _useState2 = _slicedToArray(_useState, 2),
    _value = _useState2[0],
    setvalue = _useState2[1];
  useEffect(
    function () {
      var suffix = dataSource.find(function (item) {
        return _value.endsWith(item);
      }); // 拆分 value / suffix
      if (suffix) {
        setvalue(_value.substr(0, _value.lastIndexOf(suffix)));
        setsuffix(suffix);
      } else {
        setvalue(_value);
      }
    },
    [_value],
  );
  var _useState3 = useState(open),
    _useState4 = _slicedToArray(_useState3, 2),
    _open = _useState4[0],
    setopen = _useState4[1];
  var _useState5 = useState(''),
    _useState6 = _slicedToArray(_useState5, 2),
    suffix = _useState6[0],
    setsuffix = _useState6[1];
  var className = _open ? 'yld-auto yld-auto-open' : 'yld-auto';
  disabled && (className += ' yld-auto-disabled');
  return /*#__PURE__*/ _jsxs('div', {
    className: className,
    style: style,
    children: [
      /*#__PURE__*/ _jsxs('div', {
        className: 'yld-auto-selection',
        onClick: function onClick() {
          if (disabled) return;
          setopen(!_open);
        },
        children: [
          /*#__PURE__*/ _jsx('div', {
            className: 'yld-auto-selection-selected-value',
            children: /*#__PURE__*/ _jsx('input', {
              value: _value + suffix,
              className: 'yld-auto-selection-selected-input',
              placeholder: placeholder,
              onChange: function onChange(e) {
                setvalue(e.target.value);
                setsuffix('');
              },
            }),
          }),
          allowClear &&
            _value !== '' &&
            /*#__PURE__*/ _jsx(Icon, {
              type: 'suiconcuo',
              onClick: function onClick(e) {
                e.stopPropagation(); // 阻止冒泡
                setvalue('');
                setsuffix('');
                typeof onSelect === 'function' && onSelect('');
              },
            }),
        ],
      }),
      _open &&
        _value !== '' &&
        /*#__PURE__*/ _jsxs(_Fragment, {
          children: [
            /*#__PURE__*/ _jsx('div', {
              className: 'yld-auto-mask',
              onClick: setopen.bind(null, false),
            }),
            /*#__PURE__*/ _jsx('div', {
              className: 'yld-auto-dropdown',
              children:
                dataSource.length > 0
                  ? dataSource.map(function (option) {
                      var className =
                        option === _value
                          ? 'yld-auto-dropdown-menu yld-auto-dropdown-menu-selected'
                          : 'yld-auto-dropdown-menu';
                      return /*#__PURE__*/ _jsx(
                        'div',
                        {
                          className: className,
                          onClick: function onClick() {
                            setopen(false);
                            setsuffix(option);
                            typeof onSelect === 'function' && onSelect(_value + option);
                          },
                          children: _value + option,
                        },
                        option,
                      );
                    })
                  : /*#__PURE__*/ _jsx(Empty, {
                      label: '\u6682\u65E0\u6570\u636E',
                    }),
            }),
          ],
        }),
    ],
  });
});
