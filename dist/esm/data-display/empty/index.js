import { Icon } from '../../index';
import './index.less';
import { jsx as _jsx } from 'react/jsx-runtime';
import { jsxs as _jsxs } from 'react/jsx-runtime';
export default (function (_ref) {
  var _ref$label = _ref.label,
    label = _ref$label === void 0 ? 'No Data' : _ref$label,
    _ref$icon = _ref.icon,
    icon = _ref$icon === void 0 ? 'suiconempty' : _ref$icon;
  return /*#__PURE__*/ _jsxs('div', {
    className: 'yld-empty-wrapper',
    children: [
      /*#__PURE__*/ _jsx(Icon, {
        type: icon,
        size: 50,
      }),
      /*#__PURE__*/ _jsx('span', {
        className: 'yld-empty-wrapper-label',
        children: label,
      }),
    ],
  });
});
