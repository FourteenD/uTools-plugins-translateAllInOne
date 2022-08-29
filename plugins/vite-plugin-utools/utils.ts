export type Data = Record<any, any>;

export const isUndef = (val: unknown): val is undefined | null => val == void 0;

export const isObject = (val: unknown): val is Data =>
  !!val && typeof val === "object";
export const isString = (val: unknown): val is string =>
  typeof val === "string";
