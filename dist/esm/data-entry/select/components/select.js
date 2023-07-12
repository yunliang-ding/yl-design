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
import { Icon, Empty, Layer } from '../../../index';
import { jsx as _jsx } from 'react/jsx-runtime';
import { jsxs as _jsxs } from 'react/jsx-runtime';
import { Fragment as _Fragment } from 'react/jsx-runtime';
export default (function (_ref) {
  var options = _ref.options,
    value = _ref.value,
    _ref$allowClear = _ref.allowClear,
    allowClear = _ref$allowClear === void 0 ? false : _ref$allowClear,
    placeholder = _ref.placeholder,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? {} : _ref$style,
    dropdownClassName = _ref.dropdownClassName,
    _ref$dropdownStyle = _ref.dropdownStyle,
    dropdownStyle = _ref$dropdownStyle === void 0 ? {} : _ref$dropdownStyle,
    onChange = _ref.onChange,
    onSearch = _ref.onSearch,
    _ref$filter = _ref.filter,
    filter = _ref$filter === void 0 ? false : _ref$filter,
    _ref$open = _ref.open,
    open = _ref$open === void 0 ? false : _ref$open;
  useEffect(
    function () {
      setvalue(value); // update
    },
    [value],
  );
  useEffect(
    function () {
      setoptions(options); // update
    },
    [options],
  );
  var _useState = useState(open),
    _useState2 = _slicedToArray(_useState, 2),
    _open = _useState2[0],
    setopen = _useState2[1];
  var _useState3 = useState(options),
    _useState4 = _slicedToArray(_useState3, 2),
    _options = _useState4[0],
    setoptions = _useState4[1];
  var _useState5 = useState(value),
    _useState6 = _slicedToArray(_useState5, 2),
    _value = _useState6[0],
    setvalue = _useState6[1];
  var selected =
    _options.find(function (item) {
      return item.value === _value;
    }) || {}; // 选中项
  var _useState7 = useState(''),
    _useState8 = _slicedToArray(_useState7, 2),
    keyword = _useState8[0],
    setkeyword = _useState8[1];
  var _useState9 = useState(selected.label || placeholder),
    _useState10 = _slicedToArray(_useState9, 2),
    _placeholder = _useState10[0],
    setplaceholder = _useState10[1];
  var _useState11 = useState(dropdownStyle || {}),
    _useState12 = _slicedToArray(_useState11, 2),
    _dropdownStyle = _useState12[0],
    setdropdownStyle = _useState12[1];
  var _useState13 = useState(false),
    _useState14 = _slicedToArray(_useState13, 2),
    refresh = _useState14[0],
    setrefresh = _useState14[1];
  var className = _open ? 'yld-select yld-select-open' : 'yld-select';
  disabled && (className += ' yld-select-disabled');
  /** ref */
  var selectionRef = useRef();
  /** 计算实际高度 */
  var getElementTop = function getElementTop(el) {
    var actualTop = el.offsetTop;
    var current = el.offsetParent;
    while (current !== null) {
      actualTop += current.offsetTop;
      current = current.offsetParent;
    }
    return actualTop;
  };
  /** 获取位置 */
  useEffect(function () {
    setTimeout(function () {
      if (selectionRef && selectionRef.current) {
        var _selectionRef$current = selectionRef.current.getBoundingClientRect(),
          left = _selectionRef$current.left,
          height = _selectionRef$current.height,
          width = _selectionRef$current.width;
        var top = getElementTop(selectionRef.current);
        setdropdownStyle(
          _objectSpread(
            {
              left: left,
              top: top + height + 4,
              maxHeight: 300,
              width: width,
              minWidth: 140,
            },
            dropdownStyle,
          ),
        );
      }
    }, 1000);
  }, []);
  return /*#__PURE__*/ _jsxs(_Fragment, {
    children: [
      /*#__PURE__*/ _jsx('div', {
        className: className,
        style: style,
        children: /*#__PURE__*/ _jsxs('div', {
          ref: selectionRef,
          className: 'yld-select-selection',
          onClick: function onClick() {
            if (disabled) return;
            setopen(!_open);
          },
          children: [
            /*#__PURE__*/ _jsx('div', {
              className: 'yld-select-selection-selected-value',
              children: filter
                ? /*#__PURE__*/ _jsx('input', {
                    value: keyword,
                    className: 'yld-select-selection-selected-input',
                    placeholder: _placeholder,
                    onBlur: function onBlur() {
                      setkeyword(''); // 清空 keyword
                      setTimeout(function () {
                        // 避免闪动
                        setoptions(options); // 重制 options
                      }, 500);
                    },
                    onChange: function onChange(e) {
                      setkeyword(e.target.value);
                      if (e.target.value.trim() !== '') {
                        setoptions(
                          options.filter(function (option) {
                            return typeof filter === 'function'
                              ? filter(option, e.target.value)
                              : option.label
                                  .toLowerCase()
                                  .includes(e.target.value.trim().toLowerCase());
                          }),
                        );
                        setrefresh(!refresh);
                      } else {
                        setoptions(options);
                        setrefresh(!refresh);
                      }
                      typeof onSearch === 'function' && onSearch(e.target.value);
                    },
                  })
                : selected.value === undefined
                ? /*#__PURE__*/ _jsx('span', {
                    style: {
                      color: '#aaa',
                    },
                    children: placeholder,
                  })
                : selected.label,
            }),
            /*#__PURE__*/ _jsx(Icon, {
              type: 'suiconxialadown',
            }),
            !disabled &&
              allowClear &&
              selected.value !== undefined &&
              /*#__PURE__*/ _jsx(Icon, {
                type: 'suiconcuo',
                onClick: function onClick(e) {
                  e.stopPropagation(); // 阻止冒泡
                  typeof onChange === 'function' && onChange(null, null);
                },
              }),
          ],
        }),
      }),
      /*#__PURE__*/ _jsx(Layer, {
        style: _dropdownStyle,
        open: _open,
        close: setopen.bind(null, false),
        refresh: refresh,
        childrenClassName: dropdownClassName,
        children: /*#__PURE__*/ _jsx(_Fragment, {
          children:
            _options.length > 0
              ? _options.map(function (option) {
                  var className =
                    option.value === _value
                      ? 'yld-select-dropdown-menu yld-select-dropdown-menu-selected'
                      : 'yld-select-dropdown-menu';
                  option.disabled && (className += ' yld-select-dropdown-menu-disabled');
                  return /*#__PURE__*/ _jsx(
                    'div',
                    {
                      className: className,
                      onClick: function onClick() {
                        if (option.disabled) return;
                        setopen(false);
                        setplaceholder(option.value); // 设置 placeholder
                        setkeyword(''); // 清空 keyword
                        setoptions(options); // 重制 options
                        setvalue(option.value);
                        typeof onChange === 'function' && onChange(option.value, option);
                      },
                      children: option.label,
                    },
                    option.key,
                  );
                })
              : /*#__PURE__*/ _jsx(Empty, {
                  label: '\u6682\u65E0\u6570\u636E',
                }),
        }),
      }),
    ],
  });
});
