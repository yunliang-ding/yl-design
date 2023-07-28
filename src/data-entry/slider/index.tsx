import { useState, useEffect, useRef, CSSProperties } from 'react';
import { Tooltip } from '../../index';

interface SliderProps {
  /** 值 */
  value?: number;
  /** 类名 */
  className?: string;
  /** 是否禁用 */
  disabled?: boolean;
  /** 样式 */
  style?: CSSProperties;
  /** 改变钩子 */
  onChange?: Function;
  /** 最小范围 */
  min?: number;
  /** 最大范围 */
  max?: number;
  /** 是否提示 */
  tooltipVisible?: boolean;
}

export default ({
  min = 0,
  max = 100,
  disabled = false,
  value = 0,
  onChange,
  style,
  tooltipVisible = false,
}: SliderProps) => {
  const noop = () => {};
  useEffect(() => {
    if (value < min) {
      setValue(min);
    } else if (value > max) {
      setValue(max);
    } else {
      setValue(value);
    }
  }, [value]);
  const [_value, setValue] = useState(value);
  const [status, setStatus] = useState(false);
  const [position, setPosition]: any = useState({});
  const [coefficient, setCoefficient]: any = useState(1); // 系数 1px对应的value
  const sliderRailRef: any = useRef();
  const sliderHandleRef: any = useRef();
  useEffect(() => {
    setPosition(sliderHandleRef.current.getBoundingClientRect());
    setCoefficient(
      Number(
        100 /
          (sliderRailRef.current.getBoundingClientRect().width ||
            (style && style.width)),
      ).toFixed(2),
    );
  }, [_value]);
  return (
    <>
      <div
        ref={sliderRailRef}
        className={disabled ? 'yld-slider yld-slider-disabled' : 'yld-slider'}
        style={style}
        onClick={({ pageX }) => {
          if (disabled) return;
          const { x } = sliderHandleRef.current.getBoundingClientRect();
          let __value: any = Number(_value) + Number((pageX - x) * coefficient);
          if (__value >= min && __value <= max) {
            setValue(parseInt(__value));
            let number: any = Math.round(__value);
            typeof onChange === 'function' && onChange(parseInt(number));
          }
        }}
      >
        <div className="yld-slider-rail" />
        <div
          className="yld-slider-track"
          style={{ left: '0%', right: 'auto', width: _value + '%' }}
        />
        <div className="yld-slider-step" />
        {!tooltipVisible ? (
          <div
            className="yld-slider-handle"
            ref={sliderHandleRef}
            style={{
              left: _value + '%',
              right: 'auto',
              transform: 'translateX(-50%)',
            }}
            onMouseDown={disabled ? noop : setStatus.bind(null, true)}
          />
        ) : (
          <Tooltip title={_value} visible={tooltipVisible} theme="dark">
            <div
              className="yld-slider-handle"
              ref={sliderHandleRef}
              style={{
                left: _value + '%',
                right: 'auto',
                transform: 'translateX(-50%)',
              }}
              onMouseDown={disabled ? noop : setStatus.bind(null, true)}
            />
          </Tooltip>
        )}
        {status && (
          <div
            className="yld-slider-mark"
            onMouseUp={() => {
              if (disabled) return;
              setStatus(false);
              let number: any = Math.round(_value);
              typeof onChange === 'function' && onChange(parseInt(number));
            }}
            onMouseMove={({ pageX }) => {
              if (disabled) return;
              if (status) {
                let __value: any =
                  Number(_value) + Number((pageX - position.x) * coefficient);
                if (__value >= min && __value <= max) {
                  setValue(parseInt(__value));
                }
              }
            }}
          />
        )}
      </div>
    </>
  );
};
