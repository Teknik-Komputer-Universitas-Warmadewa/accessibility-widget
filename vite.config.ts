import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss(), react()],
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
  build: {
    lib: {
      entry: "./src/widget.tsx",
      formats: ["iife"],
      name: "AccessibilityWidget",
      fileName: () => "accessibility-widget.js",
    },
    rollupOptions: {
      // Ensure CSS is output separately
      output: {
        assetFileNames: "accessibility-widget.[ext]",
      },
    },
    // Enable CSS output
    cssCodeSplit: false, // Bundle all CSS into one file
  },
});
