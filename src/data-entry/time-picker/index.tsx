import { useState, useEffect, useRef } from 'react';
import { Icon, Input } from '../../index';

export default ({
  value,
  allowClear = true,
  placeholder,
  disabled = false,
  style = {},
  dropdownClassName,
  dropdownStyle = {},
  onChange,
  open = false,
  addonBefore,
  addonAfter,
}: any) => {
  const timeList: any = [
    Object.keys(new Array(24).fill('')).map((item: any) => {
      return {
        key: Math.random(),
        label: item.padStart(2, 0),
        value: item.padStart(2, 0),
      };
    }),
    Object.keys(new Array(60).fill('')).map((item: any) => {
      return {
        key: Math.random(),
        label: item.padStart(2, 0),
        value: item.padStart(2, 0),
      };
    }),
    Object.keys(new Array(60).fill('')).map((item: any) => {
      return {
        key: Math.random(),
        label: item.padStart(2, 0),
        value: item.padStart(2, 0),
      };
    }),
  ]; // 日期选择
  /**
   * value Change
   */
  useEffect(() => {
    settimes(value ? value.split(':') : []);
    setvalue(value ? value.split(':') : []);
  }, [value]);
  /**
   * 数据转化 转为2维数组渲染
   */
  const [times, settimes] = useState([]); // 最终选中的指
  const [_value, setvalue] = useState(value ? value.split(':') : []); // 内部存选中值容器
  const [_open, setopen] = useState(open);
  /**
   * 内部状态
   */
  let className = _open
    ? 'yld-time-picker yld-time-picker-open'
    : 'yld-time-picker';
  disabled && (className += ' yld-time-picker-disabled');
  const dropDownClassName = dropdownClassName
    ? dropdownClassName + ' yld-time-picker-dropdown'
    : 'yld-time-picker-dropdown';
  /**
   * JSX
   */
  const dropdownColHourRef: any = useRef();
  const dropdownColMinuteRef: any = useRef();
  const dropdownColSecondRef: any = useRef();
  useEffect(() => {
    if (dropdownColHourRef && dropdownColHourRef.current) {
      dropdownColHourRef.current.scrollTop = !isNaN(Number(_value[0]))
        ? 30 * Number(_value[0])
        : 0;
      dropdownColMinuteRef.current.scrollTop = !isNaN(Number(_value[1]))
        ? 30 * Number(_value[1])
        : 0;
      dropdownColSecondRef.current.scrollTop = !isNaN(Number(_value[2]))
        ? 30 * Number(_value[2])
        : 0;
    }
  }, [_open, _value]);
  return (
    <div className={className} style={style}>
      <Input
        suffix={<Icon type="time" />}
        addonBefore={addonBefore}
        disabled={disabled}
        addonAfter={addonAfter}
        placeholder={placeholder}
        value={times.join(':')}
        readOnly
        allowClear={allowClear && times.length > 0}
        onAllowClear={() => {
          setvalue([]);
          typeof onChange === 'function' && onChange('');
        }}
        onFocus={setopen.bind(null, true)}
      />
      {_open && (
        <>
          <div
            className="yld-time-picker-mask"
            onClick={() => {
              setopen(false);
              if (_value.length === timeList.length) {
                // 选择完毕
                settimes(_value);
                typeof onChange === 'function' && onChange(_value.join(':'));
              }
            }}
          />
          <div style={dropdownStyle} className={dropDownClassName}>
            <div className="yld-time-picker-dropdown-value">
              {_value.length === 0 ? placeholder : _value.join(':')}
            </div>
            <div className="yld-time-picker-dropdown-box">
              {timeList.map((item, index) => {
                return (
                  <div
                    className="yld-time-picker-dropdown-col"
                    ref={
                      index === 0
                        ? dropdownColHourRef
                        : index === 1
                        ? dropdownColMinuteRef
                        : dropdownColSecondRef
                    }
                    key={index}
                    style={
                      {
                        // transform: `translateY(${-)}px)`
                      }
                    }
                  >
                    {item.map((option, _index) => {
                      let selelcted = false;
                      if (_value[index] === undefined) {
                        selelcted = _index === 0;
                      } else {
                        selelcted = _value[index] === option.value;
                      }
                      let className = selelcted
                        ? 'yld-time-picker-dropdown-menu yld-time-picker-dropdown-menu-selected'
                        : 'yld-time-picker-dropdown-menu';
                      option.disabled &&
                        (className +=
                          ' yld-time-picker-dropdown-menu-disabled');
                      return (
                        <div
                          key={option.key}
                          className={className}
                          onClick={() => {
                            if (option.disabled) return;
                            for (let i = 0; i < timeList.length; i++) {
                              if (i === index) {
                                _value[i] = option.value;
                              } else if (_value[i] === undefined) {
                                _value[i] = '00';
                              }
                            }
                            setvalue([..._value]);
                          }}
                        >
                          {option.label}
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
