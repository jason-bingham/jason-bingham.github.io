import { resolve } from "path";
import { defineConfig } from "vite";
import htmlPurge from "vite-plugin-purgecss";

export default defineConfig({
  root: resolve(__dirname, "src/"),
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        home: resolve(__dirname, "src/index.html"),
        // about: resolve(__dirname, "about/index.html"),
        // contact: resolve(__dirname, "contact/index.html"),
      },
    },
  },
  plugins: [htmlPurge()],
});
