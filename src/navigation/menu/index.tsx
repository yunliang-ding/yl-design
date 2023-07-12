import { MenuVerical, MenuHorizontal, Item, SubMenu } from './components';

const Menu = (props: any) => {
  const loop = (item) => {
    let childrens = [];
    if (Object.prototype.toString.call(item) === '[object Array]') {
      childrens = item;
    } else if (Object.prototype.toString.call(item) === '[object Object]') {
      childrens.push(item);
    }
    return (
      childrens &&
      childrens
        .filter(
          (children) => children.type && ['SubMenu', 'Item'].indexOf(children.type.nickName) > -1,
        )
        .map((children) => {
          let obj: any = {
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
  let menus = []; // 定义menus
  if (props.children && props.menus === undefined) {
    menus = loop(props.children); // 递归转换
  }
  if (props.menus) {
    menus = props.menus;
  }
  return props.mode === 'horizontal' ? (
    <MenuHorizontal {...props} menus={menus} />
  ) : (
    <MenuVerical {...props} menus={menus} />
  );
};
Menu.SubMenu = SubMenu;
Menu.Item = Item;
export default Menu;
