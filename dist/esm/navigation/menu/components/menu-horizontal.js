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
import { Dropdown, Icon } from '../../../index';
import { jsx as _jsx } from 'react/jsx-runtime';
import { jsxs as _jsxs } from 'react/jsx-runtime';
import { Fragment as _Fragment } from 'react/jsx-runtime';
var MenuHorizontal = function MenuHorizontal(_ref) {
  var menus = _ref.menus,
    openKey = _ref.openKey,
    selectKey = _ref.selectKey,
    menuClick = _ref.menuClick,
    theme = _ref.theme,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? {} : _ref$style;
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
      setselectKey(_toConsumableArray(selectKey));
    }
    typeof menuClick === 'function' && menuClick(_openKey, selectKey, item);
  };
  /**
   *
   * @param menus render
   */
  var renderNav = function renderNav(menus) {
    return menus.map(function (menu) {
      var menuClassName = ['yld-menu-horizontal-item'];
      if (_selectKey.indexOf(menu.key) > -1 || (menu.children && isSelected(menu.children))) {
        menuClassName.push('yld-menu-horizontal-item-selected');
      }
      if (menu.disabled) {
        menuClassName.push('yld-menu-horizontal-item-disabled');
      }
      return /*#__PURE__*/ _jsx(
        'div',
        {
          className: menuClassName.join(' '),
          onClick: function onClick() {
            _onClick(menu);
          },
          children: menu.children
            ? /*#__PURE__*/ _jsxs(
                Dropdown,
                {
                  overlay: renderNav(menu.children),
                  children: [
                    menu.icon &&
                      /*#__PURE__*/ _jsx(Icon, {
                        type: menu.icon,
                      }),
                    menu.label,
                  ],
                },
                menu.key,
              )
            : /*#__PURE__*/ _jsxs(_Fragment, {
                children: [
                  menu.icon &&
                    /*#__PURE__*/ _jsx(Icon, {
                      type: menu.icon,
                    }),
                  menu.label,
                ],
              }),
        },
        menu.key,
      );
    });
  };
  var className = theme === 'dark' ? 'yld-menu-horizontal-dark' : 'yld-menu-horizontal';
  return /*#__PURE__*/ _jsx('div', {
    className: className,
    style: style,
    children: renderNav(menus),
  });
};
export default MenuHorizontal;
