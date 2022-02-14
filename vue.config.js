const path = require("path");
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/portal-client/" : "/",

  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src/"),
        "@varscss": path.resolve(
          __dirname,
          "./src/assets/scss/_variables.scss"
        ),
      },
    },
  },

  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "ru",
      localeDir: "locales",
      enableInSFC: false,
      includeLocales: false,
      enableBridge: true,
    },
  },
};
