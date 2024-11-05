import React from 'react'

const BookCardG= ({ title, author, cover }) => {
    return (
    <div className="book-card">
        <img src={cover} alt={`${title} cover`} className="book-card__cover" />
        <h3 className="book-card__title">{title}</h3>
        <p className="book-card__author">{author}</p>
    </div>
    );
};

export default BookCardG;