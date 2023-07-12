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
import { Button, Icon } from '../../index';
import 'index.less';
import { jsx as _jsx } from 'react/jsx-runtime';
import { jsxs as _jsxs } from 'react/jsx-runtime';
import { Fragment as _Fragment } from 'react/jsx-runtime';
export default (function (_ref) {
  var title = _ref.title,
    closable = _ref.closable,
    placement = _ref.placement,
    _ref$visible = _ref.visible,
    visible = _ref$visible === void 0 ? false : _ref$visible,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? {} : _ref$style,
    top = _ref.top,
    onClose = _ref.onClose,
    onOk = _ref.onOk,
    children = _ref.children,
    footer = _ref.footer,
    mask = _ref.mask;
  var _useState = useState(visible),
    _useState2 = _slicedToArray(_useState, 2),
    _visible = _useState2[0],
    setvisible = _useState2[1];
  useEffect(
    function () {
      setvisible(visible);
    },
    [visible],
  );
  var close = function close() {
    setvisible(false);
    typeof onClose === 'function' && onClose();
  };
  var ok = function ok() {
    close();
    typeof onOk === 'function' && onOk();
  };
  var className = ['yld-drawer'];
  if (placement === 'left') {
    className.push('yld-drawer-left');
  }
  /**
   * Dom
   */
  var drawerRef = useRef();
  useEffect(
    function () {
      if (drawerRef.current) {
        drawerRef.current.style.height = 'calc(100vh - '.concat(top, 'px)');
      }
    },
    [_visible],
  );
  return /*#__PURE__*/ _jsxs(_Fragment, {
    children: [
      _visible === true &&
        /*#__PURE__*/ _jsxs('div', {
          className: className.join(' '),
          style: style,
          ref: drawerRef,
          children: [
            /*#__PURE__*/ _jsxs('div', {
              className: 'yld-drawer-header',
              children: [
                /*#__PURE__*/ _jsx('div', {
                  children: title,
                }),
                closable &&
                  /*#__PURE__*/ _jsx(Icon, {
                    type: 'suiconguanbi',
                    onClick: close,
                  }),
              ],
            }),
            /*#__PURE__*/ _jsx('div', {
              className: 'yld-drawer-body',
              style: {
                height: footer === false ? 'calc(100% - 50px)' : 'calc(100% - 100px)',
              },
              children: children,
            }),
            footer !== false &&
              /*#__PURE__*/ _jsx('div', {
                className: 'yld-drawer-footer',
                children:
                  footer === null
                    ? /*#__PURE__*/ _jsxs(_Fragment, {
                        children: [
                          /*#__PURE__*/ _jsx(Button, {
                            type: 'primary',
                            style: {
                              width: 60,
                            },
                            onClick: ok,
                            children: '\u786E\u5B9A',
                          }),
                          /*#__PURE__*/ _jsx(Button, {
                            style: {
                              width: 60,
                            },
                            onClick: close,
                            children: '\u53D6\u6D88',
                          }),
                        ],
                      })
                    : footer,
              }),
          ],
        }),
      _visible === true &&
        /*#__PURE__*/ _jsx('div', {
          style: {
            top: top,
          },
          className: mask !== false ? 'yld-drawer-mask' : 'yld-drawer-mask-none',
          onClick: close,
        }),
    ],
  });
});
