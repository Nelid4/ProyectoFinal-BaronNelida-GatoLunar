import { useEffect, useState } from 'react';
import './ItemListContainer.css';
import Spinner from 'react-bootstrap/Spinner';  
import { Link, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';

function ItemListContainer() {

  const [libros, setLibros] = useState([]);
  const [loading, setLoading] = useState(true);

  const { condition, genre } = useParams();

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const db = getFirestore();
      const productosCollection = collection(db, 'productos');
      let q = productosCollection;

      if (condition && genre) {
        q = query(productosCollection, where('condition', '==', condition), where('genre', '==', genre));
      } else if (condition) {
        q = query(productosCollection, where('condition', '==', condition));
      } else if (genre) {
        q = query(productosCollection, where('genre', '==', genre));
      }

      const querySnapshot = await getDocs(q);
      setLibros(querySnapshot.docs.map(doc => doc.data()));
      setLoading(false);
    }
    
    fetchData();
  }, [condition, genre]);

  return (
    <main>
      <br />

      {loading ? ( 
        <Spinner animation="grow" />
      ) : (
        <section className="libros-container">  

          {libros.map(item => (
            <Link key={item.id} to={`/item/${item.id}`}>   

              <div className="cardBook">
                <Card>
                  <Card.Img variant="top" src={item.img} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>   
                    <Button className="botonInfo" variant="secondary" size="lg">
                      Más Información
                    </Button>
                  </Card.Body>
                </Card>
              </div>

            </Link>
          ))}

        </section>
      )}
    
    </main>
  )

}

export default ItemListContainer;
