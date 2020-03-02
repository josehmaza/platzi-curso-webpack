import React, { useState } from 'react'
import data from './data.json';
import Loader from './loader'
import logo from '../../images/platzi.png'
import video from '../../video/que-es-core.mp4'
import '../../sass/sass.scss'
import '../../less/less.less'
import '../../stylus/stylus.styl'
//import '../../css/postcss.css'

console.log(data)

function App() {
    const [loaderList, setLoaderList] = useState([])
    // se ponse asynnc por que se puede demorar en descargar el archivo
    async function handleClick() {
        setLoaderList(data.loaders);
        const { alerta } = await import('./alert.js');
        alerta('OMG :), este modulo ha cargado dinamicamente')
    }
    return (
        <>
        <p className="sass">Esto es sass</p>
        <p className="less">Esto es less</p>
        <p className="stylus">Esto es stylus</p>
        <p className="post-css">Esto es post-css</p>
            Que linda app en React JS

            <video src={video} width={360} controls poster={logo}></video>
            <p>
                <img src={logo} alt="" width={40}/>
            </p>
            <ul>
                {
                    loaderList.map((item) => (<Loader {...item} key={item.id} />))
                }
            </ul>
            <button onClick={handleClick}>Mostrar lo aprendido hasta el momento</button>
        </>
    )
}

export default App;