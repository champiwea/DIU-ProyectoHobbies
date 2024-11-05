// src/components/Gallery.jsx
import React from 'react'
import BookCard from './BookCardG'
import { useNavigate } from 'react-router-dom';

const BookGallery = ({books, setBooks}) => {
    

    const navigate = useNavigate();

    const handleBookClick = (book) => {
        navigate('/coverbook', { state: { book } });
    };

    return (
    <div className="book_gallery">
        {books.filter(book => book.estado === 1)
        .map((book, index) => (
        <BookCard
            key={index}
            book={book}
            onClick={handleBookClick}
        />
        ))}
    </div>
    );
};

export default BookGallery;
