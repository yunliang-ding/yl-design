import { ReactNode, CSSProperties } from 'react';
import ReactDOM from 'react-dom';
import { Button, Icon } from '../../index';

export const uuid = function uuid(size) {
  return Math.random().toString().substr(2, size);
};

export const $: any = document.querySelector.bind(document);

export interface ModalProps {
  containId?: string;
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
  render: () => ReactNode;
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
