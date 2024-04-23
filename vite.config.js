import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      "process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY": JSON.stringify(
        env.REACT_APP_STRIPE_PUBLISHABLE_KEY
      ),
      "process.env.STRIPE_SECRET_KEY": JSON.stringify(env.STRIPE_SECRET_KEY),
    },
    plugins: [react()],
  };
});
