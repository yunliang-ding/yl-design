export default ({ type, size = 16, style, onClick, color }: any) => {
  let _style = style || {};
  _style.fontSize = size;
  _style.color = color;
  return (
    <>
      <i
        className={'yld-icon ' + type}
        style={_style}
        onClick={(e: any) => {
          typeof onClick === 'function' && onClick(e);
        }}
      />
    </>
  );
};
