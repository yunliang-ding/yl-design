import { ReactNode, CSSProperties } from 'react';
import ReactDOM from 'react-dom';
import { Button, Icon } from '../../index';
import { uuid, $ } from '../modal';

export interface DrawerProps {
  containId?: string;
  /** 方向 */
  placement?: 'left' | 'right';
  /** 距离顶部距离 */
  top?: number;
  /** 标题 */
  title?: ReactNode;
  /** 是否有遮罩 */
  mask?: boolean;
  /** 点击遮罩是否带关闭 */
  closable?: boolean;
  /** 关闭的钩子 */
  onClose?: Function;
  /** 确认的钩子 */
  onOk?: Function;
  /** 底部按钮配置 */
  actions?: any[];
  /** 是否展示底部 */
  footer?: boolean;
  /** 自定义渲染底部 */
  footerRender?: (api: { onClose: any }) => ReactNode;
  /** 容器样式 */
  style?: CSSProperties;
  /** 确认文案 */
  okText?: string;
  /** 取消文案 */
  cancelText?: string;
  /** 主体渲染 */
  render: (api: { onClose: any }) => ReactNode;
}

const Drawer = ({
  title = '',
  closable = true,
  placement = 'right',
  style = {},
  top = 0,
  onClose = () => {},
  onOk = () => {},
  footer = true,
  mask = true,
  render = () => null,
  footerRender,
  okText,
  cancelText,
  actions = [
    {
      label: cancelText || '取消',
      onClick: onClose,
    },
    {
      label: okText || '确定',
      onClick: onOk,
      type: 'primary',
    },
  ],
}: DrawerProps) => {
  let className = ['yld-drawer'];
  if (placement === 'left') {
    className.push('yld-drawer-left');
  }
  return (
    <>
      <div
        className={className.join(' ')}
        style={{
          ...style,
          height: `calc(100vh - ${top}px)`,
        }}
      >
        <div className="yld-drawer-header">
          <div>{title}</div>
          {closable && <Icon type="guanbi" onClick={close} />}
        </div>
        <div
          className="yld-drawer-body"
          style={{
            height:
              footer === false ? 'calc(100% - 50px)' : 'calc(100% - 100px)',
          }}
        >
          {render({ onClose })}
        </div>
        {footer !== false && (
          <div className="yld-drawer-footer">
            {typeof footerRender === 'function'
              ? footerRender({
                  onClose,
                })
              : actions.map((item) => {
                  return (
                    <Button {...item} key={item.label}>
                      {item.label}
                    </Button>
                  );
                })}
          </div>
        )}
      </div>
      {mask && (
        <div
          style={{ top }}
          className="yld-drawer-mask"
          onClick={() => closable && onClose()}
        />
      )}
    </>
  );
};

export default (props: DrawerProps) => {
  return {
    open: (options: DrawerProps) => {
      const drawerProps = {
        placement: 'right',
        ...props,
        ...options,
      } as DrawerProps;
      const close = () => {
        $(`#${containId} .yld-drawer`).style[drawerProps.placement] = '-9999px';
        setTimeout(() => {
          $(`#${containId}`)?.remove();
        }, 500);
      };
      const containId = drawerProps.containId || `drawerId_${uuid(6)}`;
      const tag = document.createElement('div');
      tag.setAttribute('id', containId);
      tag.setAttribute('class', 'yld-drawer-wrapper');
      $('body').appendChild(tag);
      ReactDOM.render(
        <Drawer
          {...drawerProps}
          onClose={() => {
            close();
            drawerProps.onClose?.();
          }}
          onOk={async () => {
            await drawerProps.onOk?.(); // 等待关闭 resolve
            close();
          }}
        />,
        tag,
      );
    },
  };
};
