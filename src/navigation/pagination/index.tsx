import { useState, useEffect } from 'react';
import { Input, Select, Icon } from '../../index';

export default ({
  current = 1,
  pageSize = 10,
  total,
  onChange,
  pageSizeOptions,
  onPageSizeChange,
  showJumper,
}: any) => {
  const [_current, setcurrent] = useState(current);
  const [_pageSize, setpageSize] = useState(pageSize);
  /**
   * update
   */
  useEffect(() => {
    setcurrent(current);
  }, [current]);
  useEffect(() => {
    setpageSize(pageSize);
  }, [pageSize]);
  const pageChange = (current) => {
    setcurrent(current);
    typeof onChange === 'function' && onChange(current);
  };
  let totalPage = Math.ceil(total / _pageSize);
  let page = [];
  let arr = [1];
  if (totalPage > 8) {
    // 默认大于8 转为更多模式
    if (_current > 5 && _current + 5 < totalPage) {
      arr.push(
        -1,
        _current - 2,
        _current - 1,
        _current,
        _current + 1,
        _current + 2,
        -2,
      );
    } else if (_current + 5 >= totalPage) {
      arr.push(
        -1,
        totalPage - 5,
        totalPage - 4,
        totalPage - 3,
        totalPage - 2,
        totalPage - 1,
      );
    } else {
      arr.push(2, 3, 4, 5, 6, -2);
    }
    arr.push(totalPage);
    arr.forEach((item) => {
      page.push(
        <div
          key={Math.random()}
          className={
            _current === item
              ? 'yld-pagination-item-active'
              : 'yld-pagination-item'
          }
          onClick={() => {
            if (item === -1) {
              pageChange(_current - 5);
            } else if (item === -2) {
              pageChange(_current + 5);
            } else {
              pageChange(item);
            }
          }}
        >
          {[-1, -2].indexOf(item) > -1 ? <Icon type="moreread" /> : item}
        </div>,
      );
    });
  } else {
    for (let i = 1; i < totalPage + 1; i++) {
      page.push(
        <div
          key={Math.random()}
          className={
            _current === i
              ? 'yld-pagination-item-active'
              : 'yld-pagination-item'
          }
          onClick={() => {
            pageChange(i);
          }}
        >
          {i}
        </div>,
      );
    }
  }
  return (
    <>
      <div className="yld-pagination">
        <div
          className={
            _current == 1 ? 'yld-pagination-pre-disabled' : 'yld-pagination-pre'
          }
          onClick={() => {
            if (_current != 1) {
              pageChange(_current - 1);
            }
          }}
        >
          <Icon type="icon-jiantouzuo" />
        </div>
        {page}
        <div
          className={
            _current == totalPage
              ? 'yld-pagination-next-disabled'
              : 'yld-pagination-next'
          }
          onClick={() => {
            if (_current !== totalPage) {
              pageChange(_current + 1);
            }
          }}
        >
          <Icon type="jiantou2" />
        </div>
        {pageSizeOptions && (
          <div className="yld-pagination-jump">
            <Select
              style={{ width: 104, height: 32 }}
              value={_pageSize}
              onChange={(pageSize) => {
                setcurrent(1);
                setpageSize(pageSize);
                typeof onPageSizeChange === 'function' &&
                  onPageSizeChange(pageSize);
              }}
              options={pageSizeOptions.map((value) => {
                return {
                  label: `每页${value}条`,
                  value,
                };
              })}
            />
          </div>
        )}
        {showJumper && (
          <div className="yld-pagination-jump">
            <span className="yld-pagination-jump-label">跳转至</span>
            <Input
              style={{ width: 80 }}
              min={1}
              onBlur={(e) => {
                let current = parseInt(e.target.value);
                if (!isNaN(current)) {
                  setcurrent(current > totalPage ? totalPage : current);
                  typeof onChange === 'function' && onChange(current);
                }
              }}
            />
            <span>页</span>
          </div>
        )}
        <span className="yld-pagination-total">共 {total} 条</span>
      </div>
    </>
  );
};
