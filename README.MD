Class: Servidor de desarrollo

Para enviar parametros desde npm a sus task se lo hace de la siguiente manera

npm run build:dev-server -- -w

 "scripts": {
    "build:dev-server": "webpack --config ./webpack-dev-server/webpack.external.config.js -w"
  }

Entonces al script build:dev-server se adiciona el parametro -w
para que se actualize el navegador se instala webpack-dev-server (Aqui ya no es necesario enviar -w)
-D = --save-dev
webpack-dev-server -D 

Se corre el comando npm run build:dev-server


Class: Soporte de javascript moderno
install dependencies 
npm i --save-exact --save-dev @babel/core babel-loader @babel/preset-env

Class: Trabajando con javascript moderno

install  @babel/plugin-transform-runtime -D 
npm i -D @babel/plugin-transform-runtime

install no como dependencia de desarrollo @babel/runtime  (Va a jalar el core del runtime y da soporte para que los generadores funcionen de tal manera que se ejecuten ciertas caracteristicas especiales, en este caso se necesitaba usar async, y para eso se instala el plugin @babel/plugin-transform-runtime y es ejcutada sobre @babel/runtime)
npm i --save --save-exact @babel/runtime


class: Soporte de JSX

npm i --save react react

install dependency core
npm i --save react react-dom 

class: Soporte imagenes, fuentes y videos
npm i -D url-loader --save-exact
npm i -D file-loader --save-exact

class: Estilos con preprocesadores
npm install sass-loader stylus-loader less-loader postcss-loader -D --save-exact
npm install --save-exact -D stylus less node-sass

postcss require configuracion extra
npm install --save-dev --save-exact postcss-nested
archivo de configuracion para postcsss

class: Evitar codigo duplicado
se hace uso de splitChunk (configuracion de webpack) para poner en un archivo todo el codigo duplicado, caso contrario, cada archivo js estaria compilandose con todo lo que necesita en un solo archivo y asi x cada uno,

class: COnfiguracion de desarrollo para PLatzi Badges (React.js)
@babel/runtime

webpack
webpack-cli
webpack-dev-server
css-loader
style-loader
file-loader
babel-loader
@babel/core
@babel/preset-env
@babel/preset-react

@babel/plugin-sintax-dynamic-import
       plugin-syntax-dynamic-import
@babel/plugin-transform-runtime
html-webpack-plugin
Tambien se agrega un nuevo plugin x como esta el proyecto 
npm install -D -S @babel/plugin-proposal-class-properties

class: Configuracion basica de produccion
npm install -S -D mini-css-extract-plugin url-loader

class: Congfiguracion optima de produccion para platzi badges
npm install -S -D add-asset-html-webpack-plugin

class: Versionando limpiando y comprimiendo archivos
npm install -D -S clean-webpack-plugin
npm install -D -S optimize-css-assets-webpack-plugin terser-webpack-plugin



