import { CSSProperties, ReactNode, useState } from 'react';
import { Icon } from '../../index';

export interface AlertProps {
  message: ReactNode;
  closable?: Boolean;
  type?: keyof typeof iconMapping;
  style?: CSSProperties;
}

const iconMapping = {
  success: 'message_SendSuccessfully',
  info: 'warning',
  warning: 'info_warning',
  error: 'cuo',
};

export default ({
  message,
  closable = false,
  type = 'info',
  style,
}: AlertProps) => {
  const [open, setopen] = useState(true);
  return (
    <>
      {open && (
        <div className={`yld-alert yld-alert-${type}`} style={style}>
          <div className="yld-alert-message">
            <Icon type={iconMapping[type]} />
            <span>{message}</span>
          </div>
          {closable && (
            <Icon type="guanbi" size={14} onClick={setopen.bind(null, false)} />
          )}
        </div>
      )}
    </>
  );
};
