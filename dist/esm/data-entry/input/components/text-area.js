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
export default (function (_ref) {
  var _ref$value = _ref.value,
    value = _ref$value === void 0 ? '' : _ref$value,
    addonBefore = _ref.addonBefore,
    addonAfter = _ref.addonAfter,
    disabled = _ref.disabled,
    placeholder = _ref.placeholder,
    maxLength = _ref.maxLength,
    _onChange = _ref.onChange,
    _onBlur = _ref.onBlur,
    _onFocus = _ref.onFocus,
    onPressEnter = _ref.onPressEnter;
  var _useState = useState(value),
    _useState2 = _slicedToArray(_useState, 2),
    _value = _useState2[0],
    setvalue = _useState2[1];
  var style = {};
  addonBefore && ((style.borderTopLeftRadius = 0), (style.borderTopRightRadius = 0));
  addonAfter && ((style.borderBottomLeftRadius = 0), (style.borderBottomRightRadius = 0));
  useEffect(
    function () {
      setvalue(value);
    },
    [value],
  );
  return /*#__PURE__*/ _jsx('textarea', {
    readOnly: disabled,
    className: disabled ? 'yld-textarea-disabled' : 'yld-textarea',
    placeholder: placeholder,
    maxLength: maxLength,
    value: _value,
    style: style,
    onChange: function onChange(e) {
      setvalue(e.target.value);
      typeof _onChange === 'function' && _onChange(e);
    },
    onBlur: function onBlur(e) {
      typeof _onBlur === 'function' && _onBlur(e);
    },
    onFocus: function onFocus(e) {
      typeof _onFocus === 'function' && _onFocus(e);
    },
    onKeyDown: function onKeyDown(e) {
      if (e.keyCode === 13) {
        typeof onPressEnter === 'function' && onPressEnter(e);
      }
    },
    children: _value,
  });
});
