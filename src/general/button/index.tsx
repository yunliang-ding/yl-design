import { CSSProperties, ReactNode, useState } from 'react';
import { Icon } from '../../index';

export interface ButtonProps {
  /** 类型 */
  type?: 'primary' | 'link' | 'dashed' | 'danger';
  /** 是否禁用 */
  disabled?: Boolean;
  /** 幽灵按钮 */
  ghost?: Boolean;
  /** 点击事件 */
  onClick?: Function;
  /** 图标 */
  icon?: String;
  /** 样式 */
  style?: CSSProperties;
  /** 二次确认提示 */
  confirm?: {
    title?: String;
    content: ReactNode;
  };
  children?: ReactNode;
}

export default ({
  disabled,
  ghost,
  onClick,
  icon,
  type,
  style,
  children,
}: ButtonProps) => {
  const className = ['yld-btn'];
  const [loading, setLoading] = useState(false);
  if (type) {
    className.push('yld-btn-' + type);
  }
  if (ghost) {
    className.push('yld-btn-ghost');
  }
  if (disabled) {
    className.push('yld-btn-disabled');
  }
  if (loading) {
    className.push('yld-btn-loading');
  }
  return (
    <button
      style={style}
      className={className.join(' ')}
      onClick={async (e: any) => {
        setLoading(true);
        if (disabled) return;
        typeof onClick === 'function' && (await onClick(e));
        setLoading(false);
      }}
    >
      {loading && <Icon type="loading" size={12} />}
      {icon && <Icon type={icon} />}
      {children || ''}
    </button>
  );
};
