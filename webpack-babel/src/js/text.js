const text = () => {
    class Pepe  {
        constructor(){
            console.log('iniciando el constructor')
        }

    }
    let pepe = new Pepe()
    document.body.innerHTML = '<p>Si ves este texto por diez segundos pasan cosas</>'
}

export default text