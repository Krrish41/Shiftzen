import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => ({
  // Keep local dev simple while building asset paths for GitHub Pages.
  base: command === "build" ? "/Shiftzen/" : "/",
  plugins: [react()],
}));
