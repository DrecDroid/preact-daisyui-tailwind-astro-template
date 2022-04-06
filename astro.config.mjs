import preact from "@astrojs/preact";
import { defineConfig } from "astro/config";

export default defineConfig({
  root: ".",
  outDir: "./dist",
  publicDir: "./public",
  build: {
    site: "http://example.com",
    sitemap: true,
  },
  server: {
    host: "localhost",
    port: 3000,
  },
  integrations: [preact()],
});
