import { Icon } from '@/index';

export default ({ items }) => {
  return (
    <div className="yld-timeline">
      {items.map((item: any) => {
        return (
          <div className="yld-timeline-item">
            <div className="yld-timeline-item-dot">
              {item.dot || <Icon type="cc-dot-o" />}
            </div>
            <div className="yld-timeline-item-title">{item.title}</div>
          </div>
        );
      })}
    </div>
  );
};
