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
import { useState, useEffect } from 'react';
import { Icon, Tooltip } from '../../../index';
import { jsx as _jsx } from 'react/jsx-runtime';
import { jsxs as _jsxs } from 'react/jsx-runtime';
import { Fragment as _Fragment } from 'react/jsx-runtime';
var MenuVerical = function MenuVerical(_ref) {
  var menus = _ref.menus,
    menuClick = _ref.menuClick,
    openKey = _ref.openKey,
    selectKey = _ref.selectKey,
    style = _ref.style,
    collapsed = _ref.collapsed,
    _ref$theme = _ref.theme,
    theme = _ref$theme === void 0 ? 'light' : _ref$theme,
    _ref$collapsedWidth = _ref.collapsedWidth,
    collapsedWidth = _ref$collapsedWidth === void 0 ? 80 : _ref$collapsedWidth;
  var _useState = useState(openKey || []),
    _useState2 = _slicedToArray(_useState, 2),
    _openKey = _useState2[0],
    setopenKey = _useState2[1];
  var _useState3 = useState(selectKey || []),
    _useState4 = _slicedToArray(_useState3, 2),
    _selectKey = _useState4[0],
    setselectKey = _useState4[1];
  useEffect(
    function () {
      /**update */
      setselectKey(selectKey);
    },
    [selectKey],
  );
  useEffect(
    function () {
      /**update */
      setopenKey(openKey);
    },
    [openKey],
  );
  var isSelected = function isSelected(menus) {
    // 判断是否有子节点选中
    return menus.some(function (item) {
      if (_selectKey.includes(item.key)) {
        return true;
      } else if (item.children) {
        return isSelected(item.children);
      }
    });
  };
  var renderNav = function renderNav(item, labelClassName, paddingLeft) {
    return /*#__PURE__*/ _jsxs(_Fragment, {
      children: [
        /*#__PURE__*/ _jsxs('div', {
          className: labelClassName.join(' '),
          style: {
            paddingLeft: paddingLeft,
          },
          children: [
            /*#__PURE__*/ _jsxs('span', {
              className: 'yld-nav-subMenu-label-left',
              title: item.label,
              children: [
                item.icon &&
                  /*#__PURE__*/ _jsx(Icon, {
                    type: item.icon,
                  }),
                /*#__PURE__*/ _jsx('span', {
                  children: item.label,
                }),
              ],
            }),
            item.children &&
              /*#__PURE__*/ _jsx(Icon, {
                type: 'suiconxialadown',
              }),
          ],
        }),
        item.children &&
          /*#__PURE__*/ _jsx('div', {
            className: !_openKey.includes(item.key) ? 'yld-nav-subMenu-hidden' : '',
            children: renderMenus(item.children, paddingLeft + 24),
          }),
      ],
    });
  };
  var renderCollapsedNav = function renderCollapsedNav(item, labelClassName) {
    return /*#__PURE__*/ _jsx(_Fragment, {
      children: /*#__PURE__*/ _jsx('div', {
        className: labelClassName.join(' '),
        children: /*#__PURE__*/ _jsx(Tooltip, {
          theme: theme,
          placement: 'right',
          title: item.label,
          children: /*#__PURE__*/ _jsx(Icon, {
            type: item.icon,
            size: 18,
            style: {
              position: 'relative',
              left: 30,
            },
          }),
        }),
      }),
    });
  };
  var _onClick = function onClick(item) {
    if (item.disabled) return;
    var selectKey = _selectKey;
    if (item.children) {
      if (_openKey.includes(item.key)) {
        _openKey.splice(
          _openKey.findIndex(function (key) {
            return key === item.key;
          }),
          1,
        ); // 删除
      } else {
        _openKey.push(item.key);
      }
      setopenKey(_toConsumableArray(_openKey));
    } else {
      selectKey = [item.key];
      setselectKey(selectKey);
    }
    typeof menuClick === 'function' && menuClick(_openKey, selectKey);
  };
  var renderMenus = function renderMenus(menus, paddingLeft) {
    return menus.map(function (item) {
      var className = ['yld-nav-subMenu'];
      /**
       * className
       */
      if (item.children && isSelected(item.children)) {
        className.push('yld-nav-subMenu-selected');
      }
      if (_selectKey.includes(item.key)) {
        className.push('yld-nav-subMenu-active');
      }
      if (item.disabled) {
        className.push('yld-nav-subMenu-disabled');
      }
      /**
       * labelClassName
       */
      var labelClassName = ['yld-nav-subMenu-label'];
      if (_openKey.includes(item.key)) {
        labelClassName.push('yld-nav-subMenu-label-open');
      }
      if (item.children) {
        labelClassName.push('yld-nav-subMenu-parent');
      }
      if (collapsed) {
        labelClassName.push('yld-nav-subMenu-collapsed');
      }
      return /*#__PURE__*/ _jsx(
        'div',
        {
          className: className.join(' '),
          onClick: function onClick(e) {
            e.stopPropagation(); // 阻止冒泡
            _onClick(item);
          },
          children: collapsed
            ? renderCollapsedNav(item, labelClassName)
            : renderNav(item, labelClassName, paddingLeft),
        },
        item.key,
      );
    });
  };
  var className = theme === 'dark' ? 'yld-nav-dark' : 'yld-nav';
  return /*#__PURE__*/ _jsx(_Fragment, {
    children: /*#__PURE__*/ _jsx('div', {
      className: className,
      style: _objectSpread(
        _objectSpread({}, style),
        {},
        {
          width: collapsed ? collapsedWidth : style ? style.width : '100%',
        },
      ),
      children: renderMenus(menus, 20),
    }),
  });
};
export default MenuVerical;
