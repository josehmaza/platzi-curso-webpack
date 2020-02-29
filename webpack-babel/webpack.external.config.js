//common js
const path = require('path')

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

// EL __dirname es apartir de donde esta el archivo de configuracion de webpack
module.exports = {
    entry: {
        home: path.resolve(__dirname,'src/js/index.js')       

    },
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
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
                "test": /\.css$/,
                use: [
                    'style-loader',
                   /* {
                        loader: MiniCssExtractPlugin.loader
                    },*/
                    // Primsero se ejecuta esto, entien que puede enconstrar un css en js,
                    'css-loader']   
            }
        ]
    },
    // configuracion para el dev server
    devServer: {
        hot:true,
        open: true,
        port: 8081
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        /*new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        }),*/
        new HtmlWebpackPlugin({
            title: 'webpack-dev-servre from plugin'
        })
    ]
}
