import { useState, useEffect } from 'react';
import { Icon, Empty } from '../../index';
import './index.less';

export default ({
  options,
  value,
  allowClear = true,
  placeholder,
  disabled = false,
  style = {},
  dropdownClassName,
  dropdownStyle = {},
  onChange,
  open = false,
  fieldNames,
}: any) => {
  const optionsTransfrom = () => {
    // 自定义属性转换
    if (typeof fieldNames !== 'object') {
      return;
    }
    const loop = (options) => {
      options.forEach((option) => {
        option.key = Math.random();
        option.label = fieldNames.label ? option[fieldNames.label] : option.label;
        option.value = fieldNames.value ? option[fieldNames.value] : option.value;
        option.children = fieldNames.children ? option[fieldNames.children] : option.children;
        if (option.children) {
          loop(option.children);
        }
      });
    };
    loop(options); // 开始转换
  };
  const transfrom = (options, values) => {
    // 数组转为对象数组
    let arr = [];
    let option = options;
    values.map((value, index) => {
      let item = option.find((item) => {
        return item.value === value;
      });
      if (item !== undefined) {
        arr.push(item);
        updateList(option, index);
        option = item.children || []; // 继续查找
      }
    });
    return arr;
  };
  /**
   * value Change
   */
  useEffect(() => {
    optionsTransfrom(); // 自定义属性转换
    const values = transfrom(options, value || []).filter((item) => item !== undefined);
    setselected(values); // 回显
    setvalue(values); // 回显
  }, [value]);
  const updateList = (options, index) => {
    // 更新存储的options容器
    list[index] = options;
    setlist([...list.slice(0, index + 1)]); // clear 后面的数组
  };
  /**
   * 数据转化 转为2维数组渲染
   */
  const [list, setlist] = useState([]); // 存储options容器
  const [_value, setvalue] = useState([]); // 内部存选中值容器
  const [selected, setselected] = useState([]); // 最终选中的指
  const [_open, setopen] = useState(open);
  /**
   * 内部状态
   */
  let className = _open ? 'yld-cascader yld-cascader-open' : 'yld-cascader';
  disabled && (className += ' yld-cascader-disabled');
  const dropDownClassName = dropdownClassName
    ? dropdownClassName + ' yld-cascader-dropdown'
    : 'yld-cascader-dropdown';
  /**
   * _open Change
   */
  useEffect(() => {
    if (_open) {
      // 设置选中值
      const values = transfrom(
        options,
        selected.map((item) => item.value),
      ).filter((item) => item !== undefined);
      setselected(values); // 回显
      setvalue(values); // 回显
    } else {
      // clear
      setvalue([]); // clear
      updateList(options, 0); // clear
    }
  }, [_open]);
  /**
   * 显示的文案
   */
  const label = selected.map((item) => item.label).join('/');
  /**
   * JSX
   */
  return (
    <div className={className} style={style}>
      <div
        className="yld-cascader-selection"
        onClick={() => {
          if (disabled) return;
          setopen(!_open);
        }}
      >
        <div className="yld-cascader-selection-selected-value" title={label}>
          {selected.length === 0 ? <span style={{ color: '#aaa' }}>{placeholder}</span> : label}
        </div>
        <Icon type="suiconxialadown" />
        {!disabled && allowClear && selected.length > 0 && (
          <Icon
            type="suiconcuo"
            onClick={(e) => {
              e.stopPropagation(); // 阻止冒泡
              setvalue([]); // 还原
              updateList(options, 0); // 还原
              setselected([]); // 还原
              typeof onChange === 'function' && onChange([], null);
            }}
          />
        )}
      </div>
      {_open && (
        <>
          <div className="yld-cascader-mask" onClick={setopen.bind(null, false)} />
          <div style={dropdownStyle} className={dropDownClassName}>
            {list.length > 0 ? (
              list.map((item, index) => {
                return (
                  <div className="yld-cascader-dropdown-col" key={index}>
                    {item.map((option) => {
                      let className = _value.some((item) => item.value === option.value)
                        ? 'yld-cascader-dropdown-menu yld-cascader-dropdown-menu-selected'
                        : 'yld-cascader-dropdown-menu';
                      option.disabled && (className += ' yld-cascader-dropdown-menu-disabled');
                      return (
                        <div
                          key={option.key}
                          className={className}
                          onClick={() => {
                            if (option.disabled) return;
                            _value[index] = option;
                            if (option.children) {
                              setvalue([..._value.slice(0, index + 1)]); // clear
                              updateList(option.children, index + 1);
                            } else {
                              setopen(false);
                              setselected([..._value]); // 最终选择的值simple deep解除依赖
                              typeof onChange === 'function' &&
                                onChange(
                                  _value.map((item) => item.value),
                                  option,
                                );
                            }
                          }}
                        >
                          {option.label}
                          {option.children && <Icon type="suiconjiantou2" size={14} />}
                        </div>
                      );
                    })}
                  </div>
                );
              })
            ) : (
              <Empty label="暂无数据" />
            )}
          </div>
        </>
      )}
    </div>
  );
};
