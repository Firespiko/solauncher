import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { nodePolyfills } from "vite-plugin-node-polyfills";

export default defineConfig({
  plugins: [
    react(),
    nodePolyfills({
      include: ["process"], // polyfills only process (add more if needed)
      globals: { process: true, global: true },
    }),
  ],
});
