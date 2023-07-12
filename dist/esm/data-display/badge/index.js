import './index.less';
import { jsx as _jsx } from 'react/jsx-runtime';
import { jsxs as _jsxs } from 'react/jsx-runtime';
export default (function (_ref) {
  var color = _ref.color,
    count = _ref.count,
    _ref$dot = _ref.dot,
    dot = _ref$dot === void 0 ? false : _ref$dot,
    title = _ref.title,
    children = _ref.children;
  var style = {};
  if (color) {
    style.backgroundColor = color;
  }
  return /*#__PURE__*/ _jsxs('span', {
    className: 'yld-badge-wrapper',
    children: [
      children,
      dot
        ? /*#__PURE__*/ _jsx('sup', {
            className: 'yld-badge-dot',
            style: style,
          })
        : /*#__PURE__*/ _jsx('sup', {
            style: style,
            className: 'yld-badge-count',
            title: title,
            children: count,
          }),
    ],
  });
});
