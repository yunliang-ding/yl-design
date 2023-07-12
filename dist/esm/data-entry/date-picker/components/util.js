function _typeof(obj) {
  '@babel/helpers - typeof';
  return (
    (_typeof =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (obj) {
            return typeof obj;
          }
        : function (obj) {
            return obj &&
              'function' == typeof Symbol &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? 'symbol'
              : typeof obj;
          }),
    _typeof(obj)
  );
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ('value' in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, 'prototype', { writable: false });
  return Constructor;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, 'string');
  return _typeof(key) === 'symbol' ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== 'object' || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || 'default');
    if (_typeof(res) !== 'object') return res;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (hint === 'string' ? String : Number)(input);
}
import dayjs from 'dayjs';
var DateUtil = /*#__PURE__*/ _createClass(function DateUtil(_date, format) {
  var _this = this;
  _classCallCheck(this, DateUtil);
  _defineProperty(this, 'date', void 0);
  _defineProperty(this, 'format', void 0);
  _defineProperty(this, 'setDate', function (date) {
    _this.date = date;
  });
  _defineProperty(this, 'isLeapYear', function () {
    // 判断是否是闰年
    var year = _this.date.getFullYear();
    return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
  });
  _defineProperty(this, 'getDateNumberByMonth', function (month) {
    // 获取这个月份的天数
    var day = 30;
    month = month;
    switch (month) {
      case 1:
        day = 31;
      case 3:
        day = 31;
      case 4:
        day = 31;
      case 7:
        day = 31;
      case 8:
        day = 31;
      case 10:
        day = 31;
      case 12:
        day = 31;
        break;
      case 2:
        day = _this.isLeapYear() ? 29 : 28;
        break;
    }
    return day;
  });
  _defineProperty(this, 'getCalendar', function () {
    // 获取该月份的日历
    var year = _this.date.getFullYear();
    var month = _this.date.getMonth() + 1;
    month = month > 9 ? month : '0' + month; // safari 不兼容不标准的字符转日期
    var totalDay = _this.getDateNumberByMonth(month); // 该月份总天数
    var frist = ''.concat(year, '-').concat(month, '-01');
    var last = ''.concat(year, '-').concat(month, '-').concat(totalDay);
    var fristDate = new Date(frist); // 本月第一天
    var lastDate = new Date(last); // 本月最后一天
    var week = fristDate.getDay(); // 本月1号是周几
    // 获取这个月1号是周几再决定补几位
    var before = Array.from(new Array(week).keys())
      .map(function (item, index) {
        var date = new Date(fristDate.getTime() - (index + 1) * 24 * 60 * 60 * 1000);
        return {
          date: date.getDate(),
          dateString: dayjs(date.toLocaleDateString()).format(_this.format),
          currentMonth: false,
          current: false,
        };
      })
      .reverse();
    var current = Array.from(new Array(_this.getDateNumberByMonth(month)).keys()).map(function (
      item,
      index,
    ) {
      var date = new Date(fristDate.getTime() + index * 24 * 60 * 60 * 1000);
      return {
        date: date.getDate(),
        dateString: dayjs(date.toLocaleDateString()).format(_this.format),
        currentMonth: true,
        current: date.toLocaleDateString() === new Date().toLocaleDateString(),
      };
    });
    // 后补齐
    var after = Array.from(new Array(42 - before.length - current.length).keys()).map(function (
      item,
      index,
    ) {
      var date = new Date(lastDate.getTime() + (index + 1) * 24 * 60 * 60 * 1000);
      return {
        date: date.getDate(),
        dateString: dayjs(date.toLocaleDateString()).format(_this.format),
        currentMonth: false,
        current: false,
      };
    });
    var calendar = before.concat(current).concat(after);
    return [
      calendar.slice(0, 7),
      calendar.slice(7, 14),
      calendar.slice(14, 21),
      calendar.slice(21, 28),
      calendar.slice(28, 35),
      calendar.slice(35, 42),
    ];
  });
  _defineProperty(this, 'getDateString', function (date) {
    return dayjs(date.toLocaleDateString()).format(_this.format);
  });
  _defineProperty(this, 'getYearList', function () {
    // -40 < 当前年份 < 20
    var year = new Date().getFullYear();
    var arr = [];
    for (var i = year - 40; i < year + 21; i++) {
      arr.push({
        label: i,
        value: i,
      });
    }
    return arr;
  });
  _defineProperty(this, 'getMonthList', function () {
    return Array.from(new Array(12).keys()).map(function (month) {
      return {
        label: month + 1,
        value: month + 1,
      };
    });
  });
  this.date = _date;
  this.format = format;
});
var dateUtil = new DateUtil(new Date(), 'YYYY-MM-DD');
export default dateUtil;
