import { ReactNode, CSSProperties } from 'react';
import ReactDOM from 'react-dom';
import { Button, Icon } from '../../index';

export const uuid = function uuid(size) {
  return Math.random().toString().substr(2, size);
};

export const $: any = document.querySelector.bind(document);

export interface ModalProps {
  containId?: string;
  title?: ReactNode;
  closable?: boolean;
  onClose?: Function;
  onOk?: Function;
  actions?: any[];
  render: () => ReactNode;
  footer?: boolean;
  footerRender?: (api: { onClose: any }) => ReactNode;
  mask?: boolean;
  style: CSSProperties;
  okText?: string;
  cancelText?: string;
}

const Modal = ({
  title = '',
  closable = true,
  onClose = () => {},
  onOk = () => {},
  mask = true,
  style = {},
  footer = true,
  footerRender,
  render = () => null,
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
}: ModalProps) => {
  return (
    <>
      <div className="yld-modal" style={style}>
        <div className="yld-modal-header">
          <div>{title}</div>
          <Icon type="guanbi" onClick={onClose} />
        </div>
        <div
          className="yld-modal-body"
          style={{
            height:
              footer === false ? 'calc(100% - 50px)' : 'calc(100% - 100px)',
          }}
        >
          {render()}
        </div>
        {footer !== false && (
          <div className="yld-modal-footer">
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
        <div className="yld-modal-mask" onClick={() => closable && onClose()} />
      )}
    </>
  );
};

export default (props: ModalProps) => {
  return {
    open: (options: ModalProps) => {
      const modalProps = {
        ...props,
        ...options,
      };
      const containId = modalProps.containId || `modalId_${uuid(6)}`;
      const tag = document.createElement('div');
      tag.setAttribute('id', containId);
      tag.setAttribute('class', 'yld-modal-wrapper');
      $('body').appendChild(tag);
      ReactDOM.render(
        <Modal
          {...modalProps}
          onClose={() => {
            $(`#${containId}`)?.remove();
            modalProps.onClose?.();
          }}
          onOk={async () => {
            await modalProps.onOk?.(); // 等待关闭 resolve
            $(`#${containId}`)?.remove();
          }}
        />,
        tag,
      );
    },
  };
};
