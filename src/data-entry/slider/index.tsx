import { useState, useEffect, useRef } from 'react';
import { Tooltip } from '../../index';

export default ({
  min = 0,
  max = 100,
  disabled = false,
  value = 0,
  onChange,
  style,
  tooltipVisible = null,
}) => {
  const noop = () => {};
  useEffect(() => {
    if (value < min) {
      setvalue(min);
    } else if (value > max) {
      setvalue(max);
    } else {
      setvalue(value);
    }
  }, [value]);
  const [_value, setvalue] = useState(value);
  const [status, setstatus] = useState(false);
  const [position, setposition]: any = useState({});
  const [coefficient, setCoefficient]: any = useState(1); // 系数 1px对应的value
  const sliderRailRef: any = useRef();
  const sliderHandleRef: any = useRef();
  useEffect(() => {
    setposition(sliderHandleRef.current.getBoundingClientRect());
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
            setvalue(parseInt(__value));
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
        {tooltipVisible === null ? (
          <div
            className="yld-slider-handle"
            ref={sliderHandleRef}
            style={{
              left: _value + '%',
              right: 'auto',
              transform: 'translateX(-50%)',
            }}
            onMouseDown={disabled ? noop : setstatus.bind(null, true)}
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
              onMouseDown={disabled ? noop : setstatus.bind(null, true)}
            />
          </Tooltip>
        )}
        {status && (
          <div
            className="yld-slider-mark"
            onMouseUp={() => {
              if (disabled) return;
              setstatus(false);
              let number: any = Math.round(_value);
              typeof onChange === 'function' && onChange(parseInt(number));
            }}
            onMouseMove={({ pageX }) => {
              if (disabled) return;
              if (status) {
                let __value: any =
                  Number(_value) + Number((pageX - position.x) * coefficient);
                if (__value >= min && __value <= max) {
                  setvalue(parseInt(__value));
                }
              }
            }}
          />
        )}
      </div>
    </>
  );
};
