import { useState, useEffect, useRef } from 'react';
import { Button, Icon } from '../../index';

export default ({
  title,
  closable,
  placement,
  visible = false,
  style = {},
  top,
  onClose,
  onOk,
  children,
  footer,
  mask,
}: any) => {
  const [_visible, setvisible] = useState(visible);
  useEffect(() => {
    setvisible(visible);
  }, [visible]);
  const close = () => {
    setvisible(false);
    typeof onClose === 'function' && onClose();
  };
  const ok = () => {
    close();
    typeof onOk === 'function' && onOk();
  };
  let className = ['yld-drawer'];
  if (placement === 'left') {
    className.push('yld-drawer-left');
  }
  /**
   * Dom
   */
  const drawerRef: any = useRef();
  useEffect(() => {
    if (drawerRef.current) {
      drawerRef.current.style.height = `calc(100vh - ${top}px)`;
    }
  }, [_visible]);
  return (
    <>
      {_visible === true && (
        <div className={className.join(' ')} style={style} ref={drawerRef}>
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
            {children}
          </div>
          {footer !== false && (
            <div className="yld-drawer-footer">
              {footer === null ? (
                <>
                  <Button type="primary" style={{ width: 60 }} onClick={ok}>
                    确定
                  </Button>
                  <Button style={{ width: 60 }} onClick={close}>
                    取消
                  </Button>
                </>
              ) : (
                footer
              )}
            </div>
          )}
        </div>
      )}
      {_visible === true && (
        <div
          style={{ top }}
          className={
            mask !== false ? 'yld-drawer-mask' : 'yld-drawer-mask-none'
          }
          onClick={close}
        />
      )}
    </>
  );
};
