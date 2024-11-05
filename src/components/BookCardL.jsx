import React from 'react'

const BookCardL = ({ title, author, cover, variant }) => {
    return (
        <div className={`book-card ${variant}`}>
        <img src={cover} alt={`${title} cover`} className="book-card__cover" />
        <div className="book-card__details">
            <h3 className="book-card__title">{title}</h3>
            <p className="book-card__author">{author}</p>
        </div>
        </div>
    );
};
  
  export default BookCardL;
  