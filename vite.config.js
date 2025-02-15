import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: "jsx", // Changed this line - loader should be a single string
    include: /\.[jt]sx?$/,
  },
  optimizeDeps: {
    esbuild: {
      loader: {
        ".js": "jsx",
        ".jsx": "jsx",
      },
    },
  },
  resolve: {
    alias: {
      "three-stdlib/libs/lottie.js": "/dev/null",
    },
    extensions: [".js", ".jsx", ".ts", ".tsx"],
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
