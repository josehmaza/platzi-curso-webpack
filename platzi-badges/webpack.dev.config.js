//common js
const path = require('path')
//const MiniCssExtractPlugin = require('mini-css-extract-plugin') toma mucho tiempo
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

// EL __dirname es apartir de donde esta el archivo de configuracion de webpack
module.exports = {
    entry: {
        app: path.resolve(__dirname, 'src/index.js'),
    },
    //mode: 'developpment',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js',
        publicPath: 'http://localhost:9000/',//'dist/', //tambn se configura cdn aqui
        chunkFilename: 'js/[id].[chunkhash].js'
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
                    'css-loader']
            },
            {
                test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
                use: {
                    loader: 'file-loader', // podria dar mas rendimiento en desarrollo
                    options: {
                        outputPath: 'assets/'
                    }
                }

            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            //title: 'webpack-dev-servre from plugin',
            template: path.resolve(__dirname, 'public/index.html')
        })
    ],

    // COnfigurar el dev server
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'), //ojo
        open: true,
        hot: true,
        port: 9000 
    }

}
