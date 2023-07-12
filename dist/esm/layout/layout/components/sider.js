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
import { useState } from 'react';
import { Icon } from './../../../index';
import { jsx as _jsx } from 'react/jsx-runtime';
import { Fragment as _Fragment } from 'react/jsx-runtime';
import { jsxs as _jsxs } from 'react/jsx-runtime';
var Sider = function Sider(_ref) {
  var children = _ref.children,
    trigger = _ref.trigger,
    collapsible = _ref.collapsible,
    collapsed = _ref.collapsed,
    onCollapse = _ref.onCollapse,
    _ref$collapsedWidth = _ref.collapsedWidth,
    collapsedWidth = _ref$collapsedWidth === void 0 ? 80 : _ref$collapsedWidth,
    width = _ref.width,
    theme = _ref.theme;
  var className = ['yld-layout-sider'];
  var _useState = useState(collapsed),
    _useState2 = _slicedToArray(_useState, 2),
    _collapsed = _useState2[0],
    setcollapsed = _useState2[1];
  if (_collapsed) {
    className.push('yld-layout-sider-collapsed');
  }
  if (theme === 'dark') {
    className.push('yld-layout-sider-dark');
  }
  var style = {};
  if (width && !_collapsed) {
    style.minWidth = width;
  } else {
    style.minWidth = collapsedWidth;
  }
  return /*#__PURE__*/ _jsx('aside', {
    className: className.join(' '),
    style: style,
    children:
      collapsible && trigger !== null
        ? /*#__PURE__*/ _jsxs(_Fragment, {
            children: [
              /*#__PURE__*/ _jsx('div', {
                className: 'yld-layout-sider-children',
                children: children,
              }),
              /*#__PURE__*/ _jsx('div', {
                className: 'yld-layout-sider-trigger',
                onClick: function onClick() {
                  setcollapsed(!_collapsed);
                  typeof onCollapse === 'function' && onCollapse(!_collapsed);
                },
                children: /*#__PURE__*/ _jsx(Icon, {
                  type: 'suiconicon-jiantouzuo',
                  size: 20,
                }),
              }),
            ],
          })
        : children,
  });
};
Sider.nickName = 'Sider';
export default Sider;
