import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import {
  hostingSlidesCopyIntegration,
  hostingSlidesPublicPlugin,
} from "./hosting-slides-plugin.mjs";

export default defineConfig({
  prefetch: true,
  site: "https://slides.zrr.dev",
  i18n: {
    locales: ["en", "zh-cn"],
    defaultLocale: "zh-cn",
  },
  integrations: [hostingSlidesCopyIntegration()],
  vite: {
    plugins: [hostingSlidesPublicPlugin(), tailwindcss()],
  },
});
