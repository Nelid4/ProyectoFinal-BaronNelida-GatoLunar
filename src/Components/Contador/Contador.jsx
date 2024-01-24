import { useState } from "react"

export const Contador = () => {

    // contador con hook useState de la 1era forma
const [contador1, setContador1] = useState(1)
const sumar = () => {
    setContador1(contador1 + 1);
}

const restar = () => {
    setContador1(contador1 - 1);
}
//contador con hook useState de la 2da forma
const [contador2, setContador2] = useState(1)



return (
    <div className="contadores">
        <div className="contador1">
            <h3>Primer contador de libros: {contador1}</h3>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
        </div>

        <div className="contador2">
            <h3>Segundo contador de libros: {contador2}</h3>
            <button onClick={() => setContador2(contador2 +1)}>Sumar</button>
            <button onClick={() => setContador2(contador2 -1)}>Restar</button>
        </div>

    </div>




    )
}
export default Contador
