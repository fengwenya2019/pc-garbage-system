module.exports = {
  devServer: {
    proxy: {
      "/laji": {
        target: "http://127.0.0.1:8082/IDEASSM_war/",
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