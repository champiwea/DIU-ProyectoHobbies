import React, { useState } from 'react'

import StarRating from '../components/StarRating'

export const ReseniaPage = ({ setReviews }) => {
  const [comment, setComment] = useState(''); // Estado para el comentario
  const [rating, setRating] = useState(0); // Estado para la calificación
  const [successMessage, setSuccessMessage] = useState(''); // Estado para el mensaje de éxito

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating); // Actualiza el estado de rating
  };


  const handleSubmit = () => {
    console.log(comment)
    console.log(rating)
    if (comment.trim().length > 0 && rating > 0) {
        const newReview = {
            name: "Tu reseña",
            rating,
            comment,
        };

        console.log(newReview);
        setReviews(prevReviews => [...prevReviews, newReview]);
        setSuccessMessage('¡Reseña añadida correctamente!');
        setTimeout(() => {
            window.history.back();
        }, 2000);
    } else {
        alert('Por favor, añade un comentario y selecciona una calificación.');
    }
};

  return (
    <>
      <div className='resenia_page'>
        <h2>Añadir reseña</h2>
        <p>Comentario</p>
        <textarea 
          placeholder='Añade una reseña...'
          value={comment}
          onChange={handleCommentChange}
        />
        <p>Calificación</p>
        <StarRating onRatingChange={handleRatingChange}/>
        <div className='button-container'>
          <button onClick={handleSubmit}>Subir Reseña</button>
          <button onClick={() => window.history.back()}>Cancelar</button>
        </div>
        {successMessage && <p className="success-message">{successMessage}</p>} {/* Mostrar mensaje de éxito */}
      </div>
    </>
  );
};

export default ReseniaPage;

