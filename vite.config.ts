import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";

// Copy index.html to 404.html so GitHub Pages serves the SPA for all routes
function copyIndexTo404() {
  return {
    name: "copy-404",
    closeBundle() {
      const outDir = path.resolve(__dirname, "dist");
      const indexPath = path.join(outDir, "index.html");
      const notFoundPath = path.join(outDir, "404.html");
      if (fs.existsSync(indexPath)) {
        fs.copyFileSync(indexPath, notFoundPath);
      }
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Use '/' for root domain (e.g. aesthetic-max.com). For GitHub Pages project
  // site without custom domain, use '/REPO_NAME/' (e.g. '/AestheticMax/').
  base: "/",
  build: {
    outDir: "dist",
  },
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    copyIndexTo404(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
