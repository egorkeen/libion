import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": resolve(__dirname, "src/components"),
      "@utils/hooks": resolve(__dirname, "src/utils/hooks"),
      "@utils/helpers": resolve(__dirname, "src/utils/helpers"),
      "@utils/constants": resolve(__dirname, "src/utils/constants"),
      "@utils/types": resolve(__dirname, "src/utils/types"),
      "@utils/transformers": resolve(__dirname, "src/utils/transformers"),
      "@assets": resolve(__dirname, "src/assets"),
      "@pages": resolve(__dirname, "src/pages"),
      "@store": resolve(__dirname, "src/store"),
      "@store/*": resolve(__dirname, "src/store/*"),
    },
  },
});
