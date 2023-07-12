import { useState, useEffect } from 'react';
import { Dropdown, Icon } from '../../../index';
const MenuHorizontal = ({ menus, openKey, selectKey, menuClick, theme, style = {} }) => {
  const [_openKey, setopenKey] = useState(openKey || []);
  const [_selectKey, setselectKey] = useState(selectKey || []);
  useEffect(() => {
    /**update */
    setselectKey(selectKey);
  }, [selectKey]);
  useEffect(() => {
    /**update */
    setopenKey(openKey);
  }, [openKey]);
  const isSelected = (menus) => {
    // 判断是否有子节点选中
    return menus.some((item) => {
      if (_selectKey.includes(item.key)) {
        return true;
      } else if (item.children) {
        return isSelected(item.children);
      }
    });
  };
  const onClick = (item) => {
    if (item.disabled) return;
    let selectKey = _selectKey;
    if (item.children) {
      if (_openKey.includes(item.key)) {
        _openKey.splice(
          _openKey.findIndex((key) => key === item.key),
          1,
        ); // 删除
      } else {
        _openKey.push(item.key);
      }
      setopenKey([..._openKey]);
    } else {
      selectKey = [item.key];
      setselectKey([...selectKey]);
    }
    typeof menuClick === 'function' && menuClick(_openKey, selectKey, item);
  };
  /**
   *
   * @param menus render
   */
  const renderNav = (menus) => {
    return menus.map((menu) => {
      const menuClassName = ['yld-menu-horizontal-item'];
      if (_selectKey.indexOf(menu.key) > -1 || (menu.children && isSelected(menu.children))) {
        menuClassName.push('yld-menu-horizontal-item-selected');
      }
      if (menu.disabled) {
        menuClassName.push('yld-menu-horizontal-item-disabled');
      }
      return (
        <div
          key={menu.key}
          className={menuClassName.join(' ')}
          onClick={() => {
            onClick(menu);
          }}
        >
          {menu.children ? (
            <Dropdown key={menu.key} overlay={renderNav(menu.children)}>
              {menu.icon && <Icon type={menu.icon} />}
              {menu.label}
            </Dropdown>
          ) : (
            <>
              {menu.icon && <Icon type={menu.icon} />}
              {menu.label}
            </>
          )}
        </div>
      );
    });
  };
  let className = theme === 'dark' ? 'yld-menu-horizontal-dark' : 'yld-menu-horizontal';
  return (
    <div className={className} style={style}>
      {renderNav(menus)}
    </div>
  );
};
export default MenuHorizontal;
