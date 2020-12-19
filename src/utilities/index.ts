export function throttle(fn: any, timeInMs: number) {
  let timeout: any = null;
  return (...args: any[]) => {
    if (timeout) return;
    timeout = setTimeout(function (this: any) {
      const context = this;
      fn.apply(context, args);
      timeout = null;
    }, timeInMs);
  };
}

export function debounce(fn: any, timeInMs: number) {
  let timeout: any;
  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(function (this: any) {
      fn.apply(this, args);
    }, timeInMs);
  };
}
