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
                // Primsero aplica css loader, luego se aplica css loader
                "test": /\.css$/,
                use: [
                    'style-loader',
                   {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                   },
                    
                    'postcss-loader']   
            },
            {
                "test": /\.less$/,
                use: [
                    'style-loader', //inyectar en la pantalla
                    'css-loader',//saber que va a ver css
                    'less-loader'//primer va a ver less
                ]   

            },
            {
                "test": /\.styl$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'stylus-loader',
                ]   
            },
            {
                "test": /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]   
            },
            {
                test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
                use:{
                    loader: 'url-loader',
                    options: {
                        limit: 90000  //9KB
                    }
                } 
                
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
            title: 'webpack-dev-servre from plugin',
            template: path.resolve(__dirname, './index.html')
        })
    ]
}
