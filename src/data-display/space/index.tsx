export default ({ direction = 'rows', center = false, gap = 10, children }) => {
  const className = ['yld-space'];
  if (direction === 'column') {
    className.push('yld-space-column');
  }
  if (center) {
    className.push('yld-space-center');
  }
  return (
    <div className={className.join(' ')} style={{ gap }}>
      {children}
    </div>
  );
};
