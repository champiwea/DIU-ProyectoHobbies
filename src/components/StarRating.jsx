import React, { useState } from 'react';

const StarRating = ({ onRatingChange }) => {
  const [rating, setRating] = useState(0); 

  const handleClick = (index) => {
    setRating(index); 
    if (onRatingChange) {
      onRatingChange(index); 
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
            color: index <= rating ? 'yellow' : 'gray' 
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
    gap: '5px', 
    cursor: 'pointer',
    fontSize: '70px' 
  },
  star: {
    transition: 'color 0.2s', 
    outline: 'none'
  }
};

export default StarRating;

