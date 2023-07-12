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
import { useState } from 'react';
import { Icon, Checkbox } from '../../../index';
import { jsx as _jsx } from 'react/jsx-runtime';
import { Fragment as _Fragment } from 'react/jsx-runtime';
import { jsxs as _jsxs } from 'react/jsx-runtime';
export default (function (_ref) {
  var _ref$treeData = _ref.treeData,
    treeData = _ref$treeData === void 0 ? [] : _ref$treeData,
    expandedKeys = _ref.expandedKeys,
    _ref$checkable = _ref.checkable,
    checkable = _ref$checkable === void 0 ? false : _ref$checkable,
    checkedKeys = _ref.checkedKeys,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    onCheck = _ref.onCheck,
    onExpand = _ref.onExpand,
    onSelected = _ref.onSelected,
    style = _ref.style;
  var _useState = useState(expandedKeys || []),
    _useState2 = _slicedToArray(_useState, 2),
    _expandedKeys = _useState2[0],
    setexpandedKeys = _useState2[1];
  var _useState3 = useState(checkedKeys || []),
    _useState4 = _slicedToArray(_useState3, 2),
    _checkedKeys = _useState4[0],
    setcheckedKeys = _useState4[1];
  var _useState5 = useState(''),
    _useState6 = _slicedToArray(_useState5, 2),
    _selectedKeys = _useState6[0],
    setselectedKeys = _useState6[1];
  var renderTree = function renderTree(treeData, paddingLeft) {
    return treeData.map(function (item) {
      var className = ['yld-tree-node'];
      /**
       * className
       */
      if (item.disabled || disabled) {
        className.push('yld-tree-node-disabled');
      }
      /**
       * labelClassName
       */
      var labelClassName = ['yld-tree-node-label'];
      if (_expandedKeys.includes(item.key)) {
        labelClassName.push('yld-tree-node-label-open');
      }
      if (item.children) {
        labelClassName.push('yld-tree-node-parent');
      }
      return /*#__PURE__*/ _jsxs(
        'div',
        {
          className: className.join(' '),
          children: [
            /*#__PURE__*/ _jsxs('div', {
              className: labelClassName.join(' '),
              style: {
                paddingLeft: paddingLeft,
              },
              children: [
                item.children &&
                  /*#__PURE__*/ _jsx(Icon, {
                    type: 'suiconxialadown',
                    onClick: function onClick(e) {
                      if (item.disabled || disabled) return;
                      e.stopPropagation(); // 阻止冒泡
                      if (_expandedKeys.includes(item.key)) {
                        _expandedKeys.splice(
                          _expandedKeys.findIndex(function (key) {
                            return key === item.key;
                          }),
                          1,
                        ); // 删除
                      } else {
                        _expandedKeys.push(item.key);
                      }
                      setexpandedKeys(_toConsumableArray(_expandedKeys));
                      typeof onExpand === 'function' && onExpand(_expandedKeys);
                    },
                  }),
                /*#__PURE__*/ _jsx('span', {
                  className: 'yld-tree-node-label-left',
                  title: item.label,
                  children: checkable
                    ? /*#__PURE__*/ _jsx(_Fragment, {
                        children: /*#__PURE__*/ _jsx(Checkbox, {
                          disabled: item.disabled || disabled,
                          checked: _checkedKeys.includes(item.key),
                          onChange: function onChange() {
                            var findIndex = _checkedKeys.findIndex(function (key) {
                              return key === item.key;
                            });
                            if (findIndex > -1) {
                              _checkedKeys.splice(findIndex, 1);
                            } else {
                              _checkedKeys.push(item.key);
                            }
                            setcheckedKeys(_toConsumableArray(_checkedKeys));
                            typeof onCheck === 'function' && onCheck(_checkedKeys);
                          },
                          children: /*#__PURE__*/ _jsx('span', {
                            className: 'yld-tree-node-label-left-text',
                            children: item.label,
                          }),
                        }),
                      })
                    : /*#__PURE__*/ _jsx('span', {
                        className:
                          _selectedKeys !== item.key
                            ? 'yld-tree-node-label-left-text'
                            : 'yld-tree-node-label-left-text-active',
                        onClick: function onClick() {
                          if (item.disabled || disabled) return;
                          setselectedKeys(item.key);
                          typeof onSelected === 'function' && onSelected(item.key);
                        },
                        children: item.label,
                      }),
                }),
              ],
            }),
            item.children &&
              /*#__PURE__*/ _jsx('div', {
                className: !_expandedKeys.includes(item.key) ? 'yld-tree-node-hidden' : '',
                children: renderTree(item.children, paddingLeft + 34),
              }),
          ],
        },
        item.key,
      );
    });
  };
  return /*#__PURE__*/ _jsx('div', {
    className: 'yld-tree',
    style: style,
    children: renderTree(treeData, 10),
  });
});
