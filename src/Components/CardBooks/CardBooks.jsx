import React from 'react'

export const CardBooks = ({img, title, genre,price}) => {
  return (
    <div>
        <img src={img} alt="img1" height={350}/>
        <h2>{title}</h2>
        <p>Género: {genre}</p>
        <p>${price}</p>
    </div>
  )
}
export default CardBooks
