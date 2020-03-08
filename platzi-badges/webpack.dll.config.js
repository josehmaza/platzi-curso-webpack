//common js
const path = require('path')

const webpack = require('webpack');

module.exports = {
    entry: {
        //se generara un bundle modules
        modules: [
            'react',
            'react-dom',
            'react-router-dom',
        ]
    },
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].[hash].dll.js', // exportara como modules.js, 
        library: '[name]' // va a se una libreria
    },

    plugins: [
       new webpack.DllPlugin({
           name: '[name]',
           path: path.join(__dirname, '[name]-manifest.json')
       })
    ],

}
