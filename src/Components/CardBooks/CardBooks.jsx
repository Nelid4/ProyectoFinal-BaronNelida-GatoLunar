import React from 'react'

export const CardBooks = ({img, title, genre,price}) => {
  return (
    <div>
        <img src={img} alt="img1" />
        <h1>{title}</h1>
        <p>Género: {genre}</p>
        <p>${price}</p>
    </div>
  )
}
export default CardBooks
