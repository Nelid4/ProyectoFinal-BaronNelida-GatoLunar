import React from 'react'
import { Item } from '../Item/Item'

const ItemList = ({personajes}) => {
     const personajesFiltrados = personajes.filter((personaje)=> {
    return personaje.gender === 'Female'
})


return (
    <div>
        {personajesFiltrados.map((personaje) => (
            <Item key={personaje.id} personaje={personaje}/>
        ))}
    </div>
    )
}

export default ItemList