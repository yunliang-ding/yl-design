import { useRef, useEffect } from 'react';
import { Icon } from '../../index';
import { jsx as _jsx } from 'react/jsx-runtime';
import { jsxs as _jsxs } from 'react/jsx-runtime';
import { Fragment as _Fragment } from 'react/jsx-runtime';
export default (function (_ref) {
  var loading = _ref.loading,
    _ref$icon = _ref.icon,
    icon = _ref$icon === void 0 ? 'suiconloading1' : _ref$icon,
    style = _ref.style,
    message = _ref.message,
    children = _ref.children;
  var spinMaskRef = useRef();
  var spinBodyRef = useRef();
  useEffect(
    function () {
      if (spinMaskRef.current && spinBodyRef.current) {
        spinMaskRef.current.style.width =
          spinBodyRef.current.firstElementChild.getBoundingClientRect().width + 'px';
        spinMaskRef.current.style.height =
          spinBodyRef.current.firstElementChild.getBoundingClientRect().height + 'px';
      }
      if (loading) {
        spinMaskRef.current.style.display = 'flex';
      }
    },
    [loading],
  );
  return /*#__PURE__*/ _jsx(_Fragment, {
    children: /*#__PURE__*/ _jsxs('div', {
      className: 'yld-loading',
      style: style,
      children: [
        /*#__PURE__*/ _jsx('div', {
          className: 'yld-loading-body',
          ref: spinBodyRef,
          style: {
            filter: loading ? 'blur(1px)' : 'none',
          },
          children: children,
        }),
        loading &&
          /*#__PURE__*/ _jsxs('div', {
            className: 'yld-loading-mask',
            ref: spinMaskRef,
            children: [
              /*#__PURE__*/ _jsx('div', {
                className: 'yld-loading-mask-spin',
                children: /*#__PURE__*/ _jsx(Icon, {
                  type: icon,
                }),
              }),
              message &&
                /*#__PURE__*/ _jsx('span', {
                  className: 'yld-loading-mask-message',
                  children: message,
                }),
            ],
          }),
      ],
    }),
  });
});
