import { Plugin } from "vite";
interface Options {
  watch?: boolean;
  preloadPath?: string;
  pluginPath?: string;
}
export default function utools(options: Options): Plugin {
  // 默认配置
  options.watch = options.watch || true;
  options.preloadPath = options.preloadPath || "./src/preload.ts";
  options.pluginPath = options.pluginPath || "./plugin.config.ts";
  const virtualModuleId = "virtual:my-module";
  const resolvedVirtualModuleId = "\0" + virtualModuleId;

  return {
    name: "vite-plugin-utools",
    resolveId(id) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId;
      }
    },
    load(id) {
      if (id === resolvedVirtualModuleId) {
        return `export const msg = "from virtual module"`;
      }
    },
    transform() {},
  };
}
