import React from 'react'
import StarRating from '../components/StarRating'

export const ReseniaPage = () => {
  return (
    <>
    <div className='resenia_page'>
      <h2>Añadir reseña</h2>
      <p>Comentario</p>
      <textarea placeholder='Añade una reseña...'></textarea>
      <p>Calificación</p>
      <StarRating/>
      <div className='button-container'>
        <button>Subir Reseña</button>
        <button>Cancelar</button>
      </div>
      
    </div>
    </>
  )
}

export default ReseniaPage
