import { defineConfig } from "vite";

// Node.js:
import { extname, relative, resolve } from "path";
import { fileURLToPath } from "node:url";
import { glob } from "glob";

// Plugins:
import react from "@vitejs/plugin-react-swc";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import dts from "vite-plugin-dts";

// Global Config:
export default defineConfig({
  plugins: [react(), dts({ include: ["src"] }), libInjectCss()],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, "src/main.ts"),
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "react/jsx-runtime"],
      input: Object.fromEntries(
        glob
          .sync("src/**/*.{ts,tsx}")
          .map((file) => [
            relative("src", file.slice(0, file.length - extname(file).length)),
            fileURLToPath(new URL(file, import.meta.url)),
          ])
      ),
      output: {
        assetFileNames: "assets/[name][extname]",
        entryFileNames: "[name].js",
      },
    },
  },
});
