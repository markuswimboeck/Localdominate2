import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: "es2020",
    minify: "esbuild",
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React
          // tslib is shared by Supabase and Radix (react-remove-scroll); in the Supabase chunk it made dialogs load Supabase.
          'react-vendor': ['react', 'react-dom', 'react-router-dom', 'tslib'],
          // Radix UI is deliberately NOT a manual chunk: the forced group pulled shared helpers
          // (Portal, Presence, the JSX runtime) into it, so every page loaded all six Radix packages.
          // Forms
          'forms-vendor': ['react-hook-form', 'zod', '@hookform/resolvers'],
          // Dates
          'date-vendor': ['date-fns'],
          // Query & State
          'query-vendor': ['@tanstack/react-query'],
          // Animation
          'animation-vendor': ['framer-motion'],
          // Supabase
          'supabase-vendor': ['@supabase/supabase-js'],
          // recharts is deliberately NOT a manual chunk: forcing it into one chunk pulled shared
          // helpers into it, so the entry chunk imported the whole 116 KB on every public page.
          // Left to Rollup it stays inside the lazy admin/blog chart pages.
          // lucide-react is deliberately NOT a manual chunk: one chunk held every icon used anywhere
          // on the site and every page loaded it. Left to Rollup, each page gets only its own icons.
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
  esbuild: {
    drop: mode === "production" ? ["console", "debugger"] : [],
  },
}));
