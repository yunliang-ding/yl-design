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
import { Fragment as _Fragment } from 'react/jsx-runtime';
import { jsxs as _jsxs } from 'react/jsx-runtime';
var swipeX = false;
var position = {
  x: 0,
  y: 0,
  x1: 0,
  y1: 0,
};
export default (function (_ref) {
  var _ref$style = _ref.style,
    style = _ref$style === void 0 ? {} : _ref$style,
    _ref$pages = _ref.pages,
    pages = _ref$pages === void 0 ? [] : _ref$pages,
    effect = _ref.effect,
    _ref$currentPage = _ref.currentPage,
    currentPage = _ref$currentPage === void 0 ? 1 : _ref$currentPage,
    onChange = _ref.onChange,
    _ref$autoPlay = _ref.autoPlay,
    autoPlay = _ref$autoPlay === void 0 ? false : _ref$autoPlay,
    _ref$autoPlayTime = _ref.autoPlayTime,
    autoPlayTime = _ref$autoPlayTime === void 0 ? 3000 : _ref$autoPlayTime,
    _ref$showArrow = _ref.showArrow,
    showArrow = _ref$showArrow === void 0 ? false : _ref$showArrow,
    _ref$legend = _ref.legend,
    legend = _ref$legend === void 0 ? true : _ref$legend,
    _ref$loop = _ref.loop,
    loop = _ref$loop === void 0 ? true : _ref$loop,
    _ref$swipe = _ref.swipe,
    swipe = _ref$swipe === void 0 ? true : _ref$swipe;
  var timer;
  /** update */
  useEffect(
    function () {
      setcurrentPage(currentPage);
    },
    [currentPage],
  );
  var _useState = useState(currentPage),
    _useState2 = _slicedToArray(_useState, 2),
    _currentPage = _useState2[0],
    setcurrentPage = _useState2[1];
  var updateCurrentPage = function updateCurrentPage(page) {
    clearTimeout(timer); // clear
    var currentPage = 1;
    if (page < 1) {
      currentPage = loop ? pages.length : 1;
    } else if (page > pages.length) {
      currentPage = loop ? 1 : pages.length;
    } else {
      currentPage = page;
    }
    setcurrentPage(currentPage);
    typeof onChange === 'function' && onChange(currentPage);
  };
  var Play = function Play() {
    timer = setTimeout(function () {
      updateCurrentPage(_currentPage + 1 > pages.length ? 1 : _currentPage + 1);
    }, autoPlayTime);
  };
  useEffect(
    function () {
      autoPlay && Play();
    },
    [_currentPage],
  );
  /**
   * H5左右滑动触发
   */
  var touchstart = function touchstart(event) {
    if (!swipe) return;
    position.x = event.changedTouches[0].pageX;
    position.y = event.changedTouches[0].pageY;
    swipeX = true;
  };
  var touchmove = function touchmove(event) {
    if (!swipe) return;
    position.x1 = event.changedTouches[0].pageX;
    position.y1 = event.changedTouches[0].pageY;
    // 左右滑动
    if (swipeX && Math.abs(position.x1 - position.x) - Math.abs(position.y1 - position.y) > 0) {
      // 阻止事件冒泡
      event.stopPropagation();
      if (position.x - position.x1 > 10) {
        // 往左拖拽
        updateCurrentPage(_currentPage + 1);
        event.preventDefault();
        swipeX = false;
      }
      if (position.x1 - position.x > 10) {
        // 往右拖拽
        updateCurrentPage(_currentPage - 1);
        event.preventDefault();
        swipeX = false;
      }
    }
  };
  return /*#__PURE__*/ _jsx(_Fragment, {
    children: /*#__PURE__*/ _jsxs('div', {
      className: 'yld-carousel',
      style: style,
      onTouchStart: touchstart,
      onTouchMove: touchmove,
      children: [
        showArrow &&
          /*#__PURE__*/ _jsxs(_Fragment, {
            children: [
              /*#__PURE__*/ _jsx('div', {
                className: 'yld-carousel-before',
                onClick: function onClick() {
                  updateCurrentPage(_currentPage - 1);
                },
                children: /*#__PURE__*/ _jsx(Icon, {
                  type: 'suiconicon-jiantouzuo',
                }),
              }),
              /*#__PURE__*/ _jsx('div', {
                className: 'yld-carousel-next',
                onClick: function onClick() {
                  updateCurrentPage(_currentPage + 1);
                },
                children: /*#__PURE__*/ _jsx(Icon, {
                  type: 'suiconjiantou2',
                }),
              }),
            ],
          }),
        pages.map(function (page, index) {
          return /*#__PURE__*/ _jsx(
            'div',
            {
              className:
                _currentPage === index + 1
                  ? 'yld-carousel-page yld-carousel-page-current'
                  : 'yld-carousel-page',
              style: {
                left:
                  effect === 'fade'
                    ? 0
                    : index + 1 === _currentPage
                    ? 0
                    : 100 * (index + 1 - _currentPage) + '%',
                opacity: effect === 'fade' ? (index + 1 === _currentPage ? 1 : 0) : 1,
              },
              children: page,
            },
            index,
          );
        }),
        legend &&
          /*#__PURE__*/ _jsx('div', {
            className: 'yld-carousel-legend',
            children: /*#__PURE__*/ _jsx('div', {
              className: 'yld-carousel-legend-box',
              children: pages.map(function (page, index) {
                return /*#__PURE__*/ _jsx(
                  'div',
                  {
                    className:
                      index + 1 === _currentPage
                        ? 'yld-carousel-legend-box-item-active'
                        : 'yld-carousel-legend-box-item',
                    onClick: function onClick() {
                      updateCurrentPage(index + 1);
                    },
                  },
                  index,
                );
              }),
            }),
          }),
      ],
    }),
  });
});
