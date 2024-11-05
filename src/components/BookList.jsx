// src/components/BookList.jsx
import React, { useState } from 'react'
import BookCard from './BookCardL'
import SearchBar from './SearchBar'
const BookList = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const books = [
        {
            title: 'El Hobbit',
            author: 'J.R.R. Tolken',
            cover: 'https://books.google.cl/books/content?id=xi2URRig7jYC&hl=es&pg=PP1&img=1&zoom=3&bul=1&sig=ACfU3U1wnBD2F9rEpMP3BAF8zPO8y3hnqw&w=1280',
        },
        {
            title: 'Odisea',
            author: 'Homero',
            cover: 'https://felpecta.cl/cdn/shop/files/homero-clasicos-odisea-austral-38088834187413_1800x.jpg?v=1695401105',
            },
        {
            title: 'Harry Potter y la piedra filosofal',
            author: 'J.K Rowling',
            cover: 'https://images.cdn2.buscalibre.com/fit-in/360x360/e3/bc/e3bcd85377567759874a0664f894a67b.jpg',
        },
        {
            title: 'Harry Potter y la cámara secreta',
            author: 'J.K Rowling',
            cover: 'https://images.cdn2.buscalibre.com/fit-in/360x360/ad/4d/ad4df4ba516014a9fc39a0288a70957f.jpg',
        },
        {
            title: 'El Código Da Vinci',
            author: 'Dan Brown',
            cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwzGzZ6k9gvSQx_DDfyeKxIxPQVsVXi9aycQ&s',
        },
        {
            title: 'El Extranjero',
            author: 'Albert Camus',
            cover: 'https://images.cdn2.buscalibre.com/fit-in/360x360/0d/30/0d30665fd8b3d4e5860cd17a4d9fddcd.jpg',
        },
        {
            title: 'El Túnel',
            author: 'Ernesto Sábato',
            cover: 'https://www.sueñosdepapel.cl/cdn/shop/products/tunel.webp?v=1680098095',
        }

        ];

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
            <BookCard key={index} title={book.title} author={book.author} cover={book.cover} />
        ))}
        {filteredBooks.length === 0 && <p>No se encontraron libros</p>}
        </div>
    </div>
    );
};

export default BookList;
