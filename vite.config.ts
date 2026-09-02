import path from "path";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), tailwindcss()].filter(Boolean),
  resolve: {
    alias: {
      // 2. Define the @ alias to point to the src folder
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
