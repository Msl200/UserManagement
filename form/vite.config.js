// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(),tailwindcss()],
// })
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteCompression from "vite-plugin-compression";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    viteCompression({
      algorithm: "brotliCompress", // برای Brotli
      ext: ".br", // پسوند فایل خروجی
      deleteOriginFile: false, // اگر false باشه فایل اصلی رو هم نگه می‌داره
    }),
    viteCompression({
      algorithm: "gzip", // برای Gzip
      ext: ".gz",
      deleteOriginFile: false,
    }),
    ,
  ],
});
