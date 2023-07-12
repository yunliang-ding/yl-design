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
import { jsx as _jsx } from 'react/jsx-runtime';
import { jsxs as _jsxs } from 'react/jsx-runtime';
import { Fragment as _Fragment } from 'react/jsx-runtime';
export default (function (_ref) {
  var _ref$checked = _ref.checked,
    checked = _ref$checked === void 0 ? false : _ref$checked,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _onChange = _ref.onChange,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? {} : _ref$style,
    children = _ref.children,
    _ref$name = _ref.name,
    name = _ref$name === void 0 ? '' : _ref$name;
  var _useState = useState(checked),
    _useState2 = _slicedToArray(_useState, 2),
    _checked = _useState2[0],
    setchecked = _useState2[1];
  var className = _checked ? 'yld-radio yld-radio-checked' : 'yld-radio';
  disabled && (className += ' yld-radio-disabled');
  useEffect(
    function () {
      setchecked(checked);
    },
    [checked],
  );
  return /*#__PURE__*/ _jsx(_Fragment, {
    children: /*#__PURE__*/ _jsxs('label', {
      className: 'yld-radio-wrapper',
      children: [
        /*#__PURE__*/ _jsxs('span', {
          className: className,
          children: [
            /*#__PURE__*/ _jsx('input', {
              type: 'radio',
              readOnly: disabled,
              style: style,
              name: name,
              checked: _checked,
              className: 'yld-radio-input',
              onChange: function onChange(e) {
                if (disabled) {
                  return;
                }
                setchecked(e.target.checked);
                typeof _onChange === 'function' && _onChange(e);
              },
            }),
            /*#__PURE__*/ _jsx('span', {
              className: 'yld-radio-inner',
            }),
          ],
        }),
        /*#__PURE__*/ _jsx('span', {
          children: children,
        }),
      ],
    }),
  });
});
