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
import { Icon } from '../../index';
import { jsx as _jsx } from 'react/jsx-runtime';
import { jsxs as _jsxs } from 'react/jsx-runtime';
import { Fragment as _Fragment } from 'react/jsx-runtime';
var iconMapping = {
  success: 'suiconmessage_SendSuccessfully',
  info: 'suiconwarning',
  warning: 'suiconinfo_warning',
  error: 'suiconcuo',
};
export default (function (_ref) {
  var message = _ref.message,
    _ref$closable = _ref.closable,
    closable = _ref$closable === void 0 ? false : _ref$closable,
    type = _ref.type,
    style = _ref.style;
  var _useState = useState(true),
    _useState2 = _slicedToArray(_useState, 2),
    open = _useState2[0],
    setopen = _useState2[1];
  return /*#__PURE__*/ _jsx(_Fragment, {
    children:
      open &&
      /*#__PURE__*/ _jsxs('div', {
        className: 'yld-alert yld-alert-'.concat(type),
        style: style,
        children: [
          /*#__PURE__*/ _jsxs('div', {
            className: 'yld-alert-message',
            children: [
              /*#__PURE__*/ _jsx(Icon, {
                type: iconMapping[type],
              }),
              /*#__PURE__*/ _jsx('span', {
                children: message,
              }),
            ],
          }),
          closable &&
            /*#__PURE__*/ _jsx(Icon, {
              type: 'suiconguanbi',
              size: 14,
              onClick: setopen.bind(null, false),
            }),
        ],
      }),
  });
});
