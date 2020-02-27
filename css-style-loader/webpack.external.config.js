//common js
const path = require('path')
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
            {
                "test": /\.css$/,
                use: [
                    //Luego se ejecuta esto
                    'style-loader', 
                    // Primsero se ejecuta esto
                    'css-loader']   
            }
        ]
    }
}
