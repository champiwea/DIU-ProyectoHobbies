import React, { useState } from 'react';

const StarRating = ({ onRatingChange }) => {
  const [rating, setRating] = useState(0); // Estado para la calificación seleccionada

  const handleClick = (index) => {
    setRating(index); // Actualiza la calificación seleccionada
    if (onRatingChange) {
      onRatingChange(index); // Llama a la función para notificar el cambio
    }
  };

  return (
    <div style={styles.container}>
      {[1, 2, 3, 4, 5].map((index) => (
        <span
          key={index}
          onClick={() => handleClick(index)}
          style={{
            ...styles.star,
            color: index <= rating ? 'yellow' : 'gray' // Cambia el color si la estrella está seleccionada
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    gap: '5px', // Espacio entre las estrellas
    cursor: 'pointer',
    fontSize: '70px' // Tamaño de las estrellas
  },
  star: {
    transition: 'color 0.2s', // Efecto de transición al hacer clic
    outline: 'none'
  }
};

export default StarRating;

