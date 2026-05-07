// Static-site build: prerender every route to HTML, no Worker runtime.
// Uses crawlLinks so the prerenderer follows <Link>s starting from "/".
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  cloudflare: false,
  tanstackStart: {
    prerender: {
      enabled: true,
      crawlLinks: true,
      failOnError: false,
    },
    pages: [{ path: "/" }],
    server: { entry: "server" },
  },
});
