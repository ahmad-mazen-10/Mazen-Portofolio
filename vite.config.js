import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "three-stdlib/libs/lottie.js": "/dev/null",
    },
  },
  build: {
    outDir: "dist",
    rollupOptions: {
      external: ["three-stdlib"],
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react")) return "react";
            if (id.includes("three")) return "three";
            return "vendor";
          }
        },
      },
    },
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        unsafe: true,
      },
    },
    chunkSizeWarningLimit: 1000,
  },
});
