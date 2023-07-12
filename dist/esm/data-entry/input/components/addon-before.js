import { jsx as _jsx } from 'react/jsx-runtime';
export default (function (props) {
  return props.addon
    ? /*#__PURE__*/ _jsx('label', {
        className: 'yld-input-addon-before',
        title: props.addon,
        children: props.addon,
      })
    : null;
});
