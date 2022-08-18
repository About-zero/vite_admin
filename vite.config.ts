import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 使用@引用
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  server: {
    // ip地址
    host: "localhost",
    // 端口
    port: 9090,
    open: true,
    // 热更新
    hmr: true,
    proxy: {
      "/api": {
        changeOrigin: true,
      },
    },
  },
});
