export default ({ style = {}, gap = 10, children }) => {
  const className = ['yld-space'];
  return (
    <div className={className.join(' ')} style={{ ...style, gap }}>
      {children}
    </div>
  );
};
