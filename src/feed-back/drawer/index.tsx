import { ReactNode, CSSProperties } from 'react';
import ReactDOM from 'react-dom';
import { Button, Icon } from '../../index';
import { uuid, $ } from '../modal';

export interface DrawerProps {
  containId?: string;
  title?: ReactNode;
  closable?: boolean;
  placement?: 'left' | 'right';
  style?: CSSProperties;
  top?: number;
  onClose?: Function;
  onOk?: Function;
  footer?: boolean;
  mask?: boolean;
  render: () => ReactNode;
  footerRender: (api: { onClose: any }) => ReactNode;
  okText?: string;
  cancelText?: string;
  actions?: any[];
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
          {render()}
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
        ...props,
        ...options,
      };
      const containId = drawerProps.containId || `modalId_${uuid(6)}`;
      const tag = document.createElement('div');
      tag.setAttribute('id', containId);
      tag.setAttribute('class', 'yld-modal-wrapper');
      $('body').appendChild(tag);
      ReactDOM.render(
        <Drawer
          {...drawerProps}
          onClose={() => {
            $(`#${containId}`)?.remove();
            drawerProps.onClose?.();
          }}
          onOk={async () => {
            await drawerProps.onOk?.(); // 等待关闭 resolve
            $(`#${containId}`)?.remove();
          }}
        />,
        tag,
      );
    },
  };
};
