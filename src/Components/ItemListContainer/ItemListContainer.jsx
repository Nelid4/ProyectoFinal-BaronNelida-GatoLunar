import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import Spinner from 'react-bootstrap/Spinner';
import productosJson from "../productos.json";
import { Link, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function asyncMock(condition) {
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      if(condition === undefined){
        resolve(productosJson);
      }else{
        const librosFiltrados = productosJson.filter((item) => {
          return item.condition === condition
        })
        resolve(librosFiltrados);
      }

    }, 2000);
  });
}

export default function ItemListContainer() {

const { condition } = useParams();

  const [libros, setLibros] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() =>{async function fetchLibros() {
      try {
        const res = await asyncMock(condition);
        setLibros(res);
      } catch (error) {
        console.error("Error fetching libros:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchLibros();
  },[condition]);

  return(
    <main>
    <br />
    {loading ? (
      <Spinner animation="grow" />
    ) : (
      <section className="libros-container">
        {libros.map((item) => (
          <Link key={item.id} to={`/item/${item.id}`}>
            <div className="cardBook">
              <Card>
                <Card.Img variant="top" src={item.img} alt={item.title} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Button className='botonInfo' variant="secondary" size="lg">Más Información</Button>
                </Card.Body>
              </Card>
            </div>
          </Link>
        ))}
      </section>
    )}
  </main>
  );
}
