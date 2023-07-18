import { Icon } from '@/index';

export default ({ items }) => {
  return (
    <div className="yld-timeline">
      {items.map((item: any, index, arr) => {
        return (
          <div className="yld-timeline-item">
            <div className="yld-timeline-item-dot">
              {item.dot || (
                <Icon
                  type="cc-dot-o"
                  color={item.color || 'var(--primary-color)'}
                  size={18}
                  style={{ fontWeight: 600 }}
                />
              )}
            </div>
            {index < arr.length - 1 && (
              <div className="yld-timeline-item-line" />
            )}
            <div className="yld-timeline-item-title">{item.title}</div>
          </div>
        );
      })}
    </div>
  );
};
