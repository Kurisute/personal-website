import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  // Use to deploy with github Pages
  base: "/personal-website/",
  // base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Yichen's Blog",
      description: "A blog demo for Yichen Xie.",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "谢一辰的Blog",
      description: "谢一辰会在这里灌水",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
