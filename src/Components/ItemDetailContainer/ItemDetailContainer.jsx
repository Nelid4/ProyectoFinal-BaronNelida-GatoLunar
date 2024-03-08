import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail'; 
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
                <ItemDetail libro={libro} cantidadAgregada={cantidadAgregada} handleOnAdd={handleOnAdd} />
            ) : (
                <p>No se encontró el libro</p>
            )}
        </div>
    );
}

export default ItemDetailContainer;
