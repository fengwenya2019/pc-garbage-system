module.exports = {
  devServer: {
    proxy: {
      "/laji": {
        target: "http://127.0.0.1:8282/",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/laji": ""
        },
        cookieDomainRewrite: {
          "*": "127.0.0.1"
        }
      }
    },
  }
}