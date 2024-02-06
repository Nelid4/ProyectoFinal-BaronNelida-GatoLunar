  import React, { useEffect, useState } from 'react';
  import './ItemListContainer.css';
  import ItemList from '../ItemList/ItemList';
  
  const url = 'https://rickandmortyapi.com/api/character';
  
  const ItemListContainer = () => {
    const [personajes, setPersonajes] = useState([]);
    
    useEffect(() => {
      fetch(url)
        .then(res => res.json())
        .then(data => setPersonajes(data.results))
        .catch(err => console.log(err));
    }, []);
    
    return (
      <>
        <div>
          <ItemList personajes={personajes}/>
        </div>
      </>
    )
  }
  
  export default ItemListContainer;
  
