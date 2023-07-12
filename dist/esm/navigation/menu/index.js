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
import { MenuVerical, MenuHorizontal, Item, SubMenu } from './components';
import './index.less';
import { jsx as _jsx } from 'react/jsx-runtime';
var Menu = function Menu(props) {
  var loop = function loop(item) {
    var childrens = [];
    if (Object.prototype.toString.call(item) === '[object Array]') {
      childrens = item;
    } else if (Object.prototype.toString.call(item) === '[object Object]') {
      childrens.push(item);
    }
    return (
      childrens &&
      childrens
        .filter(function (children) {
          return children.type && ['SubMenu', 'Item'].indexOf(children.type.nickName) > -1;
        })
        .map(function (children) {
          var obj = {
            key: children.key || Math.random(),
            icon: children.props.icon,
            disabled: children.props.disabled,
            label:
              children.type.nickName === 'SubMenu' ? children.props.title : children.props.children,
          };
          if (children.type.nickName === 'SubMenu') {
            // 子菜单
            obj.children = loop(children.props.children);
          }
          return obj;
        })
    );
  };
  var menus = []; // 定义menus
  if (props.children && props.menus === undefined) {
    menus = loop(props.children); // 递归转换
  }

  if (props.menus) {
    menus = props.menus;
  }
  return props.mode === 'horizontal'
    ? /*#__PURE__*/ _jsx(
        MenuHorizontal,
        _objectSpread(
          _objectSpread({}, props),
          {},
          {
            menus: menus,
          },
        ),
      )
    : /*#__PURE__*/ _jsx(
        MenuVerical,
        _objectSpread(
          _objectSpread({}, props),
          {},
          {
            menus: menus,
          },
        ),
      );
};
Menu.SubMenu = SubMenu;
Menu.Item = Item;
export default Menu;
