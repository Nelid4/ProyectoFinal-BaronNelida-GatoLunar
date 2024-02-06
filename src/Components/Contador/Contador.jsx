import { useState } from "react"

export const Contador = () => {

const [contador, setContador] = useState(1)
const sumar = () => {
    setContador(contador + 1);
}

const restar = () => {
    setContador(contador - 1);
}



return (
        <div className="contador">
            <h3>Contador de libros: {contador}</h3>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
        </div>
    )
}
export default Contador
