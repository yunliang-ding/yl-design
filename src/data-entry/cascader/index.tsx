import { useState, useEffect, ReactNode, CSSProperties, useRef } from 'react';
import { Icon, Empty } from '../../index';
import { fieldNamesTransfrom, getLabelByValue } from './util';
import cloneDeep from 'lodash.clonedeep';

export interface OptionsProps {
  label: ReactNode;
  value: number | string;
  disabled?: boolean;
  children: OptionsProps[];
}

export interface CascaderProps {
  /** 别名 */
  fieldNames?: {
    label?: string;
    value?: string;
    children?: string;
  };
  /** 类名 */
  className?: string;
  /** 多选模式 */
  multiple?: boolean;
  /** 数据源 */
  options?: OptionsProps[];
  /** 值 */
  value?: number[] | string[];
  /** 改变钩子 */
  onChange?: Function;
  /** 是否清空 */
  allowClear?: boolean;
  /** 提示语 */
  placeholder?: string;
  /** 是否禁用 */
  disabled?: boolean;
  /** 样式 */
  style?: CSSProperties;
  /** 下拉层类名 */
  dropdownClassName?: string;
  /** 下拉层样式 */
  dropdownStyle?: CSSProperties;
  /** 是否打开 */
  open?: boolean;
}

export default ({
  options,
  value,
  allowClear = true,
  placeholder,
  disabled = false,
  style = {},
  className,
  dropdownClassName,
  dropdownStyle = {},
  onChange,
  open = false,
  fieldNames,
}: CascaderProps) => {
  // 获得 格式化 options
  const optionsRef = useRef(
    fieldNamesTransfrom(fieldNames, cloneDeep(options)),
  );
  // 设置数据源
  const [_options, setOptions] = useState([
    optionsRef.current.map((item) => {
      return item;
    }),
  ]);
  const [_value, setValue] = useState([]); // 内部存选中值容器

  useEffect(() => {
    setValue(value || []);
  }, [value]);
  const [_open, setOpen] = useState(open);
  /**
   * 内部状态
   */
  const _className = ['yld-cascader'];
  if (_open) {
    _className.push('yld-cascader-open');
  }
  if (disabled) {
    _className.push('yld-cascader-disabled');
  }
  if (className) {
    _className.push('className');
  }
  const dropDownClassName = dropdownClassName
    ? `${dropdownClassName} yld-cascader-dropdown`
    : 'yld-cascader-dropdown';
  const label = getLabelByValue(_value, optionsRef.current);
  /**
   * JSX
   */
  return (
    <div className={_className.join(' ')} style={style}>
      <div
        className="yld-cascader-selection"
        onClick={() => {
          if (disabled) return;
          setOpen(!_open);
        }}
      >
        <div className="yld-cascader-selection-selected-value" title={label}>
          {label === undefined ? (
            <span style={{ color: '#aaa' }}>{placeholder}</span>
          ) : (
            label
          )}
        </div>
        <Icon type="xialadown" />
        {!disabled && allowClear && _value?.length > 0 && (
          <Icon
            type="cuo"
            onClick={(e) => {
              e.stopPropagation(); // 阻止冒泡
              setValue([]); // 还原
              typeof onChange === 'function' && onChange([], null);
            }}
          />
        )}
      </div>
      {_open && (
        <>
          <div
            className="yld-cascader-mask"
            onClick={setOpen.bind(null, false)}
          />
          <div style={dropdownStyle} className={dropDownClassName}>
            {_options.length > 0 ? (
              _options?.map((item, index) => {
                return (
                  <div className="yld-cascader-dropdown-col" key={index}>
                    {item.map((option) => {
                      let className = _value?.some(
                        (item) => item === option.value,
                      )
                        ? 'yld-cascader-dropdown-menu yld-cascader-dropdown-menu-selected'
                        : 'yld-cascader-dropdown-menu';
                      option.disabled &&
                        (className += ' yld-cascader-dropdown-menu-disabled');
                      return (
                        <div
                          key={option.key}
                          className={className}
                          onClick={() => {
                            if (option.disabled) return;
                            _value[index] = option.value;
                            _value.splice(index + 1, 999); // 根节点切换清空后面
                            setValue([..._value]);
                            if (option.children) {
                              _options[index + 1] = option.children;
                              _options.splice(index + 2, 999); // 根节点切换清空后面
                              setOptions([..._options]);
                            } else {
                              setOpen(false);
                              typeof onChange === 'function' &&
                                onChange(_value);
                            }
                          }}
                        >
                          {option.label}
                          {option.children && (
                            <Icon type="jiantou2" size={14} />
                          )}
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
