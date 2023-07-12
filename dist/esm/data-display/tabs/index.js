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
import { useState, useRef, useEffect } from 'react';
import { Icon } from '../../index';
import './index.less';
import { jsx as _jsx } from 'react/jsx-runtime';
import { jsxs as _jsxs } from 'react/jsx-runtime';
import { Fragment as _Fragment } from 'react/jsx-runtime';
export default (function (_ref) {
  var style = _ref.style,
    closable = _ref.closable,
    data = _ref.data,
    activeKey = _ref.activeKey,
    _onClick = _ref.onClick,
    onRemove = _ref.onRemove,
    _ref$tigger = _ref.tigger,
    tigger = _ref$tigger === void 0 ? 'click' : _ref$tigger;
  useEffect(
    function () {
      if (activeKey !== undefined) {
        var index = data.findIndex(function (item) {
          return item.key === activeKey;
        });
        setindex(index);
      }
    },
    [activeKey],
  );
  var _useState = useState(activeKey || 0),
    _useState2 = _slicedToArray(_useState, 2),
    _index = _useState2[0],
    setindex = _useState2[1];
  var _useState3 = useState(Array.isArray(data) ? data : []),
    _useState4 = _slicedToArray(_useState3, 2),
    _data = _useState4[0],
    setdata = _useState4[1];
  var className = ['yld-tabs-header'];
  var tabsRef = useRef();
  var borderRef = useRef();
  var activeItemRef = useRef();
  /**
   * 调整下划线位置
   */
  useEffect(
    function () {
      if (activeItemRef.current) {
        borderRef.current.style.width = activeItemRef.current.getBoundingClientRect().width + 'px';
        borderRef.current.style.left =
          activeItemRef.current.getBoundingClientRect().left -
          tabsRef.current.getBoundingClientRect().left +
          'px';
      }
    },
    [_index],
  );
  return /*#__PURE__*/ _jsx(_Fragment, {
    children: /*#__PURE__*/ _jsxs('div', {
      className: 'yld-tabs',
      style: style,
      ref: tabsRef,
      children: [
        /*#__PURE__*/ _jsxs('div', {
          className: className.join(' '),
          children: [
            _data.map(function (tab, index) {
              return /*#__PURE__*/ _jsxs(
                'div',
                {
                  ref: _index === index ? activeItemRef : null,
                  className:
                    _index === index ? 'yld-tabs-header-item-active' : 'yld-tabs-header-item',
                  onClick: function onClick() {
                    if (tigger === 'click') {
                      setindex(index);
                      typeof _onClick === 'function' && _onClick(tab);
                    }
                  },
                  onMouseOver: function onMouseOver() {
                    if (tigger === 'hover') {
                      setindex(index);
                      typeof _onClick === 'function' && _onClick(tab);
                    }
                  },
                  children: [
                    tab.label,
                    closable &&
                      /*#__PURE__*/ _jsx(Icon, {
                        type: 'suiconguanbi',
                        size: 13,
                        onClick: function onClick(e) {
                          e.stopPropagation(); // 阻止往上冒泡
                          _data.splice(index, 1);
                          setdata(_toConsumableArray(_data));
                          setindex(0);
                          typeof onRemove === 'function' && onRemove(tab);
                        },
                      }),
                  ],
                },
                tab.key,
              );
            }),
            _data.length > 0 &&
              /*#__PURE__*/ _jsxs(_Fragment, {
                children: [
                  /*#__PURE__*/ _jsx('div', {
                    className: 'yld-tabs-header-border',
                  }),
                  /*#__PURE__*/ _jsx('div', {
                    className: 'yld-tabs-item-active-border',
                    ref: borderRef,
                  }),
                ],
              }),
          ],
        }),
        /*#__PURE__*/ _jsx('div', {
          className: 'yld-tabs-content',
          children:
            _data &&
            _data.map(function (tab, index) {
              return /*#__PURE__*/ _jsx(
                'div',
                {
                  className: 'yld-tabs-content-item',
                  style: {
                    left: (index - _index) * 100 + '%',
                  },
                  children: tab.content,
                },
                tab.key,
              );
            }),
        }),
      ],
    }),
  });
});
