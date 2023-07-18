export default ({ type, size = 16, style = {}, onClick, color }: any) => {
  return (
    <i
      className={`yld-icon yld-icon-${type}`}
      style={{
        ...style,
        color,
        fontSize: size,
      }}
      onClick={(e: any) => {
        onClick?.(e);
      }}
    />
  );
};
