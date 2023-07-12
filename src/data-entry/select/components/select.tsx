import { useState, useEffect, useRef } from 'react';
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
  onSearch,
  filter = false,
  open = false,
}: any) => {
  useEffect(() => {
    setvalue(value); // update
  }, [value]);
  useEffect(() => {
    setoptions(options); // update
  }, [options]);
  const [_open, setopen] = useState(open);
  const [_options, setoptions] = useState(options);
  const [_value, setvalue] = useState(value);
  const selected: any = _options.find((item) => item.value === _value) || {}; // 选中项
  const [keyword, setkeyword] = useState('');
  const [_placeholder, setplaceholder] = useState(selected.label || placeholder);
  const [_dropdownStyle, setdropdownStyle] = useState(dropdownStyle || {});
  const [refresh, setrefresh] = useState(false);
  let className = _open ? 'yld-select yld-select-open' : 'yld-select';
  disabled && (className += ' yld-select-disabled');
  /** ref */
  const selectionRef: any = useRef();
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
  /** 获取位置 */
  useEffect(() => {
    setTimeout(() => {
      if (selectionRef && selectionRef.current) {
        const { left, height, width } = selectionRef.current.getBoundingClientRect();
        const top = getElementTop(selectionRef.current);
        setdropdownStyle({
          left,
          top: top + height + 4,
          maxHeight: 300,
          width,
          minWidth: 140,
          ...dropdownStyle,
        });
      }
    }, 1000);
  }, []);
  return (
    <>
      <div className={className} style={style}>
        <div
          ref={selectionRef}
          className="yld-select-selection"
          onClick={() => {
            if (disabled) return;
            setopen(!_open);
          }}
        >
          <div className="yld-select-selection-selected-value">
            {filter ? (
              <input
                value={keyword}
                className="yld-select-selection-selected-input"
                placeholder={_placeholder}
                onBlur={() => {
                  setkeyword(''); // 清空 keyword
                  setTimeout(() => {
                    // 避免闪动
                    setoptions(options); // 重制 options
                  }, 500);
                }}
                onChange={(e: any) => {
                  setkeyword(e.target.value);
                  if (e.target.value.trim() !== '') {
                    setoptions(
                      options.filter((option) => {
                        return typeof filter === 'function'
                          ? filter(option, e.target.value)
                          : option.label
                              .toLowerCase()
                              .includes(e.target.value.trim().toLowerCase());
                      }),
                    );
                    setrefresh(!refresh);
                  } else {
                    setoptions(options);
                    setrefresh(!refresh);
                  }
                  typeof onSearch === 'function' && onSearch(e.target.value);
                }}
              />
            ) : selected.value === undefined ? (
              <span style={{ color: '#aaa' }}>{placeholder}</span>
            ) : (
              selected.label
            )}
          </div>
          <Icon type="suiconxialadown" />
          {!disabled && allowClear && selected.value !== undefined && (
            <Icon
              type="suiconcuo"
              onClick={(e) => {
                e.stopPropagation(); // 阻止冒泡
                typeof onChange === 'function' && onChange(null, null);
              }}
            />
          )}
        </div>
      </div>
      <Layer
        style={_dropdownStyle}
        open={_open}
        close={setopen.bind(null, false)}
        refresh={refresh}
        childrenClassName={dropdownClassName}
      >
        <>
          {_options.length > 0 ? (
            _options.map((option) => {
              let className =
                option.value === _value
                  ? 'yld-select-dropdown-menu yld-select-dropdown-menu-selected'
                  : 'yld-select-dropdown-menu';
              option.disabled && (className += ' yld-select-dropdown-menu-disabled');
              return (
                <div
                  key={option.key}
                  className={className}
                  onClick={() => {
                    if (option.disabled) return;
                    setopen(false);
                    setplaceholder(option.value); // 设置 placeholder
                    setkeyword(''); // 清空 keyword
                    setoptions(options); // 重制 options
                    setvalue(option.value);
                    typeof onChange === 'function' && onChange(option.value, option);
                  }}
                >
                  {option.label}
                </div>
              );
            })
          ) : (
            <Empty label="暂无数据" />
          )}
        </>
      </Layer>
    </>
  );
};
