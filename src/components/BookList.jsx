// src/components/BookList.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookCard from './BookCardL';
import SearchBar from './SearchBar';

const removeAccents = (str) => {
  return str
    .replace(/[áàäâã]/gi, 'a')
    .replace(/[éèëê]/gi, 'e')
    .replace(/[íìïî]/gi, 'i')
    .replace(/[óòöôõ]/gi, 'o')
    .replace(/[úùüû]/gi, 'u')
    .replace(/ñ/gi, 'n');
};

const BookList = ({books, setBooks}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleBookClick = (book) => {
        navigate('/coverbook', { state: { book } }); 
    };

    const filteredBooks = books.filter(
        (book) =>
        removeAccents(book.title.toLowerCase()).includes(removeAccents(searchTerm.toLowerCase())) ||
        removeAccents(book.author.toLowerCase()).includes(removeAccents(searchTerm.toLowerCase()))
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
