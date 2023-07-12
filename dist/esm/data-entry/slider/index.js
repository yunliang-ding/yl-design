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
import { Tooltip } from '../../index';
import './index.less';
import { jsx as _jsx } from 'react/jsx-runtime';
import { jsxs as _jsxs } from 'react/jsx-runtime';
import { Fragment as _Fragment } from 'react/jsx-runtime';
export default (function (_ref) {
  var value = _ref.value,
    _ref$min = _ref.min,
    min = _ref$min === void 0 ? 0 : _ref$min,
    _ref$max = _ref.max,
    max = _ref$max === void 0 ? 100 : _ref$max,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    onChange = _ref.onChange,
    style = _ref.style,
    _ref$tooltipVisible = _ref.tooltipVisible,
    tooltipVisible = _ref$tooltipVisible === void 0 ? null : _ref$tooltipVisible;
  var noop = function noop() {};
  useEffect(
    function () {
      if (value < min) {
        setvalue(min);
      } else if (value > max) {
        setvalue(max);
      } else {
        setvalue(value);
      }
    },
    [value],
  );
  var _useState = useState(value),
    _useState2 = _slicedToArray(_useState, 2),
    _value = _useState2[0],
    setvalue = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    status = _useState4[0],
    setstatus = _useState4[1];
  var _useState5 = useState({}),
    _useState6 = _slicedToArray(_useState5, 2),
    position = _useState6[0],
    setposition = _useState6[1];
  var _useState7 = useState(1),
    _useState8 = _slicedToArray(_useState7, 2),
    coefficient = _useState8[0],
    setCoefficient = _useState8[1]; // 系数 1px对应的value
  var sliderRailRef = useRef();
  var sliderHandleRef = useRef();
  useEffect(
    function () {
      setposition(sliderHandleRef.current.getBoundingClientRect());
      setCoefficient(
        Number(
          100 / (sliderRailRef.current.getBoundingClientRect().width || (style && style.width)),
        ).toFixed(2),
      );
    },
    [_value],
  );
  return /*#__PURE__*/ _jsx(_Fragment, {
    children: /*#__PURE__*/ _jsxs('div', {
      ref: sliderRailRef,
      className: disabled ? 'yld-slider yld-slider-disabled' : 'yld-slider',
      style: style,
      onClick: function onClick(_ref2) {
        var pageX = _ref2.pageX;
        if (disabled) return;
        var _sliderHandleRef$curr = sliderHandleRef.current.getBoundingClientRect(),
          x = _sliderHandleRef$curr.x;
        var __value = Number(_value) + Number((pageX - x) * coefficient);
        if (__value >= min && __value <= max) {
          setvalue(parseInt(__value));
          var number = Math.round(__value);
          typeof onChange === 'function' && onChange(parseInt(number));
        }
      },
      children: [
        /*#__PURE__*/ _jsx('div', {
          className: 'yld-slider-rail',
        }),
        /*#__PURE__*/ _jsx('div', {
          className: 'yld-slider-track',
          style: {
            left: '0%',
            right: 'auto',
            width: _value + '%',
          },
        }),
        /*#__PURE__*/ _jsx('div', {
          className: 'yld-slider-step',
        }),
        tooltipVisible === null
          ? /*#__PURE__*/ _jsx('div', {
              className: 'yld-slider-handle',
              ref: sliderHandleRef,
              style: {
                left: _value + '%',
                right: 'auto',
                transform: 'translateX(-50%)',
              },
              onMouseDown: disabled ? noop : setstatus.bind(null, true),
            })
          : /*#__PURE__*/ _jsx(Tooltip, {
              title: _value,
              visible: tooltipVisible,
              theme: 'dark',
              children: /*#__PURE__*/ _jsx('div', {
                className: 'yld-slider-handle',
                ref: sliderHandleRef,
                style: {
                  left: _value + '%',
                  right: 'auto',
                  transform: 'translateX(-50%)',
                },
                onMouseDown: disabled ? noop : setstatus.bind(null, true),
              }),
            }),
        status &&
          /*#__PURE__*/ _jsx('div', {
            className: 'yld-slider-mark',
            onMouseUp: function onMouseUp() {
              if (disabled) return;
              setstatus(false);
              var number = Math.round(_value);
              typeof onChange === 'function' && onChange(parseInt(number));
            },
            onMouseMove: function onMouseMove(_ref3) {
              var pageX = _ref3.pageX;
              if (disabled) return;
              if (status) {
                var __value = Number(_value) + Number((pageX - position.x) * coefficient);
                if (__value >= min && __value <= max) {
                  setvalue(parseInt(__value));
                }
              }
            },
          }),
      ],
    }),
  });
});
