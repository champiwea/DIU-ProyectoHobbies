import React from 'react'

const BookCardG= ({ book, onClick }) => {
    return (
    <div className="book-card" onClick={() => onClick(book)}>
        <img src={book.cover} alt={`${book.title} cover`} className="book-card__cover" />
        <h3 className="book-card__title">{book.title}</h3>
        <p className="book-card__author">{book.author}</p>
    </div>
    );
};

export default BookCardG;