interface BadgeProps {}
import './index.less';

export default ({ color, count, dot = false, title, children }: BadgeProps | any) => {
  let style: any = {};
  if (color) {
    style.backgroundColor = color;
  }
  return (
    <span className="yld-badge-wrapper">
      {children}
      {dot ? (
        <sup className="yld-badge-dot" style={style} />
      ) : (
        <sup style={style} className="yld-badge-count" title={title}>
          {count}
        </sup>
      )}
    </span>
  );
};
