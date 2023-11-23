module.exports = {
    // ...autres configurations de webpack...
    module: {
      rules: [
        // ...autres règles de chargement...
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader'
            }
          ]
        },
        {
          test: /\.(.pdf)$/,
          use:[
            {
              loader: 'file-loader',
              option: {
                name: '[name].[ext]'
              }
            } 
          ]
        }
      ]
    }
  };