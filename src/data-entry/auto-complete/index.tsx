import { useState, useEffect, CSSProperties } from 'react';
import { Icon, Empty } from '../../index';

interface AutoCompleteProps {
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
  onSelect?: Function;
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
  onSelect,
  open = false,
}: AutoCompleteProps) => {
  const [_value, setvalue] = useState(value);
  useEffect(() => {
    let suffix = options.find((item) => _value.endsWith(item)); // 拆分 value / suffix
    if (suffix) {
      setvalue(_value.substr(0, _value.lastIndexOf(suffix)));
      setsuffix(suffix);
    } else {
      setvalue(_value);
    }
  }, [_value]);
  const [_open, setopen] = useState(open);
  const [suffix, setsuffix] = useState('');
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
          setopen(!_open);
        }}
      >
        <div className="yld-auto-selection-selected-value">
          {
            <input
              value={_value + suffix}
              className="yld-auto-selection-selected-input"
              placeholder={placeholder}
              onChange={(e) => {
                setvalue(e.target.value);
                setsuffix('');
              }}
            />
          }
        </div>
        {allowClear && _value !== '' && (
          <Icon
            type="cuo"
            onClick={(e) => {
              e.stopPropagation(); // 阻止冒泡
              setvalue('');
              setsuffix('');
              typeof onSelect === 'function' && onSelect('');
            }}
          />
        )}
      </div>
      {_open && _value !== '' && (
        <>
          <div className="yld-auto-mask" onClick={setopen.bind(null, false)} />
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
                      setopen(false);
                      setsuffix(option);
                      typeof onSelect === 'function' &&
                        onSelect(_value + option);
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
