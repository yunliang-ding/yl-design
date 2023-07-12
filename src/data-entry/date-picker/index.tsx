import { useState, useEffect } from 'react';
import { Select, Button, Input, Icon } from '../../index';
import dateUtil from './components/util';

export default ({
  value,
  onChange,
  placeholder,
  addonBefore,
  addonAfter,
  style,
  allowClear = true,
  disabled = false,
}: any) => {
  useEffect(() => {
    let date = value || new Date().getTime();
    setvalue(value); // update
    updateDateCalendar(date); // 更新时间
  }, [value]);
  let yearList = dateUtil.getYearList(); // 获取年列表
  let monthList = dateUtil.getMonthList(); // 获取月列表
  const [open, setopen] = useState(false);
  const [_value, setvalue] = useState(value);
  const [year, setyear] = useState(dateUtil.date.getFullYear());
  const [month, setmonth] = useState(dateUtil.date.getMonth() + 1);
  const [days, setdays] = useState(value);
  const [calendar, setcalendar] = useState(dateUtil.getCalendar());
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
                onClick={setdays.bind(null, col.dateString)}
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
    setcalendar(dateUtil.getCalendar());
    setyear(dateUtil.date.getFullYear());
    setmonth(dateUtil.date.getMonth() + 1);
    setdays(`${dateUtil.date.getFullYear()}-${month}-${day}`);
  };
  return (
    <>
      <div className="yld-date-picker" style={style}>
        <div className="yld-date-picker-input">
          <Input
            suffix={<Icon type="yldiconweimingmingwenjianjia_rili" />}
            addonBefore={addonBefore}
            disabled={disabled}
            addonAfter={addonAfter}
            placeholder={placeholder}
            value={_value}
            readOnly
            allowClear={allowClear && _value}
            onAllowClear={() => {
              setvalue('');
              updateDateCalendar(new Date()); // 更新时间
              typeof onChange === 'function' && onChange('');
            }}
            onFocus={setopen.bind(null, true)}
          />
        </div>
        {open && (
          <>
            <div className="yld-date-picker-layer" onClick={setopen.bind(null, false)} />
            <div className="yld-date-picker-body">
              <div className="yld-date-picker-body-value">{days || '请选择日期'}</div>
              <div className="yld-date-picker-body-tools">
                <div
                  title="上一年"
                  className="picker-tools-before"
                  onClick={() => {
                    updateDateCalendar(
                      dateUtil.date.getTime() -
                        (dateUtil.isLeapYear() ? 366 : 355) * 24 * 60 * 60 * 1000,
                    );
                  }}
                >
                  <Icon type="yldiconicon-jiantouzuo" />
                </div>
                <div
                  title="上个月"
                  className="picker-tools-before picker-tools-before-month"
                  onClick={() => {
                    updateDateCalendar(
                      dateUtil.date.getTime() -
                        dateUtil.getDateNumberByMonth(dateUtil.date.getMonth() + 1) *
                          24 *
                          60 *
                          60 *
                          1000,
                    );
                  }}
                >
                  <Icon type="yldiconxiangzuoshouqi" />
                </div>
                <div className="picker-tools-date">
                  <Select
                    style={{ border: 0 }}
                    value={year}
                    options={yearList}
                    onChange={(e) => {
                      updateDateCalendar(`${e}-${month}-${dateUtil.date.getDate()}`);
                    }}
                  />
                  <Select
                    style={{ border: 0, width: 80 }}
                    value={month}
                    options={monthList}
                    onChange={(e) => {
                      updateDateCalendar(`${year}-${e}-${dateUtil.date.getDate()}`);
                    }}
                  />
                </div>
                <div
                  title="下个月"
                  className="picker-tools-next picker-tools-next-month"
                  onClick={() => {
                    updateDateCalendar(
                      dateUtil.date.getTime() +
                        dateUtil.getDateNumberByMonth(dateUtil.date.getMonth() + 1) *
                          24 *
                          60 *
                          60 *
                          1000,
                    );
                  }}
                >
                  <Icon type="yldiconzuocedakai" />
                </div>
                <div
                  title="下一年"
                  className="picker-tools-next"
                  onClick={() => {
                    updateDateCalendar(
                      dateUtil.date.getTime() +
                        (dateUtil.isLeapYear() ? 366 : 355) * 24 * 60 * 60 * 1000,
                    );
                  }}
                >
                  <Icon type="yldiconjiantou2" />
                </div>
              </div>
              <div className="yld-date-picker-body-header">{renderHeader()}</div>
              <div className="yld-date-picker-body-calendar">{renderContent()}</div>
              <div className="yld-date-picker-body-footer">
                <Button
                  type="primary"
                  style={{ height: 30, width: 60 }}
                  onClick={() => {
                    setopen(false);
                    setvalue(days);
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
