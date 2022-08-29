import { defineConfig } from "vite";
import Inspect from "vite-plugin-inspect";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import utools from "./plugins/vite-plugin-utools";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Inspect(),
    svelte(),
    utools({
      watch: true,
      preloadPath: "./src/preload.ts",
      pluginPath: "./plugin.config.ts",
    }),
  ],
});
