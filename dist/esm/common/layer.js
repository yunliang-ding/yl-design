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
/**
 * 标准弹窗组件
 * layer
 * Select
 * Modal
 * Message
 * AutoComplete
 * DatePicker
 * TimePicker
 * Drawer
 * Tooltip
 */
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './layer.less';
import { jsx as _jsx } from 'react/jsx-runtime';
import { Fragment as _Fragment } from 'react/jsx-runtime';
import { jsxs as _jsxs } from 'react/jsx-runtime';
export default (function (_ref) {
  var children = _ref.children,
    _ref$open = _ref.open,
    open = _ref$open === void 0 ? false : _ref$open,
    close = _ref.close,
    style = _ref.style,
    refresh = _ref.refresh,
    childrenClassName = _ref.childrenClassName,
    mask = _ref.mask;
  var className = ['yld-layer'];
  if (!open) {
    className.push('yld-layer-hidden');
  }
  if (childrenClassName) {
    className.push(childrenClassName);
  }
  var _useState = useState(),
    _useState2 = _slicedToArray(_useState, 2),
    layerContainer = _useState2[0],
    setlayerContainer = _useState2[1];
  /**
   * 下拉的dom
   */
  useEffect(function () {
    var layerContainer = document.createElement('div');
    layerContainer.style.left = 0;
    layerContainer.style.top = 0;
    layerContainer.style.width = '100%';
    layerContainer.style.position = 'absolute';
    setlayerContainer(layerContainer);
  }, []);
  var Renderlayer = function Renderlayer() {
    return /*#__PURE__*/ _jsxs(_Fragment, {
      children: [
        /*#__PURE__*/ _jsx('div', {
          className: 'yld-layer-mask',
          onClick: close,
          style: {
            background: mask ? '#00000014' : 'transparent',
          },
        }),
        /*#__PURE__*/ _jsx('div', {
          className: className.join(' '),
          style: style,
          children: children,
        }),
      ],
    });
  };
  useEffect(
    function () {
      if (open) {
        var _document$querySelect;
        /** 创建dom */
        (_document$querySelect = document.querySelector('body')) === null ||
        _document$querySelect === void 0
          ? void 0
          : _document$querySelect.appendChild(layerContainer);
        ReactDOM.render(/*#__PURE__*/ _jsx(Renderlayer, {}), layerContainer);
      } else {
        /** 删除dom */
        layerContainer && layerContainer.remove();
      }
    },
    [open],
  );
  useEffect(
    function () {
      /** 更新 */
      if (open) {
        ReactDOM.render(/*#__PURE__*/ _jsx(Renderlayer, {}), layerContainer);
      }
    },
    [refresh],
  );
  return null;
});
