import { Header, Sider, Content, Footer } from './components';
import './index.less';

const Layout = (props: any) => {
  let hasSider = props.children.some((item) => item.type.nickName === 'Sider');
  let hasHeader = props.children.some((item) => item.type.nickName === 'Header');
  let hasFooter = props.children.some((item) => item.type.nickName === 'Footer');
  const wrapperClassName = ['yld-layout'];
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
  return (
    <>
      <section className={wrapperClassName.join(' ')}>{props.children}</section>
    </>
  );
};
Layout.Header = Header;
Layout.Sider = Sider;
Layout.Content = Content;
Layout.Footer = Footer;
export default Layout;
