const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  chainWebpack: (config) => {
    // Ajoutez la règle pour le chargement des fichiers HTML avec html-loader
    config.module
      .rule('html')
      .test(/\.html$/)
      .use('html-loader')
      .loader('html-loader')
      .end();

    config.module
      .rule('pdf')
      .test(/\.(pdf)$/)
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: '[name].[ext]'
      })
      .end();
  }
};