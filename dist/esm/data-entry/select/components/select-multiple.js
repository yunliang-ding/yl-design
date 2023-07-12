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
import { useState, useRef, useEffect } from 'react';
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
    _ref$open = _ref.open,
    open = _ref$open === void 0 ? false : _ref$open;
  var _useState = useState(open),
    _useState2 = _slicedToArray(_useState, 2),
    _open = _useState2[0],
    setopen = _useState2[1];
  var _useState3 = useState(options),
    _useState4 = _slicedToArray(_useState3, 2),
    _options = _useState4[0],
    setoptions = _useState4[1];
  var _useState5 = useState(Array.isArray(value) ? value : []),
    _useState6 = _slicedToArray(_useState5, 2),
    _value = _useState6[0],
    setvalue = _useState6[1]; // 格式处理 deep
  var _useState7 = useState(dropdownStyle || {}),
    _useState8 = _slicedToArray(_useState7, 2),
    _dropdownStyle = _useState8[0],
    setdropdownStyle = _useState8[1];
  var className = _open ? 'yld-select yld-select-open' : 'yld-select';
  disabled && (className += ' yld-select-disabled');
  /** ref */
  var selectSelectionWapper = useRef();
  var selectValueWapper = useRef();
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
  /**update */
  useEffect(
    function () {
      setvalue(Array.isArray(value) ? value : []); // 引用类型需要拷贝一下，不然观测失败
    },
    [value],
  );
  useEffect(
    function () {
      setoptions(options);
    },
    [options],
  );
  /** 获取位置 */
  useEffect(function () {
    adjustHeight();
  }, []);
  useEffect(
    function () {
      adjustHeight();
    },
    [_value],
  );
  /** 自适应位置 */
  var adjustHeight = function adjustHeight() {
    if (selectValueWapper && selectValueWapper.current) {
      var _selectValueWapper$cu = selectValueWapper.current.getBoundingClientRect(),
        height = _selectValueWapper$cu.height;
      var _selectSelectionWappe = selectSelectionWapper.current.getBoundingClientRect(),
        left = _selectSelectionWappe.left,
        width = _selectSelectionWappe.width;
      var top = getElementTop(selectValueWapper.current);
      selectSelectionWapper.current.style.height = height + 'px';
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
  };
  return /*#__PURE__*/ _jsxs(_Fragment, {
    children: [
      /*#__PURE__*/ _jsx('div', {
        className: className,
        style: style,
        children: /*#__PURE__*/ _jsxs('div', {
          ref: selectSelectionWapper,
          className: 'yld-select-selection yld-select-selection-multiple',
          onClick: function onClick() {
            if (disabled) return;
            setopen(!_open);
          },
          children: [
            /*#__PURE__*/ _jsx('div', {
              ref: selectValueWapper,
              className: 'yld-select-selection-selected-value',
              children:
                _value.length === 0
                  ? /*#__PURE__*/ _jsx('span', {
                      style: {
                        color: '#aaa',
                      },
                      children: placeholder,
                    })
                  : /*#__PURE__*/ _jsx('div', {
                      className: 'yld-select-selection-choice-warpper',
                      children: options
                        .filter(function (item) {
                          return _value.indexOf(item.value) > -1;
                        })
                        .map(function (item) {
                          return /*#__PURE__*/ _jsxs(
                            'span',
                            {
                              className: 'yld-select-selection-choice',
                              children: [
                                item.label,
                                /*#__PURE__*/ _jsx(Icon, {
                                  size: 14,
                                  type: 'suiconguanbi',
                                  onClick: function onClick(e) {
                                    e.stopPropagation(); // 阻止冒泡
                                    var value = _value.filter(function (item) {
                                      return item !== item.value;
                                    }); // 删除
                                    setvalue(_toConsumableArray(_value));
                                    typeof onChange === 'function' && onChange(value, null);
                                  },
                                }),
                              ],
                            },
                            item.key,
                          );
                        }),
                    }),
            }),
            /*#__PURE__*/ _jsx(Icon, {
              type: 'suiconxialadown',
            }),
            !disabled &&
              allowClear &&
              _value.length > 0 &&
              /*#__PURE__*/ _jsx(Icon, {
                size: 14,
                type: 'suiconcuo',
                onClick: function onClick(e) {
                  e.stopPropagation(); // 阻止冒泡
                  typeof onChange === 'function' && onChange([], null);
                },
              }),
          ],
        }),
      }),
      /*#__PURE__*/ _jsx(Layer, {
        style: _dropdownStyle,
        open: _open,
        close: setopen.bind(null, false),
        refresh: _value,
        childrenClassName: dropdownClassName,
        children: /*#__PURE__*/ _jsx(_Fragment, {
          children:
            _options.length > 0
              ? _options.map(function (option) {
                  var className =
                    _value.indexOf(option.value) > -1
                      ? 'yld-select-dropdown-menu yld-select-dropdown-menu-selected'
                      : 'yld-select-dropdown-menu';
                  option.disabled && (className += ' yld-select-dropdown-menu-disabled');
                  return /*#__PURE__*/ _jsxs(
                    'div',
                    {
                      className: className,
                      onClick: function onClick(e) {
                        if (option.disabled) return;
                        // 没有则添加，有则删除
                        var index = _value.indexOf(option.value);
                        if (index === -1) {
                          _value.push(option.value);
                        } else {
                          _value.splice(index, 1);
                        }
                        setvalue(_toConsumableArray(_value));
                        typeof onChange === 'function' &&
                          onChange(_toConsumableArray(_value), option);
                      },
                      children: [
                        option.label,
                        /*#__PURE__*/ _jsx(Icon, {
                          size: 14,
                          type: 'suiconduihao',
                        }),
                      ],
                    },
                    option.key,
                  );
                })
              : /*#__PURE__*/ _jsx(Empty, {}),
        }),
      }),
    ],
  });
});
