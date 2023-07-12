import { Icon } from '../../index';
import './index.less';
import { jsx as _jsx } from 'react/jsx-runtime';
import { jsxs as _jsxs } from 'react/jsx-runtime';
export default (function (_ref) {
  var disabled = _ref.disabled,
    ghost = _ref.ghost,
    _onClick = _ref.onClick,
    icon = _ref.icon,
    loading = _ref.loading,
    type = _ref.type,
    style = _ref.style,
    children = _ref.children;
  var className = 'yld-btn';
  if (type) {
    className += ' yld-btn-' + type;
  }
  if (ghost) {
    className += ' yld-btn-ghost';
  }
  if (disabled) {
    className += ' yld-btn-disabled';
  }
  if (loading) {
    className += ' yld-btn-loading';
  }
  return /*#__PURE__*/ _jsxs('button', {
    className: className,
    style: style,
    onClick: function onClick(e) {
      if (disabled) return;
      typeof _onClick === 'function' && _onClick(e);
    },
    children: [
      loading &&
        /*#__PURE__*/ _jsx(Icon, {
          type: 'suiconloading',
        }),
      icon &&
        /*#__PURE__*/ _jsx(Icon, {
          type: icon,
        }),
      children || ' ',
    ],
  });
});
