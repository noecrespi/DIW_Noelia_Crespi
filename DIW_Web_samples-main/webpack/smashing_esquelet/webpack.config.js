const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const ColoredProgressBar = require('colored-progress-bar-webpack-plugin');

// PROBANDO MANIFEST
//const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

module.exports = {
    entry: "./src/js/main.js",
    mode: "development", 
    plugins: [
        new ColoredProgressBar(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            
    }),
    new CopyPlugin({
        patterns: [
            { from: './src/img', to: 'img' },
        ]
    }),
    // new WebpackManifestPlugin(),
    ],
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [ // rules es un array de objetos
        {
            test: /\.css$/, // Esta regla procesa archivos CSS
            use: [
              'style-loader', // Cargar estilos en línea en el archivo HTML
              'css-loader'    // Cargar archivos CSS
            ]
            },
            {
                test: /\.(png|jpg|jpeg)$/i, // PARA IMAGENES
                type: 'asset/resource',
            },
            {
                test: /\.s[ac]ss$/i, // Esta regla procesa archivos SASS
                use: [
                'style-loader', // Cargar estilos en línea en el archivo HTML
                'css-loader',   // Cargar archivos CSS
                // 'sass-loader'   // Compilar archivos SASS a CSS
                ]
            }
            ]
        }
};