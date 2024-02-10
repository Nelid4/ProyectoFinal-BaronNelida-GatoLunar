import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productosJson from "../productos.json";
import Card from 'react-bootstrap/Card';
import './ItemDetailContainer.css' ;
import Contador from '../Contador/Contador';

function ItemDetailContainer() {
  const { id } = useParams();
  const [libro, setLibro] = useState(null);

  useEffect(() => {
    const libroEncontrado = productosJson.find(item => {
      return item.id === Number(id);
    });
  
    if (libroEncontrado) {
      setLibro(libroEncontrado);
    }
  }, [id]);
  

  return (
    <div>
      {libro ? (
        <div className='detail'>
          <img className='imgDetail' src={libro.img} alt={libro.title}  />
          <Card className='cardDetail' style={{ width: '33rem' }}>
      <Card.Body>
        <Card.Title className='titulo'>{libro.title}</Card.Title>
        <Card.Text className='center'>Autor: {libro.author}</Card.Text>
        <Card.Text>{libro.description}</Card.Text>
        <Card.Text>Género: {libro.genre}</Card.Text>
        <Card.Text>Precio: ${libro.price}</Card.Text>
        <Card.Text>Condición: {libro.condition}</Card.Text>
        <Card.Text>Stock disponible: {libro.stock}</Card.Text>
        <Contador stock={libro.stock} />
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
