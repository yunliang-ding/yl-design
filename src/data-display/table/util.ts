export const debounce = (fn, delay = 10) => {
  if (typeof fn !== 'function') {
    // 参数类型为函数
    throw new TypeError('fn is not a function');
  }
  let timer = null;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.call(this, ...args);
    }, delay);
  };
};
