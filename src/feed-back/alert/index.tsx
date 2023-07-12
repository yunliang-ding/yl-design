import { useState } from 'react';
import { Icon } from '../../index';

const iconMapping = {
  success: 'yldiconmessage_SendSuccessfully',
  info: 'yldiconwarning',
  warning: 'yldiconinfo_warning',
  error: 'yldiconcuo',
};
export default ({ message, closable = false, type, style }) => {
  const [open, setopen] = useState(true);
  return (
    <>
      {open && (
        <div className={`yld-alert yld-alert-${type}`} style={style}>
          <div className="yld-alert-message">
            <Icon type={iconMapping[type]} />
            <span>{message}</span>
          </div>
          {closable && <Icon type="yldiconguanbi" size={14} onClick={setopen.bind(null, false)} />}
        </div>
      )}
    </>
  );
};
