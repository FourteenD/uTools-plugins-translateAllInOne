export declare function PluginInspect(options?: Options): Plugin;
export default function utools() {
  const virtualModuleId = "virtual:my-module";
  const resolvedVirtualModuleId = "\0" + virtualModuleId;
  return [
    {
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
    },
  ];
}
