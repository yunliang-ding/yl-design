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
import ReactDOM from 'react-dom';
import { Icon } from '../../index';
import './index.less';
import { jsx as _jsx } from 'react/jsx-runtime';
import { jsxs as _jsxs } from 'react/jsx-runtime';
var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);
var typeMapping = {
  1: 'suiconmessage_SendSuccessfully',
  2: 'suiconcuo',
  3: 'suiconinfo_warning',
  4: 'suiconwarning',
};
var colorMapping = {
  1: '#1ac7aa',
  2: '#d81e06',
  3: '#f4ea2a',
  4: '#39a9f4',
};
var Message = /*#__PURE__*/ _createClass(function Message(props) {
  var _this = this;
  _classCallCheck(this, Message);
  _defineProperty(this, 'duration', void 0);
  _defineProperty(this, 'dark', void 0);
  _defineProperty(this, 'position', void 0);
  _defineProperty(this, 'open', function (type, content) {
    var messageContainer = document.createElement('div');
    var length = $$('.yld-message').length;
    messageContainer.className = 'yld-message';
    if (_this.position === 'br') {
      messageContainer.style.left = 'auto';
      messageContainer.style.top = 'auto';
      messageContainer.style.bottom = 50 + length * 60 + 'px';
      messageContainer.style.right = '20px';
    } else {
      messageContainer.style.top = 50 + length * 60 + 'px';
      messageContainer.style.top = 50 + length * 60 + 'px';
    }
    $('body').appendChild(messageContainer);
    setTimeout(function () {
      messageContainer.remove();
    }, _this.duration * 1000);
    ReactDOM.render(_this.renderMessage(type, content), messageContainer);
  });
  _defineProperty(this, 'close', function (node) {
    node.target.parentNode.parentNode.parentNode.remove();
  });
  _defineProperty(this, 'success', function (content) {
    _this.open(1, content);
  });
  _defineProperty(this, 'error', function (content) {
    _this.open(2, content);
  });
  _defineProperty(this, 'warning', function (content) {
    _this.open(3, content);
  });
  _defineProperty(this, 'normal', function (content) {
    _this.open(4, content);
  });
  _defineProperty(this, 'renderMessage', function (type, content) {
    return /*#__PURE__*/ _jsxs('div', {
      className: 'yld-message-content',
      children: [
        /*#__PURE__*/ _jsx('div', {
          className: 'yld-message-content-icon',
          children: /*#__PURE__*/ _jsx(Icon, {
            type: typeMapping[type],
            color: colorMapping[type],
          }),
        }),
        /*#__PURE__*/ _jsx('div', {
          className: 'yld-message-content-message',
          children: content,
        }),
        /*#__PURE__*/ _jsx('div', {
          className: 'yld-message-content-close',
          children: /*#__PURE__*/ _jsx(Icon, {
            type: 'suiconguanbi',
            onClick: function onClick(e) {
              _this.close(e);
            },
          }),
        }),
      ],
    });
  });
  this.duration = props.duration || 3;
  this.position = props.position || 'center';
});
export { Message as default };
