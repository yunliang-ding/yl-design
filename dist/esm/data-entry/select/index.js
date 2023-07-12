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
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly &&
      (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })),
      keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2
      ? ownKeys(Object(source), !0).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
      : ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
  }
  return target;
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
import { Select, SelectMultiple, Option } from './components';
import 'index.less';
import { jsx as _jsx } from 'react/jsx-runtime';
var SelectWrapper = function SelectWrapper(props) {
  /**
   * @param item 解析Option
   */
  var getOptions = function getOptions(item) {
    var options = [];
    if (Object.prototype.toString.call(item) === '[object Array]') {
      options = item;
    } else if (Object.prototype.toString.call(item) === '[object Object]') {
      options.push(item);
    }
    /**
     * filter 匹配类型
     */
    return options
      .filter(function (option) {
        return option.type && option.type.nickName === 'Option';
      })
      .map(function (option) {
        return {
          key: option.key || Math.random(),
          label: option.props.children,
          value: option.props.value,
          disabled: option.props.disabled,
        };
      });
  };
  var _options = []; // 定义options
  if (props.children && props.options === undefined) {
    _options = getOptions(props.children); // 递归转换
  }

  if (props.options) {
    _options = props.options;
  }
  // 组装options
  var transfrom = function transfrom(options) {
    return Array.isArray(options)
      ? options.map(function (option) {
          return {
            key: Math.random(),
            label: typeof option === 'string' ? option : option.label,
            value: typeof option === 'string' ? option : option.value,
            disabled: typeof option === 'string' ? false : option.disabled,
          };
        })
      : [];
  };
  return props.multiple
    ? /*#__PURE__*/ _jsx(
        SelectMultiple,
        _objectSpread(
          _objectSpread({}, props),
          {},
          {
            options: transfrom(_options),
          },
        ),
      )
    : /*#__PURE__*/ _jsx(
        Select,
        _objectSpread(
          _objectSpread({}, props),
          {},
          {
            options: transfrom(_options),
          },
        ),
      );
};
SelectWrapper.Option = Option;
export default SelectWrapper;
