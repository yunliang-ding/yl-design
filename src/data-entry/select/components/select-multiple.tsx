import { useState, useRef, useEffect } from 'react';
import { Icon, Empty, Layer } from '../../../index';

export default ({
  options,
  value,
  allowClear = false,
  placeholder,
  disabled = false,
  style = {},
  dropdownClassName,
  dropdownStyle = {},
  onChange,
  open = false,
}) => {
  const [_open, setopen] = useState(open);
  const [_options, setoptions] = useState(options);
  const [_value, setvalue] = useState(Array.isArray(value) ? value : []); // 格式处理 deep
  const [_dropdownStyle, setdropdownStyle]: any = useState(dropdownStyle || {});
  let className = _open ? 'yld-select yld-select-open' : 'yld-select';
  disabled && (className += ' yld-select-disabled');
  /** ref */
  const selectSelectionWapper: any = useRef();
  const selectValueWapper: any = useRef();
  /** 计算实际高度 */
  const getElementTop = (el) => {
    let actualTop = el.offsetTop;
    let current = el.offsetParent;
    while (current !== null) {
      actualTop += current.offsetTop;
      current = current.offsetParent;
    }
    return actualTop;
  };
  /**update */
  useEffect(() => {
    setvalue(Array.isArray(value) ? value : []); // 引用类型需要拷贝一下，不然观测失败
  }, [value]);
  useEffect(() => {
    setoptions(options);
  }, [options]);
  /** 获取位置 */
  useEffect(() => {
    adjustHeight();
  }, []);
  useEffect(() => {
    adjustHeight();
  }, [_value]);
  /** 自适应位置 */
  const adjustHeight = () => {
    if (selectValueWapper && selectValueWapper.current) {
      const { height } = selectValueWapper.current.getBoundingClientRect();
      const { left, width } = selectSelectionWapper.current.getBoundingClientRect();
      const top = getElementTop(selectValueWapper.current);
      selectSelectionWapper.current.style.height = height + 'px';
      setdropdownStyle({
        left: left,
        top: top + height + 4,
        maxHeight: 300,
        width: width,
        minWidth: 140,
        ...dropdownStyle,
      });
    }
  };
  return (
    <>
      <div className={className} style={style}>
        <div
          ref={selectSelectionWapper}
          className="yld-select-selection yld-select-selection-multiple"
          onClick={() => {
            if (disabled) return;
            setopen(!_open);
          }}
        >
          <div ref={selectValueWapper} className="yld-select-selection-selected-value">
            {_value.length === 0 ? (
              <span style={{ color: '#aaa' }}>{placeholder}</span>
            ) : (
              <div className="yld-select-selection-choice-warpper">
                {options
                  .filter((item) => _value.indexOf(item.value) > -1)
                  .map((item) => {
                    return (
                      <span className="yld-select-selection-choice" key={item.key}>
                        {item.label}
                        <Icon
                          size={14}
                          type="yldiconguanbi"
                          onClick={(e) => {
                            e.stopPropagation(); // 阻止冒泡
                            let value = _value.filter((item) => item !== item.value); // 删除
                            setvalue([..._value]);
                            typeof onChange === 'function' && onChange(value, null);
                          }}
                        />
                      </span>
                    );
                  })}
              </div>
            )}
          </div>
          <Icon type="yldiconxialadown" />
          {!disabled && allowClear && _value.length > 0 && (
            <Icon
              size={14}
              type="yldiconcuo"
              onClick={(e) => {
                e.stopPropagation(); // 阻止冒泡
                typeof onChange === 'function' && onChange([], null);
              }}
            />
          )}
        </div>
      </div>
      <Layer
        style={_dropdownStyle}
        open={_open}
        close={setopen.bind(null, false)}
        refresh={_value}
        childrenClassName={dropdownClassName}
      >
        <>
          {_options.length > 0 ? (
            _options.map((option) => {
              let className =
                _value.indexOf(option.value) > -1
                  ? 'yld-select-dropdown-menu yld-select-dropdown-menu-selected'
                  : 'yld-select-dropdown-menu';
              option.disabled && (className += ' yld-select-dropdown-menu-disabled');
              return (
                <div
                  key={option.key}
                  className={className}
                  onClick={(e) => {
                    if (option.disabled) return;
                    // 没有则添加，有则删除
                    let index = _value.indexOf(option.value);
                    if (index === -1) {
                      _value.push(option.value);
                    } else {
                      _value.splice(index, 1);
                    }
                    setvalue([..._value]);
                    typeof onChange === 'function' && onChange([..._value], option);
                  }}
                >
                  {option.label}
                  <Icon size={14} type="yldiconduihao" />
                </div>
              );
            })
          ) : (
            <Empty />
          )}
        </>
      </Layer>
    </>
  );
};
