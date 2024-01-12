const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/js/application.js',
    // mode: 'development',
    // modo produccion 
    mode: 'production',
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                // implenents file .css
                test: /\.css$/,
                use: [
                    'style-loader', //implement CSS in DOM
                    'css-loader' // translates CSS into CommonJS resolve dependencies
                ]
            },
            {
                // implenents file .sassy .scss
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader', //implement CSS in DOM
                    'css-loader',  // translates CSS into CommonJS resolve dependencies
                    'sass-loader' // compiles Sass to CSS, using Node Sass by default
                ]
            }
        ]
    }, 
    performance: { hints: false }
};