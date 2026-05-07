// Static-site build for GitHub Pages (or any static host).
// Set BASE_PATH env to "/<repo>" when deploying to https://<user>.github.io/<repo>/
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const base = process.env.BASE_PATH?.replace(/\/$/, "") || "";

export default defineConfig({
  cloudflare: false,
  vite: {
    base: base ? `${base}/` : "/",
  },
  tanstackStart: {
    router: { basepath: base || "/" },
    prerender: {
      enabled: true,
      crawlLinks: true,
      failOnError: false,
    },
    pages: [{ path: "/" }],
    server: { entry: "server" },
  },
});
