// Static-site build: prerender every route to HTML, no Worker runtime.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  cloudflare: false,
  tanstackStart: {
    spa: { enabled: true },
    pages: [
      { path: "/", prerender: { enabled: true } },
      { path: "/about", prerender: { enabled: true } },
      { path: "/products", prerender: { enabled: true } },
      { path: "/supply-chain", prerender: { enabled: true } },
      { path: "/investors", prerender: { enabled: true } },
      { path: "/contact", prerender: { enabled: true } },
    ],
    server: { entry: "server" },
  },
});
