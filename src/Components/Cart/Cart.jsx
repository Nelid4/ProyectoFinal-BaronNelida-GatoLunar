import React, { useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';
import { Link } from 'react-router-dom';
import './Cart.css';
import { ImBook } from "react-icons/im";
import { TbTrashX } from "react-icons/tb";

const Cart = () => {
    const { cart, removeItem, clearCart } = useContext(CartContext);

    let totalPrice = 0;

    if (cart.length === 0) {
        return (
            <div >
                <h1 className='carritoVacio'>No hay elementos en el carrito</h1>
                <img id='gif' src='https://i.pinimg.com/originals/06/c7/16/06c716a7eaf691cd57a476c240dc1f61.gif' alt="Mi GIF" />
            </div>

        );
    }
    

    return (
        <div>
            {cart.map(item => {
                const { id, title, price, quantity} = item;
                const itemTotalPrice = price * quantity;
                totalPrice = totalPrice + itemTotalPrice;
                return (
                    <div key={id}>
                        <div className='productoComprar'>
                            <ImBook size={50} className='rosa'/>
                            <h3><u>{title}</u></h3>
                            <h4>Cantidad: {quantity}</h4>
                            <h4>Sub total: ${itemTotalPrice}</h4>
                            <button className='amarillo' onClick={() => removeItem(id)}><TbTrashX size={25} className='negro' /></button>
                        </div>
                    </div>
                );
            })}
            <h2>Total: ${totalPrice}</h2>
            <button onClick={() => clearCart()}>Limpiar carrito</button>
            <Link to='/checkout'><button>Continuar con la compra</button></Link>
            <br /> <br /><br /><br /><br />
        </div>
    );
}

export default Cart;
