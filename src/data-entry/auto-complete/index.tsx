import { useState, useEffect } from 'react';
import { Icon, Empty } from '../../index';
import './index.less';

export default ({
  dataSource,
  value,
  allowClear = false,
  placeholder,
  disabled = false,
  style = {},
  onSelect,
  open = false,
}: any) => {
  const [_value, setvalue] = useState(value);
  useEffect(() => {
    let suffix = dataSource.find((item) => _value.endsWith(item)); // 拆分 value / suffix
    if (suffix) {
      setvalue(_value.substr(0, _value.lastIndexOf(suffix)));
      setsuffix(suffix);
    } else {
      setvalue(_value);
    }
  }, [_value]);
  const [_open, setopen] = useState(open);
  const [suffix, setsuffix] = useState('');
  let className = _open ? 'yld-auto yld-auto-open' : 'yld-auto';
  disabled && (className += ' yld-auto-disabled');
  return (
    <div className={className} style={style}>
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
            type="suiconcuo"
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
            {dataSource.length > 0 ? (
              dataSource.map((option) => {
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
                      typeof onSelect === 'function' && onSelect(_value + option);
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
