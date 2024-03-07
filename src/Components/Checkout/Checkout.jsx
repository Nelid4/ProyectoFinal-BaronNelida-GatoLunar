import React, { useContext, useState } from 'react';
import { CartContext } from '../CartContext/CartContext';
import { useForm } from 'react-hook-form';
import { collection,addDoc, doc } from 'firebase/firestore';
import {db} from '../../main';
import './Checkout.css'
import { FaArrowRight } from "react-icons/fa";

const Checkout = () => {
    const {cart, totalPrice} = useContext(CartContext)
    const {register, handleSubmit} = useForm();
    const [pedidoId ,setPedidoId] = useState("");

    const comprar = (data) =>{
        const pedido = {
            cliente: data,
            productos: cart,
            total: totalPrice(),
        }
        console.log(pedido)
        const pedidosRef = collection(db, "pedidos");
        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id)
            })
    }

    if (pedidoId) {
        return(
            <div>
                <h1>¡Gracias por su compra!</h1>
                <img src="https://i.pinimg.com/564x/04/5e/d2/045ed2dddda83b90c96fa75dc5b89e25.jpg" alt="gato-astronauta" />
                <p className='mar' ><FaArrowRight />Aqui está el código de tu pedido: {pedidoId}</p>
                <br /><br /><br /><br />
            </div>
        )
    }

  return (
    <div>
        <h1>Completa este formulario antes de pagar:</h1>
        <form onSubmit={handleSubmit(comprar)}>
            <input className='celdaFormulario color1 bradius' type="text" placeholder='Escribí tu nombre'{...register("nombre")}/>
            <input className='celdaFormulario color2 bradius' type="email" placeholder='Ingresá tu mail' {...register("mail")}/>
            <input className='celdaFormulario color3 bradius' type="phone" placeholder='Pasanos tu telefono' {...register("telefono")}/>

            <button className='botonComprar' type='submit'>Ir a Compra</button>

        </form>
    </div>
  )
}

export default Checkout