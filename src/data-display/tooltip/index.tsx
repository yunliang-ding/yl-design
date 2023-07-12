import { useState, useEffect, useRef } from 'react';

export default ({
  children,
  title,
  placement = 'top',
  overlayClassName,
  overlayStyle = {},
  visible,
  onVisibleChange,
  innerStyle,
  theme,
}: any) => {
  const [_open, setopen] = useState(visible);
  const [style, setstyle]: any = useState({});
  const toolTipRef: any = useRef();
  const toolTipInnerRef: any = useRef();
  // debounce 防抖
  const debounce = (fn, delay = 10) => {
    if (typeof fn !== 'function') {
      // 参数类型为函数
      throw new TypeError('fn is not a function');
    }
    let timer = null;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.call(this, ...args);
      }, delay);
    };
  };
  useEffect(() => {
    setPosition();
  }, [title]);
  const setPosition = () => {
    if (toolTipRef.current) {
      let style: any = {};
      let element = toolTipRef.current.firstElementChild
        ? toolTipRef.current.firstElementChild
        : toolTipRef.current;
      const { left, width, height, top } = element.getBoundingClientRect();
      if (placement === 'top') {
        style.top = top;
        style.left = left + width / 2;
      } else if (placement === 'bottom') {
        style.top = top + height;
        style.left = left + width / 2;
      } else if (placement === 'left') {
        style.top = top + height / 2;
        style.left = left;
      } else if (placement === 'right') {
        style.top = top + height / 2;
        style.left = left + width;
      } else {
        // top default
        style.top = top;
        style.left = left + width / 2;
      }
      setstyle(style);
    }
  };
  useEffect(() => {
    /**
     * 监听滚动事件
     */
    window.addEventListener(
      'scroll',
      debounce(() => {
        setPosition();
      }),
    );
    window.addEventListener(
      'resize',
      debounce(() => {
        setPosition();
      }),
    );
  }, []);
  /**
   * 组装clasName
   */
  let className = ['yld-tooltip'];
  if (placement === 'top') {
    className.push('yld-tooltip-placement-top');
  } else if (placement === 'left') {
    className.push('yld-tooltip-placement-left');
  } else if (placement === 'right') {
    className.push('yld-tooltip-placement-right');
  } else if (placement === 'bottom') {
    className.push('yld-tooltip-placement-bottom');
  }
  if (overlayClassName) {
    className.push(overlayClassName);
  }
  if (theme === 'dark') {
    className.push('yld-tooltip-dark');
  }
  return (
    <div className={_open || visible ? 'yld-tooltip-wrapper' : 'yld-tooltip-wrapper-hidden'}>
      <span
        ref={toolTipRef}
        onMouseOver={() => {
          setopen(true);
          typeof onVisibleChange === 'function' && onVisibleChange(true);
        }}
        onMouseOut={() => {
          setopen(false);
          typeof onVisibleChange === 'function' && onVisibleChange(false);
        }}
      >
        {children}
      </span>
      <div style={{ ...overlayStyle, ...style }} className={className.join(' ')}>
        <div className="yld-tooltip-content">
          <div className="yld-tooltip-arrow"></div>
          <div style={innerStyle} className="yld-tooltip-inner" ref={toolTipInnerRef}>
            {title}
          </div>
        </div>
      </div>
    </div>
  );
};
