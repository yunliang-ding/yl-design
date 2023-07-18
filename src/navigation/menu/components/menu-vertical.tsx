import { useState, useEffect } from 'react';
import { Icon, Tooltip } from '../../../index';
const MenuVerical = ({
  menus,
  menuClick,
  openKey,
  selectKey,
  style,
  collapsed,
  theme = 'light',
  collapsedWidth = 80,
}: any) => {
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
  const renderNav = (item, labelClassName, paddingLeft) => {
    return (
      <>
        <div className={labelClassName.join(' ')} style={{ paddingLeft }}>
          <span className="yld-nav-subMenu-label-left" title={item.label}>
            {item.icon && <Icon type={item.icon} />}
            <span>{item.label}</span>
          </span>
          {item.children && <Icon type="xialadown" />}
        </div>
        {item.children && (
          <div
            className={
              !_openKey.includes(item.key) ? 'yld-nav-subMenu-hidden' : ''
            }
          >
            {renderMenus(item.children, paddingLeft + 24)}
          </div>
        )}
      </>
    );
  };
  const renderCollapsedNav = (item, labelClassName) => {
    return (
      <>
        <div className={labelClassName.join(' ')}>
          <Tooltip theme={theme} placement="right" title={item.label}>
            <Icon
              type={item.icon}
              size={18}
              style={{
                position: 'relative',
                left: 30,
              }}
            />
          </Tooltip>
        </div>
      </>
    );
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
      setselectKey(selectKey);
    }
    typeof menuClick === 'function' && menuClick(_openKey, selectKey);
  };
  const renderMenus = (menus, paddingLeft) => {
    return menus.map((item) => {
      let className = ['yld-nav-subMenu'];
      /**
       * className
       */
      if (item.children && isSelected(item.children)) {
        className.push('yld-nav-subMenu-selected');
      }
      if (_selectKey.includes(item.key)) {
        className.push('yld-nav-subMenu-active');
      }
      if (item.disabled) {
        className.push('yld-nav-subMenu-disabled');
      }
      /**
       * labelClassName
       */
      let labelClassName = ['yld-nav-subMenu-label'];
      if (_openKey.includes(item.key)) {
        labelClassName.push('yld-nav-subMenu-label-open');
      }
      if (item.children) {
        labelClassName.push('yld-nav-subMenu-parent');
      }
      if (collapsed) {
        labelClassName.push('yld-nav-subMenu-collapsed');
      }
      return (
        <div
          key={item.key}
          className={className.join(' ')}
          onClick={(e) => {
            e.stopPropagation(); // 阻止冒泡
            onClick(item);
          }}
        >
          {collapsed
            ? renderCollapsedNav(item, labelClassName)
            : renderNav(item, labelClassName, paddingLeft)}
        </div>
      );
    });
  };
  let className = theme === 'dark' ? 'yld-nav-dark' : 'yld-nav';
  return (
    <>
      <div
        className={className}
        style={{
          ...style,
          width: collapsed ? collapsedWidth : style ? style.width : '100%',
        }}
      >
        {renderMenus(menus, 20)}
      </div>
    </>
  );
};
export default MenuVerical;
