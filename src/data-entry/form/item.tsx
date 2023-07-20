export default ({ children, ...props }) => {
  return (
    <div className="yld-form-item" {...props}>
      {children}
    </div>
  );
};
