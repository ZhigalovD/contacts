module.exports = {
  css: {
    loaderOptions: {
      less: {
        additionalData: `@import "~@/assets/global.less"; @import "~@/assets/variables/text.less"; @import "~@/assets/variables/color.less";`,
      },
    },
  },
  devServer: {
    port: process.env.VUE_APP_LOCALHOST,
  },
  publicPath: process.env.NODE_ENV === "production" ? "/contacts/" : "/",
};
