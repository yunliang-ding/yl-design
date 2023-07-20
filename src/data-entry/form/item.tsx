import { useEffect } from 'react';

export default ({
  children,
  label,
  required,
  name,
  rules,
  itemRef,
  ...props
}) => {
  useEffect(() => {
    console.log(itemRef);
    // Object.assign(itemRef, {
    //   validator: (error) => {
    //     console.log(error)
    //   }
    // })
  }, []);
  return (
    <div className="yld-form-item" {...props}>
      <label>
        {required && <span style={{ color: 'red', marginRight: 4 }}>*</span>}
        {label}
      </label>
      <div className="yld-form-item-wapper">{children}</div>
    </div>
  );
};
