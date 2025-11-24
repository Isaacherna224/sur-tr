import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },

  plugins: [
    react()
    // No más prerender plugin aquí. Si en el futuro quieres agregar uno compatible, lo revisamos.
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
