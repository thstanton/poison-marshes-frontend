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
    define: {
      __APP_ENV__: JSON.stringify(env.VITE_VERCEL_ENV),
      __BASE_URL__: JSON.stringify(env.VITE_BASE_URL),
    },
  };
});
