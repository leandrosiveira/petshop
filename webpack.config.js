const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  target: "web",
  mode: 'development', // Pode ser 'development' ou 'production'
  entry: path.resolve(__dirname, "src", "main.js"), // Arquivo de entrada
  output: {
    path: path.resolve(__dirname, 'dist', 'src'),
    filename: 'main.js', // Arquivo final empacotado
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 3000, // Porta do servidor
    open: true, // Abre automaticamente no navegador
    liveReload: true, // Recarrega toda pagina a cada mudança, existe o hot que recarrega apenas o alterado.
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          process.env.NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.js$/, // Aplica a todos os arquivos .js
        exclude: /node_modules/, // Ignora a pasta node_modules
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          }
        },
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'), // Arquivo HTML base
      favicon: path.resolve("src", "assets", "icons", "dog-favicon.svg")
    }),
    new MiniCssExtractPlugin({
      filename: 'main.css' // Gera um arquivo separado para o CSS
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, "src", "assets"), 
          to: path.resolve(__dirname, "dist", "src", "assets") 
        }, // Copia a pasta "assets" para "dist/assets"
      ],
    }),
  ],
};
