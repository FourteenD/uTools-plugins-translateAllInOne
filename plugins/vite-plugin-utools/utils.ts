interface Options {
  watch?: boolean;
  preloadPath?: string;
  pluginPath?: string;
}
export const isUndef = (val: unknown): val is undefined | null => val == void 0;

export const isObject = (val: unknown): val is Record<any, any> =>
  !!val && typeof val === "object";
export const isString = (val: unknown): val is string =>
  typeof val === "string";

const defaultOptions: Options = {
  watch: true,
  preloadPath: "./src/preload.ts",
  pluginPath: "/plugin.config.ts",
};

export const resolveOptions = (options: Options): RequiredOptions =>
  Object.entries(defaultOptions).reduce((ret, [key, v1]) => {
    // @ts-ignore
    const v2 = options[key];

    ret[key] = isUndef(v2)
      ? v1
      : isObject(v1) && isObject(v2)
      ? { ...v1, ...v2 }
      : v2;

    return ret;
  }, {} as any);
