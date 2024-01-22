import React from 'react'
import { BsCart2 } from "react-icons/bs";
import './CartWidget.css';

const CartWidget = () => {
  return (
    <div className='container'>
        <button className='carritoButton'>
        <BsCart2 />
        </button>
    </div>
  )
}

export default CartWidget