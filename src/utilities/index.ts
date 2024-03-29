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

export function range(limit: number) {
  return [...Array.from(Array(limit).keys())];
}

export function fakestoreUrlReplaceFix(url: string) {
  if (!url) return '';
  return url.replace('fakestoreapi', 'fakestoreapi.herokuapp');
}

export { validEmailRegex } from "./FormUtility";
export { PopupUtility } from "./PopupUtility";
export { showToast } from "./ToastUtil";
export { StorageManager } from "./StorageManager";
