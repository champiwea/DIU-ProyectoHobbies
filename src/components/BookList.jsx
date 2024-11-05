// src/components/BookList.jsx
import React, { useState } from 'react'
import BookCard from './BookCardL'
import SearchBar from './SearchBar'
import { useNavigate } from 'react-router-dom';

const BookList = ({books, setBooks}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleBookClick = (book) => {
        navigate('/coverbook', { state: { book } }); // Navega a la ruta y pasa el libro como estado
    };

    // Filtra los libros en función del término de búsqueda
    const filteredBooks = books.filter(
    (book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
    <div className="book-list">
        <SearchBar onSearch={setSearchTerm} />
        <div className="book-list__results">
        {filteredBooks.map((book, index) => (
            <BookCard key={index} title={book.title} author={book.author} cover={book.cover} onClick={() => handleBookClick(book)}/>
        ))}
        {filteredBooks.length === 0 && <p>No se encontraron libros</p>}
        </div>
    </div>
    );
};

export default BookList;
