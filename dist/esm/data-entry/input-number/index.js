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
import { Icon } from '../../index';
import './index.less';
import { jsx as _jsx } from 'react/jsx-runtime';
import { jsxs as _jsxs } from 'react/jsx-runtime';
export default (function (_ref) {
  var _ref$value = _ref.value,
    value = _ref$value === void 0 ? '' : _ref$value,
    disabled = _ref.disabled,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? {} : _ref$style,
    placeholder = _ref.placeholder,
    maxLength = _ref.maxLength,
    onChange = _ref.onChange,
    _onBlur = _ref.onBlur,
    _onFocus = _ref.onFocus,
    onPressEnter = _ref.onPressEnter,
    _ref$step = _ref.step,
    step = _ref$step === void 0 ? 1 : _ref$step,
    min = _ref.min,
    max = _ref.max;
  var _useState = useState(value),
    _useState2 = _slicedToArray(_useState, 2),
    _value = _useState2[0],
    setvalue = _useState2[1];
  useEffect(
    function () {
      setvalue(value);
    },
    [value],
  );
  var add = function add() {
    var value = Number(_value) + Number(step);
    if (max !== undefined) {
      value <= max && updateValue(value);
    } else {
      updateValue(value);
    }
  };
  var minus = function minus() {
    var value = Number(_value) - Number(step);
    if (min !== undefined) {
      value >= min && updateValue(value);
    } else {
      updateValue(value);
    }
  };
  var updateValue = function updateValue(value) {
    setvalue(step < 1 ? Number(value).toFixed(1) : Number(value));
    typeof onChange === 'function' && onChange(step < 1 ? Number(value).toFixed(1) : Number(value));
  };
  return /*#__PURE__*/ _jsxs('div', {
    className: 'yld-input-number-wrapper',
    style: style,
    children: [
      /*#__PURE__*/ _jsx('input', {
        type: 'text',
        className: disabled ? 'yld-input-number-disabled' : 'yld-input-number',
        placeholder: placeholder,
        value: _value,
        maxLength: maxLength,
        readOnly: disabled,
        onChange: function onChange(e) {
          setvalue(e.target.value);
        },
        onBlur: function onBlur() {
          var value = Number(_value);
          if (isNaN(value)) {
            value = '';
          }
          updateValue(value);
          typeof _onBlur === 'function' && _onBlur(value);
        },
        onFocus: function onFocus(e) {
          typeof _onFocus === 'function' && _onFocus(e);
        },
        onKeyDown: function onKeyDown(e) {
          if (e.keyCode === 13) {
            typeof onPressEnter === 'function' && onPressEnter(e);
          }
        },
      }),
      !disabled &&
        /*#__PURE__*/ _jsxs('div', {
          className: 'yld-input-number-suffix',
          children: [
            /*#__PURE__*/ _jsx('div', {
              className: 'suffix-top',
              onClick: add,
              children: /*#__PURE__*/ _jsx(Icon, {
                type: 'suiconxiala1',
                size: 12,
              }),
            }),
            /*#__PURE__*/ _jsx('div', {
              className: 'suffix-bottom',
              onClick: minus,
              children: /*#__PURE__*/ _jsx(Icon, {
                type: 'suiconxialadown',
                size: 12,
              }),
            }),
          ],
        }),
    ],
  });
});
