import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import './ItemDetailContainer.css';
import Contador from '../Contador/Contador';
import { CartContext } from '../CartContext/CartContext'; 
import { getFirestore, doc, getDoc } from 'firebase/firestore'; 
import Spinner from 'react-bootstrap/Spinner';  


function ItemDetailContainer() {
    const { id } = useParams();
    const [libro, setLibro] = useState(null);
    const [loading, setLoading] = useState(true);
    const { addItem } = useContext(CartContext);
    const [cantidadAgregada, setCantidadAgregada] = useState(0);

    const handleOnAdd = (cantidad) => {
        setCantidadAgregada(cantidad);
        addItem({ id: libro.id, title: libro.title, price: libro.price }, cantidad);
    };

    useEffect(() => {
        const fetchLibro = async () => {
            const db = getFirestore();
            const libroRef = doc(db, 'productos', id); 

            try {
                const libroSnap = await getDoc(libroRef);
                if (libroSnap.exists()) {
                    setLibro({ id: libroSnap.id, ...libroSnap.data() });
                } else {
                    console.log('No se encontró el libro');
                }
            } catch (error) {
                console.error('Error al obtener el libro:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchLibro();
    }, [id]);

    return (
        <div>
            {loading ? (
                <Spinner animation="grow" />
            ) : libro ? (
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
            ) : (
                <p>No se encontró el libro</p>
            )}
        </div>
    );
}

export default ItemDetailContainer;

