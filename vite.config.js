import { defineConfig } from "vite";
import mkcert from "vite-plugin-mkcert";
export default {
  server: {
    port: 8888,
    host: "local.dev",
    https: true,
  },
  plugins: [mkcert()],
};
