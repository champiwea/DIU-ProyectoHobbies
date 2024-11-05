// src/components/Gallery.jsx
import React from 'react'
import BookCard from './BookCardG'

const BookGallery = () => {
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

    ];

    return (
    <div className="book_gallery">
        {books.map((book, index) => (
        <BookCard
            key={index}
            title={book.title}
            author={book.author}
            cover={book.cover}
        />
        ))}
    </div>
    );
};

export default BookGallery;
