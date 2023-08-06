import { useState, useEffect, CSSProperties, ReactNode } from 'react';
import { Select, Button, Input, Icon } from '../../index';
import dateUtil from './util';

export interface DatePickerProps {
  /** 值 */
  value?: string;
  /** 改变的钩子 */
  onChange?: Function;
  /** 提示文案 */
  placeholder?: string;
  /** 前缀 */
  addonBefore?: ReactNode;
  /** 后缀 */
  addonAfter?: ReactNode;
  /** 样式 */
  style?: CSSProperties;
  /** 是否清空 */
  allowClear?: boolean;
  /** 是否禁用 */
  disabled?: boolean;
  /** 禁用时间段 */
  disabledDate?: Function;
}

export default ({
  value,
  onChange,
  placeholder,
  addonBefore,
  addonAfter,
  style,
  allowClear = true,
  disabled = false,
}: DatePickerProps) => {
  useEffect(() => {
    let date = value || new Date().getTime();
    setValue(value); // update
    updateDateCalendar(date); // 更新时间
  }, [value]);
  let yearList = dateUtil.getYearList(); // 获取年列表
  let monthList = dateUtil.getMonthList(); // 获取月列表
  const [_value, setValue] = useState(value);
  const [open, setOpen] = useState(false);
  const [year, setYear] = useState(dateUtil.date.getFullYear());
  const [month, setMonth] = useState(dateUtil.date.getMonth() + 1);
  const [days, setDays] = useState(value);
  const [calendar, setCalendar] = useState(dateUtil.getCalendar());
  const renderHeader = () => {
    return ['日', '一', '二', '三', '四', '五', '六'].map((item) => {
      return (
        <div className="yld-picker-header-item" key={item}>
          {item}
        </div>
      );
    });
  };
  const renderContent = () => {
    return calendar.map((row: any, index) => {
      return (
        <div className="yld-picker-calendar-row" key={index}>
          {row.map((col) => {
            return (
              <div
                key={col.dateString}
                className={
                  col.dateString === days
                    ? 'yld-picker-calendar-row-col-active'
                    : col.current
                    ? 'yld-picker-calendar-row-col-current'
                    : col.currentMonth
                    ? 'yld-picker-calendar-row-col-current-month'
                    : 'yld-picker-calendar-row-col'
                }
                onClick={setDays.bind(null, col.dateString)}
              >
                <div className="yld-picker-calendar-inner">{col.date}</div>
              </div>
            );
          })}
        </div>
      );
    });
  };
  const updateDateCalendar = (date) => {
    // 更新时间
    let month: any = dateUtil.date.getMonth() + 1;
    let day: any = dateUtil.date.getDate();
    month = month > 9 ? month : '0' + month; // safari 不兼容不标准的字符转日期
    day = day > 9 ? day : '0' + day; // safari 不兼容不标准的字符转日期
    dateUtil.setDate(new Date(date));
    setCalendar(dateUtil.getCalendar());
    setYear(dateUtil.date.getFullYear());
    setMonth(dateUtil.date.getMonth() + 1);
    setDays(`${dateUtil.date.getFullYear()}-${month}-${day}`);
  };
  return (
    <>
      <div className="yld-date-picker" style={style}>
        <div className="yld-date-picker-input">
          <Input
            suffix={<Icon type="weimingmingwenjianjia_rili" />}
            showCount={false}
            addonBefore={addonBefore}
            disabled={disabled}
            addonAfter={addonAfter}
            placeholder={placeholder}
            value={_value}
            readOnly
            allowClear={allowClear}
            onAllowClear={() => {
              setValue(undefined);
              updateDateCalendar(new Date()); // 更新时间
              typeof onChange === 'function' && onChange(undefined);
            }}
            onFocus={setOpen.bind(null, true)}
          />
        </div>
        {open && (
          <>
            <div
              className="yld-date-picker-layer"
              onClick={setOpen.bind(null, false)}
            />
            <div className="yld-date-picker-body">
              <div className="yld-date-picker-body-value">
                {days || '请选择日期'}
              </div>
              <div className="yld-date-picker-body-tools">
                <div
                  title="上一年"
                  className="picker-tools-before"
                  onClick={() => {
                    updateDateCalendar(
                      dateUtil.date.getTime() -
                        (dateUtil.isLeapYear() ? 366 : 355) *
                          24 *
                          60 *
                          60 *
                          1000,
                    );
                  }}
                >
                  <Icon type="icon-jiantouzuo" />
                </div>
                <div
                  title="上个月"
                  className="picker-tools-before picker-tools-before-month"
                  onClick={() => {
                    updateDateCalendar(
                      dateUtil.date.getTime() -
                        dateUtil.getDateNumberByMonth(
                          dateUtil.date.getMonth() + 1,
                        ) *
                          24 *
                          60 *
                          60 *
                          1000,
                    );
                  }}
                >
                  <Icon type="xiangzuoshouqi" />
                </div>
                <div className="picker-tools-date">
                  <Select
                    style={{ border: 0 }}
                    value={year}
                    options={yearList}
                    onChange={(e) => {
                      updateDateCalendar(
                        `${e}-${month}-${dateUtil.date.getDate()}`,
                      );
                    }}
                  />
                  <Select
                    style={{ border: 0, width: 80 }}
                    value={month}
                    options={monthList}
                    onChange={(e) => {
                      updateDateCalendar(
                        `${year}-${e}-${dateUtil.date.getDate()}`,
                      );
                    }}
                  />
                </div>
                <div
                  title="下个月"
                  className="picker-tools-next picker-tools-next-month"
                  onClick={() => {
                    updateDateCalendar(
                      dateUtil.date.getTime() +
                        dateUtil.getDateNumberByMonth(
                          dateUtil.date.getMonth() + 1,
                        ) *
                          24 *
                          60 *
                          60 *
                          1000,
                    );
                  }}
                >
                  <Icon type="zuocedakai" />
                </div>
                <div
                  title="下一年"
                  className="picker-tools-next"
                  onClick={() => {
                    updateDateCalendar(
                      dateUtil.date.getTime() +
                        (dateUtil.isLeapYear() ? 366 : 355) *
                          24 *
                          60 *
                          60 *
                          1000,
                    );
                  }}
                >
                  <Icon type="jiantou2" />
                </div>
              </div>
              <div className="yld-date-picker-body-header">
                {renderHeader()}
              </div>
              <div className="yld-date-picker-body-calendar">
                {renderContent()}
              </div>
              <div className="yld-date-picker-body-footer">
                <Button
                  type="primary"
                  style={{ height: 30, width: 60 }}
                  onClick={() => {
                    setOpen(false);
                    setValue(days);
                    typeof onChange === 'function' && onChange(days);
                  }}
                >
                  确定
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
