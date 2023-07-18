import { useState, useEffect } from 'react';
import { Button, Icon } from '../../index';

export default ({
  title,
  closable,
  visible,
  onClose,
  onOk,
  children,
  footer,
  mask,
  style = {},
}) => {
  useEffect(() => {
    setvisible(visible);
  }, [visible]);
  const [_visible, setvisible] = useState(visible);
  const close = () => {
    setvisible(false);
    typeof onClose === 'function' && onClose();
  };
  const ok = () => {
    close();
    typeof onOk === 'function' && onOk();
  };
  return (
    <>
      {_visible === true && (
        <div className="yld-modal" style={style}>
          <div className="yld-modal-header">
            <div>{title}</div>
            {closable && <Icon type="guanbi" onClick={close} />}
          </div>
          <div
            className="yld-modal-body"
            style={{
              height:
                footer === false ? 'calc(100% - 50px)' : 'calc(100% - 100px)',
            }}
          >
            {children}
          </div>
          {footer !== false && (
            <div className="yld-modal-footer">
              {footer === null || footer === undefined ? (
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
          className={mask !== false ? 'yld-modal-mask' : 'yld-modal-mask-none'}
          onClick={close}
        />
      )}
    </>
  );
};
