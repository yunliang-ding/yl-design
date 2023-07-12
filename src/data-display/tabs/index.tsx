import { useState, useRef, useEffect } from 'react';
import { Icon } from '../../index';

export default ({ style, closable, data, activeKey, onClick, onRemove, tigger = 'click' }: any) => {
  useEffect(() => {
    if (activeKey !== undefined) {
      let index = data.findIndex((item) => item.key === activeKey);
      setindex(index);
    }
  }, [activeKey]);
  const [_index, setindex] = useState(activeKey || 0);
  const [_data, setdata] = useState(Array.isArray(data) ? data : []);
  const className = ['yld-tabs-header'];
  const tabsRef: any = useRef();
  const borderRef: any = useRef();
  const activeItemRef: any = useRef();
  /**
   * 调整下划线位置
   */
  useEffect(() => {
    if (activeItemRef.current) {
      borderRef.current.style.width = activeItemRef.current.getBoundingClientRect().width + 'px';
      borderRef.current.style.left =
        activeItemRef.current.getBoundingClientRect().left -
        tabsRef.current.getBoundingClientRect().left +
        'px';
    }
  }, [_index]);
  return (
    <>
      <div className="yld-tabs" style={style} ref={tabsRef}>
        <div className={className.join(' ')}>
          {_data.map((tab, index) => {
            return (
              <div
                ref={_index === index ? activeItemRef : null}
                key={tab.key}
                className={
                  _index === index ? 'yld-tabs-header-item-active' : 'yld-tabs-header-item'
                }
                onClick={() => {
                  if (tigger === 'click') {
                    setindex(index);
                    typeof onClick === 'function' && onClick(tab);
                  }
                }}
                onMouseOver={() => {
                  if (tigger === 'hover') {
                    setindex(index);
                    typeof onClick === 'function' && onClick(tab);
                  }
                }}
              >
                {tab.label}
                {closable && (
                  <Icon
                    type="yldiconguanbi"
                    size={13}
                    onClick={(e) => {
                      e.stopPropagation(); // 阻止往上冒泡
                      _data.splice(index, 1);
                      setdata([..._data]);
                      setindex(0);
                      typeof onRemove === 'function' && onRemove(tab);
                    }}
                  />
                )}
              </div>
            );
          })}
          {_data.length > 0 && (
            <>
              <div className="yld-tabs-header-border" />
              <div className="yld-tabs-item-active-border" ref={borderRef} />
            </>
          )}
        </div>
        <div className="yld-tabs-content">
          {_data &&
            _data.map((tab, index) => {
              return (
                <div
                  key={tab.key}
                  className={'yld-tabs-content-item'}
                  style={{
                    left: (index - _index) * 100 + '%',
                  }}
                >
                  {tab.content}
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};
