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
import './index.less';
import { jsx as _jsx } from 'react/jsx-runtime';
import { jsxs as _jsxs } from 'react/jsx-runtime';
export default (function (_ref) {
  var children = _ref.children,
    title = _ref.title,
    _ref$placement = _ref.placement,
    placement = _ref$placement === void 0 ? 'top' : _ref$placement,
    overlayClassName = _ref.overlayClassName,
    _ref$overlayStyle = _ref.overlayStyle,
    overlayStyle = _ref$overlayStyle === void 0 ? {} : _ref$overlayStyle,
    visible = _ref.visible,
    onVisibleChange = _ref.onVisibleChange,
    innerStyle = _ref.innerStyle,
    theme = _ref.theme;
  var _useState = useState(visible),
    _useState2 = _slicedToArray(_useState, 2),
    _open = _useState2[0],
    setopen = _useState2[1];
  var _useState3 = useState({}),
    _useState4 = _slicedToArray(_useState3, 2),
    style = _useState4[0],
    setstyle = _useState4[1];
  var toolTipRef = useRef();
  var toolTipInnerRef = useRef();
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
  useEffect(
    function () {
      setPosition();
    },
    [title],
  );
  var setPosition = function setPosition() {
    if (toolTipRef.current) {
      var _style = {};
      var element = toolTipRef.current.firstElementChild
        ? toolTipRef.current.firstElementChild
        : toolTipRef.current;
      var _element$getBoundingC = element.getBoundingClientRect(),
        left = _element$getBoundingC.left,
        width = _element$getBoundingC.width,
        height = _element$getBoundingC.height,
        top = _element$getBoundingC.top;
      if (placement === 'top') {
        _style.top = top;
        _style.left = left + width / 2;
      } else if (placement === 'bottom') {
        _style.top = top + height;
        _style.left = left + width / 2;
      } else if (placement === 'left') {
        _style.top = top + height / 2;
        _style.left = left;
      } else if (placement === 'right') {
        _style.top = top + height / 2;
        _style.left = left + width;
      } else {
        // top default
        _style.top = top;
        _style.left = left + width / 2;
      }
      setstyle(_style);
    }
  };
  useEffect(function () {
    /**
     * 监听滚动事件
     */
    window.addEventListener(
      'scroll',
      debounce(function () {
        setPosition();
      }),
    );
    window.addEventListener(
      'resize',
      debounce(function () {
        setPosition();
      }),
    );
  }, []);
  /**
   * 组装clasName
   */
  var className = ['yld-tooltip'];
  if (placement === 'top') {
    className.push('yld-tooltip-placement-top');
  } else if (placement === 'left') {
    className.push('yld-tooltip-placement-left');
  } else if (placement === 'right') {
    className.push('yld-tooltip-placement-right');
  } else if (placement === 'bottom') {
    className.push('yld-tooltip-placement-bottom');
  }
  if (overlayClassName) {
    className.push(overlayClassName);
  }
  if (theme === 'dark') {
    className.push('yld-tooltip-dark');
  }
  return /*#__PURE__*/ _jsxs('div', {
    className: _open || visible ? 'yld-tooltip-wrapper' : 'yld-tooltip-wrapper-hidden',
    children: [
      /*#__PURE__*/ _jsx('span', {
        ref: toolTipRef,
        onMouseOver: function onMouseOver() {
          setopen(true);
          typeof onVisibleChange === 'function' && onVisibleChange(true);
        },
        onMouseOut: function onMouseOut() {
          setopen(false);
          typeof onVisibleChange === 'function' && onVisibleChange(false);
        },
        children: children,
      }),
      /*#__PURE__*/ _jsx('div', {
        style: _objectSpread(_objectSpread({}, overlayStyle), style),
        className: className.join(' '),
        children: /*#__PURE__*/ _jsxs('div', {
          className: 'yld-tooltip-content',
          children: [
            /*#__PURE__*/ _jsx('div', {
              className: 'yld-tooltip-arrow',
            }),
            /*#__PURE__*/ _jsx('div', {
              style: innerStyle,
              className: 'yld-tooltip-inner',
              ref: toolTipInnerRef,
              children: title,
            }),
          ],
        }),
      }),
    ],
  });
});
