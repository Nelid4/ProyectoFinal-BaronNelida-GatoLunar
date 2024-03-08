import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Contador from '../Contador/Contador';
import './ItemDetail.css'

const ItemDetail = ({ libro, cantidadAgregada, handleOnAdd }) => {
    return (
        <div className='detail'>
            <img className='imgDetail' src={libro.img} alt={libro.title} />
            <Card className='cardDetail' style={{ width: '33rem' }}>
                <Card.Body>
                    <Card.Title className='titulo'>{libro.title}</Card.Title>
                    <Card.Text className='center'>Autor: {libro.author}</Card.Text>
                    <Card.Text>{libro.description}</Card.Text>
                    <Card.Text>Género: {libro.genre}</Card.Text>
                    <Card.Text>Precio: ${libro.price}</Card.Text>
                    <Card.Text>Condición: {libro.condition}</Card.Text>
                    <Card.Text>Stock disponible: {libro.stock}</Card.Text>
                    {/* para el contador */}
                    {cantidadAgregada > 0 ? (
                        <Link to='/cart' className='terminarCompra'>Finalizar mi compra</Link>
                    ) : (
                        <Contador stock={libro.stock} onAdd={handleOnAdd} />
                    )}
                </Card.Body>
            </Card>
        </div>
    );
}

export default ItemDetail;
