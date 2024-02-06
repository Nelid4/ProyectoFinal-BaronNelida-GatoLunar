import React from 'react'

export const Item = ({personaje}) => {
  return (
            <div>
            <img src={personaje.image} alt={personaje.name} />
            <p>NAME: {personaje.name}</p> 
            <p>GENDER: {personaje.gender}</p>
            </div>
  )
}
