const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    context: path.resolve(__dirname, 'public'),
    mode: 'development',
    entry: {
        main: './index.js'
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'eval-source-map',
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                  {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: ''
                    },
                  },
                  'css-loader'
                ],
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                  {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: ''
                    },
                  },
                  'css-loader',
                  'sass-loader'
                ],
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                use: ['file-loader']
            }
        ]
    }
}