import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// Prevent source map errors from appearing when building the app
import preserveDirectives from "rollup-preserve-directives";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), preserveDirectives()],
  server: {
    // This attribute allows us to access the site within our home network
    host: "192.168.100.168", // Making the server accessible within my home's IP address
    port: 3000, // Default port for Vite
    open: true,
  },
  build: {
    sourcemap: true,
  },
});
