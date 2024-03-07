import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import './ItemDetailContainer.css';
import productosJson from "../productos.json";
import Contador from '../Contador/Contador';
import { CartContext } from '../CartContext/CartContext'; 

function ItemDetailContainer() {
  const { id } = useParams();
  const [libro, setLibro] = useState(null);
  const { addItem } = useContext(CartContext);
  const [cantidadAgregada, setCantidadAgregada] = useState(0);

  const handleOnAdd = (cantidad) => {
    setCantidadAgregada(cantidad);
    // Pasamos solo la información necesaria al agregar un producto al carrito
    addItem({ id: libro.id, title: libro.title, price: libro.price }, cantidad);
  };

  useEffect(() => {
    const libroEncontrado = productosJson.find(item => item.id === Number(id));

    if (libroEncontrado) {
      setLibro(libroEncontrado);
    }
  }, [id]);

  return (
    <div>
      {libro ? (
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
                // Cambiamos el enlace para redirigir al usuario al carrito
                <Link to='/cart' className='terminarCompra'>Finalizar mi compra</Link>
              ) : (
                <Contador stock={libro.stock} onAdd={handleOnAdd} />
              )}
            </Card.Body>
          </Card>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}

export default ItemDetailContainer;