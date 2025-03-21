import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss(), react()],
  build: {
    lib: {
      entry: "./src/widget.tsx",
      formats: ["iife"],
      name: "AccessibilityWidget",
      fileName: () => "accessibility-widget.js",
    },
    rollupOptions: {
      // external: ["react", "react-dom"],
      // output: {
      //   globals: {
      //     react: "React",
      //     "react-dom": "ReactDOM",
      //   },
      // },
    },
  },
});
