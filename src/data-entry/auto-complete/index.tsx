import { useState, useEffect, CSSProperties } from 'react';
import { Icon, Empty } from '../../index';

export interface AutoCompleteProps {
  /** 类名 */
  className?: string;
  /** 数据源 */
  options: string[];
  /** 值 */
  value?: string;
  /** 是否可清空 */
  allowClear?: Boolean;
  /** 提示文案 */
  placeholder?: string;
  /** 是否禁用 */
  disabled?: Boolean;
  /** 样式 */
  style?: CSSProperties;
  /** 选择后钩子 */
  onChange?: Function;
  /** 自动打开 */
  open?: boolean;
}

export default ({
  className,
  options,
  value,
  allowClear = false,
  placeholder,
  disabled = false,
  style = {},
  onChange,
  open = false,
}: AutoCompleteProps) => {
  const [_value, setValue] = useState(value || '');
  const [_open, setOpen] = useState(open);
  const [suffix, setSuffix] = useState('');
  useEffect(() => {
    let suffix = options.find((item) => _value?.endsWith(item)); // 拆分 value / suffix
    if (suffix) {
      setValue(_value.substr(0, _value.lastIndexOf(suffix)));
      setSuffix(suffix);
    } else {
      setValue(_value);
    }
  }, [_value]);
  const _className = ['yld-auto'];
  if (_open) {
    _className.push('yld-auto-open');
  }
  if (disabled) {
    _className.push('yld-auto-disabled');
  }
  if (className) {
    _className.push(className);
  }
  return (
    <div className={_className.join(' ')} style={style}>
      <div
        className="yld-auto-selection"
        onClick={() => {
          if (disabled) return;
          setOpen(!_open);
        }}
      >
        <div className="yld-auto-selection-selected-value">
          {
            <input
              value={_value + suffix}
              className="yld-auto-selection-selected-input"
              placeholder={placeholder}
              onChange={(e) => {
                setValue(e.target.value);
                setSuffix('');
              }}
            />
          }
        </div>
        {allowClear && _value !== '' && (
          <Icon
            type="cuo"
            onClick={(e) => {
              e.stopPropagation(); // 阻止冒泡
              setValue('');
              setSuffix('');
              typeof onChange === 'function' && onChange(undefined);
            }}
          />
        )}
      </div>
      {_open && _value !== '' && (
        <>
          <div className="yld-auto-mask" onClick={setOpen.bind(null, false)} />
          <div className="yld-auto-dropdown">
            {options.length > 0 ? (
              options.map((option) => {
                let className =
                  option === _value
                    ? 'yld-auto-dropdown-menu yld-auto-dropdown-menu-selected'
                    : 'yld-auto-dropdown-menu';
                return (
                  <div
                    key={option}
                    className={className}
                    onClick={() => {
                      setOpen(false);
                      setSuffix(option);
                      typeof onChange === 'function' &&
                        onChange(_value + option);
                    }}
                  >
                    {_value + option}
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
