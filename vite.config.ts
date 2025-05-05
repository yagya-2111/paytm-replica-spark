import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
<<<<<<< HEAD

// Component tagging configuration
=======
import { componentTagger } from "lovable-tagger";
>>>>>>> a81c19c (Use tech stack vite_react_shadcn_ts)

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
<<<<<<< HEAD
  ],
=======
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
>>>>>>> a81c19c (Use tech stack vite_react_shadcn_ts)
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
