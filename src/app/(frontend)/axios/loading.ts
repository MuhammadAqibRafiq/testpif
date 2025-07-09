// src/utils/loading.ts
let isLoading = false;
let listeners: ((val: boolean) => void)[] = [];

export const setLoading = (value: boolean) => {
  isLoading = value;
  listeners.forEach((cb) => cb(isLoading));
};

export const subscribeLoading = (cb: (val: boolean) => void) => {
  listeners.push(cb);
  return () => {
    listeners = listeners.filter((l) => l !== cb); // unsubscribe
  };
};

export const getLoading = () => isLoading;
