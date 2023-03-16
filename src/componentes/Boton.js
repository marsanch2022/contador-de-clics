import '../hojas-de-estilo/Boton.css';


/* function Boton(props) {
  return (
    <button>
      {props.texto}
    </button>
  )
} */

// Metodo Desestructurado de usar props
// Linea 18: Condicional if (Operador Terniario). Al ser JavaScript se pone entre llaves

function Boton({ texto, esBotonDeClic, manejarClic }) {
  return (
    <button
      className={ esBotonDeClic ? 'boton-clic' : 'boton-reiniciar' }
      onClick={ manejarClic }>
      {texto}
    </button>
  )
}

export default Boton;