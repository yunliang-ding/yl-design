import * as _BigNumber from 'bignumber.js';

const BigNumberjs: any = _BigNumber;

export const isEmpty = (param: any) => {
  if (param === null || param === undefined) {
    return true;
  }
  if (Array.isArray(param)) {
    return param.length === 0;
  }
  if (typeof param === 'string') {
    return param.trim() === '';
  }
  if (typeof param === 'object') {
    return Object.keys(param).length === 0;
  }
  return false;
};

/** 浮点数运算 */
export const BigNumber = {
  /** 加 */
  add: (...args: any[]) => calculate(args, 'plus'),
  /** 减 */
  minus: (...args: any[]) => calculate(args, 'minus'),
  /** 乘 */
  multiplie: (...args: any[]) => calculate(args, 'multipliedBy'),
  /** 除 */
  divided: (...args: any[]) => calculate(args, 'dividedBy'),
};

const calculate: any = (
  args: any[],
  type: 'plus' | 'minus' | 'multipliedBy' | 'dividedBy',
) => {
  return Number(
    args
      .reduce((a, b) => {
        return new BigNumberjs(a)[type](new BigNumberjs(b));
      })
      .toString(),
  );
};
