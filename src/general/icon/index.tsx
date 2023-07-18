export default ({
  type,
  primary = false,
  size = 16,
  style = {},
  onClick,
  color,
}: any) => {
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
