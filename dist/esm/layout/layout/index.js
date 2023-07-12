import { Header, Sider, Content, Footer } from './components';
import './index.less';
import { jsx as _jsx } from 'react/jsx-runtime';
import { Fragment as _Fragment } from 'react/jsx-runtime';
var Layout = function Layout(props) {
  var hasSider = props.children.some(function (item) {
    return item.type.nickName === 'Sider';
  });
  var hasHeader = props.children.some(function (item) {
    return item.type.nickName === 'Header';
  });
  var hasFooter = props.children.some(function (item) {
    return item.type.nickName === 'Footer';
  });
  var wrapperClassName = ['yld-layout'];
  if (hasSider) {
    wrapperClassName.push('yld-layout-has-sider');
  }
  if (hasHeader && hasFooter) {
    wrapperClassName.push('yld-layout-has-header-footer');
  } else {
    if (hasHeader) {
      wrapperClassName.push('yld-layout-has-header');
    }
    if (hasFooter) {
      wrapperClassName.push('yld-layout-has-footer');
    }
  }
  return /*#__PURE__*/ _jsx(_Fragment, {
    children: /*#__PURE__*/ _jsx('section', {
      className: wrapperClassName.join(' '),
      children: props.children,
    }),
  });
};
Layout.Header = Header;
Layout.Sider = Sider;
Layout.Content = Content;
Layout.Footer = Footer;
export default Layout;
