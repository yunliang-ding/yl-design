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
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
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
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
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
import { useState, useEffect } from 'react';
import { Icon, Empty } from '../../index';
import './index.less';
import { jsx as _jsx } from 'react/jsx-runtime';
import { jsxs as _jsxs } from 'react/jsx-runtime';
import { Fragment as _Fragment } from 'react/jsx-runtime';
export default (function (_ref) {
  var options = _ref.options,
    value = _ref.value,
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
    fieldNames = _ref.fieldNames;
  var optionsTransfrom = function optionsTransfrom() {
    // 自定义属性转换
    if (_typeof(fieldNames) !== 'object') {
      return;
    }
    var loop = function loop(options) {
      options.forEach(function (option) {
        option.key = Math.random();
        option.label = fieldNames.label ? option[fieldNames.label] : option.label;
        option.value = fieldNames.value ? option[fieldNames.value] : option.value;
        option.children = fieldNames.children ? option[fieldNames.children] : option.children;
        if (option.children) {
          loop(option.children);
        }
      });
    };
    loop(options); // 开始转换
  };

  var transfrom = function transfrom(options, values) {
    // 数组转为对象数组
    var arr = [];
    var option = options;
    values.map(function (value, index) {
      var item = option.find(function (item) {
        return item.value === value;
      });
      if (item !== undefined) {
        arr.push(item);
        updateList(option, index);
        option = item.children || []; // 继续查找
      }
    });

    return arr;
  };
  /**
   * value Change
   */
  useEffect(
    function () {
      optionsTransfrom(); // 自定义属性转换
      var values = transfrom(options, value || []).filter(function (item) {
        return item !== undefined;
      });
      setselected(values); // 回显
      setvalue(values); // 回显
    },
    [value],
  );
  var updateList = function updateList(options, index) {
    // 更新存储的options容器
    list[index] = options;
    setlist(_toConsumableArray(list.slice(0, index + 1))); // clear 后面的数组
  };
  /**
   * 数据转化 转为2维数组渲染
   */
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    list = _useState2[0],
    setlist = _useState2[1]; // 存储options容器
  var _useState3 = useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    _value = _useState4[0],
    setvalue = _useState4[1]; // 内部存选中值容器
  var _useState5 = useState([]),
    _useState6 = _slicedToArray(_useState5, 2),
    selected = _useState6[0],
    setselected = _useState6[1]; // 最终选中的指
  var _useState7 = useState(open),
    _useState8 = _slicedToArray(_useState7, 2),
    _open = _useState8[0],
    setopen = _useState8[1];
  /**
   * 内部状态
   */
  var className = _open ? 'yld-cascader yld-cascader-open' : 'yld-cascader';
  disabled && (className += ' yld-cascader-disabled');
  var dropDownClassName = dropdownClassName
    ? dropdownClassName + ' yld-cascader-dropdown'
    : 'yld-cascader-dropdown';
  /**
   * _open Change
   */
  useEffect(
    function () {
      if (_open) {
        // 设置选中值
        var values = transfrom(
          options,
          selected.map(function (item) {
            return item.value;
          }),
        ).filter(function (item) {
          return item !== undefined;
        });
        setselected(values); // 回显
        setvalue(values); // 回显
      } else {
        // clear
        setvalue([]); // clear
        updateList(options, 0); // clear
      }
    },
    [_open],
  );
  /**
   * 显示的文案
   */
  var label = selected
    .map(function (item) {
      return item.label;
    })
    .join('/');
  /**
   * JSX
   */
  return /*#__PURE__*/ _jsxs('div', {
    className: className,
    style: style,
    children: [
      /*#__PURE__*/ _jsxs('div', {
        className: 'yld-cascader-selection',
        onClick: function onClick() {
          if (disabled) return;
          setopen(!_open);
        },
        children: [
          /*#__PURE__*/ _jsx('div', {
            className: 'yld-cascader-selection-selected-value',
            title: label,
            children:
              selected.length === 0
                ? /*#__PURE__*/ _jsx('span', {
                    style: {
                      color: '#aaa',
                    },
                    children: placeholder,
                  })
                : label,
          }),
          /*#__PURE__*/ _jsx(Icon, {
            type: 'suiconxialadown',
          }),
          !disabled &&
            allowClear &&
            selected.length > 0 &&
            /*#__PURE__*/ _jsx(Icon, {
              type: 'suiconcuo',
              onClick: function onClick(e) {
                e.stopPropagation(); // 阻止冒泡
                setvalue([]); // 还原
                updateList(options, 0); // 还原
                setselected([]); // 还原
                typeof onChange === 'function' && onChange([], null);
              },
            }),
        ],
      }),
      _open &&
        /*#__PURE__*/ _jsxs(_Fragment, {
          children: [
            /*#__PURE__*/ _jsx('div', {
              className: 'yld-cascader-mask',
              onClick: setopen.bind(null, false),
            }),
            /*#__PURE__*/ _jsx('div', {
              style: dropdownStyle,
              className: dropDownClassName,
              children:
                list.length > 0
                  ? list.map(function (item, index) {
                      return /*#__PURE__*/ _jsx(
                        'div',
                        {
                          className: 'yld-cascader-dropdown-col',
                          children: item.map(function (option) {
                            var className = _value.some(function (item) {
                              return item.value === option.value;
                            })
                              ? 'yld-cascader-dropdown-menu yld-cascader-dropdown-menu-selected'
                              : 'yld-cascader-dropdown-menu';
                            option.disabled &&
                              (className += ' yld-cascader-dropdown-menu-disabled');
                            return /*#__PURE__*/ _jsxs(
                              'div',
                              {
                                className: className,
                                onClick: function onClick() {
                                  if (option.disabled) return;
                                  _value[index] = option;
                                  if (option.children) {
                                    setvalue(_toConsumableArray(_value.slice(0, index + 1))); // clear
                                    updateList(option.children, index + 1);
                                  } else {
                                    setopen(false);
                                    setselected(_toConsumableArray(_value)); // 最终选择的值simple deep解除依赖
                                    typeof onChange === 'function' &&
                                      onChange(
                                        _value.map(function (item) {
                                          return item.value;
                                        }),
                                        option,
                                      );
                                  }
                                },
                                children: [
                                  option.label,
                                  option.children &&
                                    /*#__PURE__*/ _jsx(Icon, {
                                      type: 'suiconjiantou2',
                                      size: 14,
                                    }),
                                ],
                              },
                              option.key,
                            );
                          }),
                        },
                        index,
                      );
                    })
                  : /*#__PURE__*/ _jsx(Empty, {
                      label: '\u6682\u65E0\u6570\u636E',
                    }),
            }),
          ],
        }),
    ],
  });
});
