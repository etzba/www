import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import commonjs from "vite-plugin-commonjs";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    commonjs(),
  ],
  resolve: {
    alias: {
      src: "/src",
    },
  },
  build: {
    commonjsOptions: { transformMixedEsModules: true } // Change
  },
  server: {
    host: true, // to allow testing with other devices in LAN
  }
});