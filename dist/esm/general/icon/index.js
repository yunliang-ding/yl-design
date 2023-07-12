import { jsx as _jsx } from 'react/jsx-runtime';
import { Fragment as _Fragment } from 'react/jsx-runtime';
export default (function (_ref) {
  var type = _ref.type,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 16 : _ref$size,
    style = _ref.style,
    _onClick = _ref.onClick,
    color = _ref.color;
  var _style = style || {};
  _style.fontSize = size;
  _style.color = color;
  return /*#__PURE__*/ _jsx(_Fragment, {
    children: /*#__PURE__*/ _jsx('i', {
      className: 'yld-icon ' + type,
      style: _style,
      onClick: function onClick(e) {
        typeof _onClick === 'function' && _onClick(e);
      },
    }),
  });
});
