import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { replitPlugin } from "@replit/vite-plugin-cartographer";
import { runtimeErrorModalPlugin } from "@replit/vite-plugin-runtime-error-modal";
import { shadcnThemePlugin } from "@replit/vite-plugin-shadcn-theme-json";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  base: "/NavneethKManoj/",
  plugins: [
    react(),
    replitPlugin(),
    runtimeErrorModalPlugin(),
    shadcnThemePlugin(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
    },
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
  },
});
