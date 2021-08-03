

module.exports = {
  publicPath : './',
  configureWebpack: {
    devServer: {
      
    //   https: {
    //     key: fs.readFileSync('./src/certification/star.samitivejhospitals.com.bundle.crt'),
    //     cert: fs.readFileSync('./src/certification/star.samitivejhospitals.com.key'),
    //     // ca: fs.readFileSync('./src/certification/CER - CRT Files/My_CA_Bundle.ca-bundle'),
    // },
      headers: { "Access-Control-Allow-Origin": "*" }
    }
  },
  css: {
    loaderOptions: {
      // pass options to sass-loader
      // @/ is an alias to src/
      // so this assumes you have a file named `src/variables.sass`
      // Note: this option is named as "data" in sass-loader v7
      sass: {
        prependData: `@import "~@/assets/scss/buefy.scss";`
      },
      // by default the `sass` option will apply to both syntaxes
      // because `scss` syntax is also processed by sass-loader underlyingly
      // but when configuring the `data` option
      // `scss` syntax requires an semicolon at the end of a statement, while `sass` syntax requires none
      // in that case, we can target the `scss` syntax separately using the `scss` option
      scss: {
        prependData: `@import "~@/assets/scss/buefy.scss";`
      }
      // pass Less.js Options to less-loade
    }
  }
}