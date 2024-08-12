import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],
    css: {
      postcss: {
        plugins: [tailwindcss()],
      },
    },
    server: {
      proxy: {
        "/api/local": {
          target: "http://localhost:3000",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\/local/, ""),
        },
      },
    },
    define: {
      __APP_ENV__: JSON.stringify(env.VITE_VERCEL_ENV),
      __BASE_URL__: JSON.stringify(env.VITE_BASE_URL),
      __DEV_BASE_URL__: JSON.stringify(env.VITE_VERCEL_URL),
      __PROD_BASE_URL__: JSON.stringify(env.VITE_VERCEL_PROJECT_PRODUCTION_URL),
    },
  };
});
