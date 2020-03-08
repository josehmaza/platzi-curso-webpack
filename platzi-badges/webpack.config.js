//common js
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const TersetJSPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
// EL __dirname es apartir de donde esta el archivo de configuracion de webpack
module.exports = {
    entry: {
        app: path.resolve(__dirname, 'src/index.js'),

    },
    //mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].[hash].js',
        publicPath: 'http://localhost:3001/', //(json server)ojo si sube a github pages 
        chunkFilename: 'js/[id].[chunkhash].js'
    },
    optimization: {
        minimizer: [
            new TersetJSPlugin(),
            new OptimizeCSSAssetsPlugin()
        ]
    },
    //loaders
    module: {
        rules: [
            //interceparar los archivos js hacia el babel
            /**
             * 1: babel-loader intercepta .js y los pasa a @babel/core 
             * 2: @babel/core transpila el codigo usando el javascript preset (@babel/preset-env)
             */
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                // Primsero aplica css loader, luego se aplica css loader
                "test": /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    'css-loader'
                   ]
            },
            {
                test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 1000,  //9KB,
                        name: '[hash].[ext]',
                        outputPath: 'assets'
                    }
                }

            }
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].[hash].css',
            chunkFilename: 'css/[id].[hash].css'
        }),
        new HtmlWebpackPlugin({
            //title: 'webpack-dev-servre from plugin',
            template: path.resolve(__dirname, 'public/index.html')
        }),
        new webpack.DllReferencePlugin({
            manifest: require('./modules-manifest.json')
        }),
        new AddAssetHtmlPlugin({
            filepath: path.resolve(__dirname, 'dist/js/*.dll.js'),
            outputPath: 'js',
            publicPath: 'http://localhost:3001/js'
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['**/app.*']
        })
    ],

}
