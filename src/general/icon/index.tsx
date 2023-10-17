import { CSSProperties } from 'react';

export interface IconProps {
  type?: String;
  primary?: Boolean;
  size?: number;
  style?: CSSProperties;
  onClick?: Function;
  color?: string;
}

export default ({
  type,
  primary = false,
  size = 16,
  style = {},
  onClick,
  color,
}: IconProps) => {
  return (
    <i
      className={`yld-icon yld-icon-${type}`}
      style={{
        ...style,
        color: primary ? 'var(--primary-color)' : color,
        fontSize: size,
      }}
      onClick={(e: any) => {
        onClick?.(e);
      }}
    />
  );
};
