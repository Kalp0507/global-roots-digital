// Static-site build: SPA shell + prerendered HTML for every route.
// We disable the Cloudflare Worker plugin so the build emits plain static
// files under dist/client that can be served from any static host
// (GitHub Pages, Netlify, S3, nginx, etc.).
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
