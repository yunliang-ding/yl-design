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
import { useState, useEffect, useRef } from 'react';
import { Icon, Input } from '../../index';
import './index.less';
import { jsx as _jsx } from 'react/jsx-runtime';
import { jsxs as _jsxs } from 'react/jsx-runtime';
import { Fragment as _Fragment } from 'react/jsx-runtime';
export default (function (_ref) {
  var value = _ref.value,
    _ref$allowClear = _ref.allowClear,
    allowClear = _ref$allowClear === void 0 ? true : _ref$allowClear,
    placeholder = _ref.placeholder,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? {} : _ref$style,
    dropdownClassName = _ref.dropdownClassName,
    _ref$dropdownStyle = _ref.dropdownStyle,
    dropdownStyle = _ref$dropdownStyle === void 0 ? {} : _ref$dropdownStyle,
    onChange = _ref.onChange,
    _ref$open = _ref.open,
    open = _ref$open === void 0 ? false : _ref$open,
    addonBefore = _ref.addonBefore,
    addonAfter = _ref.addonAfter;
  var timeList = [
    Object.keys(new Array(24).fill('')).map(function (item) {
      return {
        key: Math.random(),
        label: item.padStart(2, 0),
        value: item.padStart(2, 0),
      };
    }),
    Object.keys(new Array(60).fill('')).map(function (item) {
      return {
        key: Math.random(),
        label: item.padStart(2, 0),
        value: item.padStart(2, 0),
      };
    }),
    Object.keys(new Array(60).fill('')).map(function (item) {
      return {
        key: Math.random(),
        label: item.padStart(2, 0),
        value: item.padStart(2, 0),
      };
    }),
  ]; // 日期选择
  /**
   * value Change
   */
  useEffect(
    function () {
      settimes(value ? value.split(':') : []);
      setvalue(value ? value.split(':') : []);
    },
    [value],
  );
  /**
   * 数据转化 转为2维数组渲染
   */
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    times = _useState2[0],
    settimes = _useState2[1]; // 最终选中的指
  var _useState3 = useState(value ? value.split(':') : []),
    _useState4 = _slicedToArray(_useState3, 2),
    _value = _useState4[0],
    setvalue = _useState4[1]; // 内部存选中值容器
  var _useState5 = useState(open),
    _useState6 = _slicedToArray(_useState5, 2),
    _open = _useState6[0],
    setopen = _useState6[1];
  /**
   * 内部状态
   */
  var className = _open ? 'yld-time-picker yld-time-picker-open' : 'yld-time-picker';
  disabled && (className += ' yld-time-picker-disabled');
  var dropDownClassName = dropdownClassName
    ? dropdownClassName + ' yld-time-picker-dropdown'
    : 'yld-time-picker-dropdown';
  /**
   * JSX
   */
  var dropdownColHourRef = useRef();
  var dropdownColMinuteRef = useRef();
  var dropdownColSecondRef = useRef();
  useEffect(
    function () {
      if (dropdownColHourRef && dropdownColHourRef.current) {
        dropdownColHourRef.current.scrollTop = !isNaN(Number(_value[0]))
          ? 30 * Number(_value[0])
          : 0;
        dropdownColMinuteRef.current.scrollTop = !isNaN(Number(_value[1]))
          ? 30 * Number(_value[1])
          : 0;
        dropdownColSecondRef.current.scrollTop = !isNaN(Number(_value[2]))
          ? 30 * Number(_value[2])
          : 0;
      }
    },
    [_open, _value],
  );
  return /*#__PURE__*/ _jsxs('div', {
    className: className,
    style: style,
    children: [
      /*#__PURE__*/ _jsx(Input, {
        suffix: /*#__PURE__*/ _jsx(Icon, {
          type: 'suicontime',
        }),
        addonBefore: addonBefore,
        disabled: disabled,
        addonAfter: addonAfter,
        placeholder: placeholder,
        value: times.join(':'),
        readOnly: true,
        allowClear: allowClear && times.length > 0,
        onAllowClear: function onAllowClear() {
          setvalue([]);
          typeof onChange === 'function' && onChange('');
        },
        onFocus: setopen.bind(null, true),
      }),
      _open &&
        /*#__PURE__*/ _jsxs(_Fragment, {
          children: [
            /*#__PURE__*/ _jsx('div', {
              className: 'yld-time-picker-mask',
              onClick: function onClick() {
                setopen(false);
                if (_value.length === timeList.length) {
                  // 选择完毕
                  settimes(_value);
                  typeof onChange === 'function' && onChange(_value.join(':'));
                }
              },
            }),
            /*#__PURE__*/ _jsxs('div', {
              style: dropdownStyle,
              className: dropDownClassName,
              children: [
                /*#__PURE__*/ _jsx('div', {
                  className: 'yld-time-picker-dropdown-value',
                  children: _value.length === 0 ? placeholder : _value.join(':'),
                }),
                /*#__PURE__*/ _jsx('div', {
                  className: 'yld-time-picker-dropdown-box',
                  children: timeList.map(function (item, index) {
                    return /*#__PURE__*/ _jsx(
                      'div',
                      {
                        className: 'yld-time-picker-dropdown-col',
                        ref:
                          index === 0
                            ? dropdownColHourRef
                            : index === 1
                            ? dropdownColMinuteRef
                            : dropdownColSecondRef,
                        style: {
                          // transform: `translateY(${-)}px)`
                        },
                        children: item.map(function (option, _index) {
                          var selelcted = false;
                          if (_value[index] === undefined) {
                            selelcted = _index === 0;
                          } else {
                            selelcted = _value[index] === option.value;
                          }
                          var className = selelcted
                            ? 'yld-time-picker-dropdown-menu yld-time-picker-dropdown-menu-selected'
                            : 'yld-time-picker-dropdown-menu';
                          option.disabled &&
                            (className += ' yld-time-picker-dropdown-menu-disabled');
                          return /*#__PURE__*/ _jsx(
                            'div',
                            {
                              className: className,
                              onClick: function onClick() {
                                if (option.disabled) return;
                                for (var i = 0; i < timeList.length; i++) {
                                  if (i === index) {
                                    _value[i] = option.value;
                                  } else if (_value[i] === undefined) {
                                    _value[i] = '00';
                                  }
                                }
                                setvalue(_toConsumableArray(_value));
                              },
                              children: option.label,
                            },
                            option.key,
                          );
                        }),
                      },
                      index,
                    );
                  }),
                }),
              ],
            }),
          ],
        }),
    ],
  });
});
