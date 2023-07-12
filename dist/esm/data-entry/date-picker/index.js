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
import { Select, Button, Input, Icon } from '../../index';
import dateUtil from './components/util';
import './index.less';
import { jsx as _jsx } from 'react/jsx-runtime';
import { jsxs as _jsxs } from 'react/jsx-runtime';
import { Fragment as _Fragment } from 'react/jsx-runtime';
export default (function (_ref) {
  var value = _ref.value,
    onChange = _ref.onChange,
    placeholder = _ref.placeholder,
    addonBefore = _ref.addonBefore,
    addonAfter = _ref.addonAfter,
    style = _ref.style,
    _ref$allowClear = _ref.allowClear,
    allowClear = _ref$allowClear === void 0 ? true : _ref$allowClear,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled;
  useEffect(
    function () {
      var date = value || new Date().getTime();
      setvalue(value); // update
      updateDateCalendar(date); // 更新时间
    },
    [value],
  );
  var yearList = dateUtil.getYearList(); // 获取年列表
  var monthList = dateUtil.getMonthList(); // 获取月列表
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    open = _useState2[0],
    setopen = _useState2[1];
  var _useState3 = useState(value),
    _useState4 = _slicedToArray(_useState3, 2),
    _value = _useState4[0],
    setvalue = _useState4[1];
  var _useState5 = useState(dateUtil.date.getFullYear()),
    _useState6 = _slicedToArray(_useState5, 2),
    year = _useState6[0],
    setyear = _useState6[1];
  var _useState7 = useState(dateUtil.date.getMonth() + 1),
    _useState8 = _slicedToArray(_useState7, 2),
    month = _useState8[0],
    setmonth = _useState8[1];
  var _useState9 = useState(value),
    _useState10 = _slicedToArray(_useState9, 2),
    days = _useState10[0],
    setdays = _useState10[1];
  var _useState11 = useState(dateUtil.getCalendar()),
    _useState12 = _slicedToArray(_useState11, 2),
    calendar = _useState12[0],
    setcalendar = _useState12[1];
  var renderHeader = function renderHeader() {
    return ['日', '一', '二', '三', '四', '五', '六'].map(function (item) {
      return /*#__PURE__*/ _jsx(
        'div',
        {
          className: 'yld-picker-header-item',
          children: item,
        },
        item,
      );
    });
  };
  var renderContent = function renderContent() {
    return calendar.map(function (row, index) {
      return /*#__PURE__*/ _jsx(
        'div',
        {
          className: 'yld-picker-calendar-row',
          children: row.map(function (col) {
            return /*#__PURE__*/ _jsx(
              'div',
              {
                className:
                  col.dateString === days
                    ? 'yld-picker-calendar-row-col-active'
                    : col.current
                    ? 'yld-picker-calendar-row-col-current'
                    : col.currentMonth
                    ? 'yld-picker-calendar-row-col-current-month'
                    : 'yld-picker-calendar-row-col',
                onClick: setdays.bind(null, col.dateString),
                children: /*#__PURE__*/ _jsx('div', {
                  className: 'yld-picker-calendar-inner',
                  children: col.date,
                }),
              },
              col.dateString,
            );
          }),
        },
        index,
      );
    });
  };
  var updateDateCalendar = function updateDateCalendar(date) {
    // 更新时间
    var month = dateUtil.date.getMonth() + 1;
    var day = dateUtil.date.getDate();
    month = month > 9 ? month : '0' + month; // safari 不兼容不标准的字符转日期
    day = day > 9 ? day : '0' + day; // safari 不兼容不标准的字符转日期
    dateUtil.setDate(new Date(date));
    setcalendar(dateUtil.getCalendar());
    setyear(dateUtil.date.getFullYear());
    setmonth(dateUtil.date.getMonth() + 1);
    setdays(''.concat(dateUtil.date.getFullYear(), '-').concat(month, '-').concat(day));
  };
  return /*#__PURE__*/ _jsx(_Fragment, {
    children: /*#__PURE__*/ _jsxs('div', {
      className: 'yld-date-picker',
      style: style,
      children: [
        /*#__PURE__*/ _jsx('div', {
          className: 'yld-date-picker-input',
          children: /*#__PURE__*/ _jsx(Input, {
            suffix: /*#__PURE__*/ _jsx(Icon, {
              type: 'suiconweimingmingwenjianjia_rili',
            }),
            addonBefore: addonBefore,
            disabled: disabled,
            addonAfter: addonAfter,
            placeholder: placeholder,
            value: _value,
            readOnly: true,
            allowClear: allowClear && _value,
            onAllowClear: function onAllowClear() {
              setvalue('');
              updateDateCalendar(new Date()); // 更新时间
              typeof onChange === 'function' && onChange('');
            },
            onFocus: setopen.bind(null, true),
          }),
        }),
        open &&
          /*#__PURE__*/ _jsxs(_Fragment, {
            children: [
              /*#__PURE__*/ _jsx('div', {
                className: 'yld-date-picker-layer',
                onClick: setopen.bind(null, false),
              }),
              /*#__PURE__*/ _jsxs('div', {
                className: 'yld-date-picker-body',
                children: [
                  /*#__PURE__*/ _jsx('div', {
                    className: 'yld-date-picker-body-value',
                    children: days || '请选择日期',
                  }),
                  /*#__PURE__*/ _jsxs('div', {
                    className: 'yld-date-picker-body-tools',
                    children: [
                      /*#__PURE__*/ _jsx('div', {
                        title: '\u4E0A\u4E00\u5E74',
                        className: 'picker-tools-before',
                        onClick: function onClick() {
                          updateDateCalendar(
                            dateUtil.date.getTime() -
                              (dateUtil.isLeapYear() ? 366 : 355) * 24 * 60 * 60 * 1000,
                          );
                        },
                        children: /*#__PURE__*/ _jsx(Icon, {
                          type: 'suiconicon-jiantouzuo',
                        }),
                      }),
                      /*#__PURE__*/ _jsx('div', {
                        title: '\u4E0A\u4E2A\u6708',
                        className: 'picker-tools-before picker-tools-before-month',
                        onClick: function onClick() {
                          updateDateCalendar(
                            dateUtil.date.getTime() -
                              dateUtil.getDateNumberByMonth(dateUtil.date.getMonth() + 1) *
                                24 *
                                60 *
                                60 *
                                1000,
                          );
                        },
                        children: /*#__PURE__*/ _jsx(Icon, {
                          type: 'suiconxiangzuoshouqi',
                        }),
                      }),
                      /*#__PURE__*/ _jsxs('div', {
                        className: 'picker-tools-date',
                        children: [
                          /*#__PURE__*/ _jsx(Select, {
                            style: {
                              border: 0,
                            },
                            value: year,
                            options: yearList,
                            onChange: function onChange(e) {
                              updateDateCalendar(
                                ''
                                  .concat(e, '-')
                                  .concat(month, '-')
                                  .concat(dateUtil.date.getDate()),
                              );
                            },
                          }),
                          /*#__PURE__*/ _jsx(Select, {
                            style: {
                              border: 0,
                              width: 80,
                            },
                            value: month,
                            options: monthList,
                            onChange: function onChange(e) {
                              updateDateCalendar(
                                ''.concat(year, '-').concat(e, '-').concat(dateUtil.date.getDate()),
                              );
                            },
                          }),
                        ],
                      }),
                      /*#__PURE__*/ _jsx('div', {
                        title: '\u4E0B\u4E2A\u6708',
                        className: 'picker-tools-next picker-tools-next-month',
                        onClick: function onClick() {
                          updateDateCalendar(
                            dateUtil.date.getTime() +
                              dateUtil.getDateNumberByMonth(dateUtil.date.getMonth() + 1) *
                                24 *
                                60 *
                                60 *
                                1000,
                          );
                        },
                        children: /*#__PURE__*/ _jsx(Icon, {
                          type: 'suiconzuocedakai',
                        }),
                      }),
                      /*#__PURE__*/ _jsx('div', {
                        title: '\u4E0B\u4E00\u5E74',
                        className: 'picker-tools-next',
                        onClick: function onClick() {
                          updateDateCalendar(
                            dateUtil.date.getTime() +
                              (dateUtil.isLeapYear() ? 366 : 355) * 24 * 60 * 60 * 1000,
                          );
                        },
                        children: /*#__PURE__*/ _jsx(Icon, {
                          type: 'suiconjiantou2',
                        }),
                      }),
                    ],
                  }),
                  /*#__PURE__*/ _jsx('div', {
                    className: 'yld-date-picker-body-header',
                    children: renderHeader(),
                  }),
                  /*#__PURE__*/ _jsx('div', {
                    className: 'yld-date-picker-body-calendar',
                    children: renderContent(),
                  }),
                  /*#__PURE__*/ _jsx('div', {
                    className: 'yld-date-picker-body-footer',
                    children: /*#__PURE__*/ _jsx(Button, {
                      type: 'primary',
                      style: {
                        height: 30,
                        width: 60,
                      },
                      onClick: function onClick() {
                        setopen(false);
                        setvalue(days);
                        typeof onChange === 'function' && onChange(days);
                      },
                      children: '\u786E\u5B9A',
                    }),
                  }),
                ],
              }),
            ],
          }),
      ],
    }),
  });
});
